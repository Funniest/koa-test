import { Context, DefaultState } from "koa";
import bodyParser from 'koa-bodyparser';
import { default as KoaStatic } from 'koa-static';
import { createConnection } from "typeorm";

import routes from "./routes";

import { default as Views} from "koa-views";
import { default as Path } from "path";
import { send } from "process";

// const router = new Router<DefaultState, Context>();

const PORT = 4005

const Koa = require("koa");
const app = new Koa();

createConnection().then(connection => {
    // body parser
    app.use(bodyParser());

    // Route define
    app.use(KoaStatic(Path.join(__dirname, "./views")));

    // Default Route
    app.use((ctx: Context, next: any) => {
        return next().then(() => {
            if (ctx.path === '/') {
                ctx.redirect("test.html");
            }
        })
    });

    // Allowed methods
    app.use(routes.routes()).use(routes.allowedMethods());

    app.listen(PORT, () => {
        console.log("Listening to port 4005");
    });
}).catch(error => console.log(error));


export default app;