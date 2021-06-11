import Router from "koa-router";
import users from "./users/index";

const v1 = new Router();

v1.use("/user", users.routes());

export default v1;