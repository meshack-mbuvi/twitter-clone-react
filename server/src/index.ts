import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

// Routes
import { Routes } from "./routes/index";

const jwt = require("jsonwebtoken");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const secretKey = process.env.SECRET_KEY;
app.use("/api", (req: express.Request, res, next) => {
  if (req.originalUrl === "/api/login" || req.originalUrl === "/api/signup") {
    return next();
  }

  const token = req.body.token || req.query.token || req.headers.authorization;

  if (token && token.split(" ")[0] === "Bearer") {
    jwt.verify(token.split(" ")[1], secretKey, (error, decodedUser) => {
      if (error) {
        return res.status(401).send(error);
      } else {
        req["user"] = decodedUser;
        next();
      }
    });
  } else {
    return res
      .status(401)
      .send({ message: "Missing authorization bearer token" });
  }
});

// Routes configuration
Routes.forEach(route => {
  app[route.method](route.route, async (req, res) => {
    const controller = new route.controller();
    try {
      return await controller[route.action](req, res);
    } catch (error) {
      return error;
    }
  });
});

const port = 3001;
var server_host = process.env.HOST || "0.0.0.0";
app.listen(port, server_host, () => console.log(`Listening on port ${port}`));

export default app;
