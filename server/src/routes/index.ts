import { UserController } from "../controllers/user";
import { TweetController } from "../controllers/tweet";

export const Routes = [
  {
    method: "post",
    route: "/api/signup",
    controller: UserController,
    action: "Save"
  },
  {
    method: "post",
    route: "/api/login",
    controller: UserController,
    action: "Login"
  },
  {
    method: "get",
    route: "/api/users",
    controller: UserController,
    action: "All"
  },
  {
    method: "get",
    route: "/api/user",
    controller: UserController,
    action: "One"
  },
  {
    method: "post",
    route: "/api/tweets",
    controller: TweetController,
    action: "Save"
  },
  {
    method: "get",
    route: "/api/tweets",
    controller: TweetController,
    action: "All"
  }
];
