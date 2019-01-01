import { Request, Response } from "express";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../models").User;

export class UserController {
  public async Save(req: Request, res: Response) {
    const user = req.body;
    const passwordHash = bcrypt.hashSync(user.password, 10);

    try {
      const response = await User.create({
        name: user.name,
        password: passwordHash,
        email: user.email,
        username: user.name.replace(/\s/g, "")
      }).catch(error => {
        throw error;
      });

      delete response.dataValues.password;

      return res.status(201).send(response);
    } catch (error) {
      return res
        .status(409)
        .send({ message: "An account exists with given name or email" });
    }
  }

  public async One(req: Request, res: Response) {
    const id = req["user"].id;

    try {
      const user = await User.findOne({
        where: { id },
        attributes: ["name", "username", "createdAt"]
      });

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      return res.send(user);
    } catch (error) {
      return res.send(error);
    }
  }

  public async Login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res
          .status(404)
          .send({ message: "user with given email not found" });
      }
      if (bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        user.dataValues.token = token;
        //   password hash should not be sent to client
        delete user.dataValues.password;
        return res.status(200).send({ user });
      } else {
        return res.status(401).send({ message: "Wrong password or email!" });
      }
    } catch (error) {
      return res.send(error);
    }
  }

  public async All(req: Request, res: Response) {
    try {
      const users = await User.findAll({
        attributes: ["id", "name", "username"]
      });
      return res.send(users);
    } catch (error) {
      return res.send(error);
    }
  }
}
