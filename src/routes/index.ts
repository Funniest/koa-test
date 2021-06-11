import { Context, DefaultState } from 'koa';
import Router from "koa-router";
import bodyParser from 'koa-bodyparser';

import { createReadStream } from 'fs';

import api from "./api/index";

const routes = new Router<DefaultState, Context>();

// body parser
routes.use(bodyParser());

// API Routes
routes.use("/api", api.routes());

// Basic Page Routes
routes.get('/login', (ctx) => {
    ctx.type = "html";
    ctx.body = createReadStream("./src/views/login.html");
});

routes.get('/register', (ctx) => {
    ctx.type = "html"
    ctx.body = createReadStream("./src/views/register.html");
});

export default routes;