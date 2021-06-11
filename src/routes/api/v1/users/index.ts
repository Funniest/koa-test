import Router from 'koa-router';

// import { User } from '../../../../entity/User';

const users = new Router();

users.get('/whoami', (ctx) => {
    ctx.body = "I'm Admin";
});

users.post('/login', (ctx) => {
    ctx.body = "This is login API";
});

users.get('/logout', (ctx) => {
    ctx.body = "This is logout API";
});

users.post('/register', async (ctx) => {
    //const id: string = ctx.request.body.id;
    //const password: string = ctx.request.body.password;
    //const nickname: string = ctx.request.body.nickname;

    console.log(ctx.request.body);

    // id lenght limit : more then 5 word
    // password lenght limit : more then 8 word
    // nickname lenght limit : more then 3 word
    /*if (id.trim().length != 0 && 
        password.trim().length != 0 && 
        nickname.trim().length != 0) {
        // debug log
        console.log(`id : ${id}, password : ${password}, nickname: ${nickname}`);
    } else {
        ctx.status = 401;
        ctx.body = "nil";
    }*/
});

export default users;