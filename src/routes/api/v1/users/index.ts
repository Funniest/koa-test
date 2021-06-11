import Router from 'koa-router';

const users = new Router();

users.get('/whoami', (ctx) => {
    ctx.body = "I'm Admin"
});

export default users;