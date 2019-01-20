import { Request, Response } from "express";
const Message = require("../../models").Message;
const User = require("../../models").User;
Message.sync();

export class MessageController {
  public async NewMessage(req: Request, res: Response) {
    const { to_user, text } = req.body;
    const authorId = req["user"].id;
    if (authorId == to_user) {
      return res.status(400).send({
        message: "You cannot send a message to yourself"
      });
    }

    try {
      const message = await Message.create({
        to_user,
        text,
        from_user: authorId,
        read: false
      });
      return res.status(201).send(message);
    } catch (error) {
      return res.send(error.message);
    }
  }

  public async All(req: Request, res: Response) {
    try {
      const messages = await Message.findAll({
        attributes: ["createdAt", "text", "read"],
        include: [
          {
            model: User,
            as: "from",
            attributes: ["id", "name", "username"]
          },
          {
            model: User,
            as: "receiver",
            attributes: ["id", "name", "username"]
          }
        ],
        order: [["createdAt", "DESC"]]
      });
      return res.send(messages);
    } catch (error) {
      return res.send(error.message);
    }
  }
}
