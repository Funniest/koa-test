import Router from "koa-router";
import api from "./api/index";

const routes = new Router();
routes.use("/api", api.routes());

export default routes;