'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const {ctx} = this;
        const body = ctx.request.body;
        console.log(body);
        if(ctx.request.files) {
            const file = ctx.request.files[0];
            console.log(file);
        }
        ctx.body = 'hi, egg';
    }
}

module.exports = HomeController;
