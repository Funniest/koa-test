import Router from "koa-router";
import v1 from "./v1/index";

const api = new Router();
api.use("/v1", v1.routes());

export default api;