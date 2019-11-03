'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(this)
    ctx.body = 'hi, egg';
  }
  async getEnv() {
    const ctx = this.ctx;
    ctx.body = {
      env: ctx.app.config.env
    }
  }
}

module.exports = HomeController;
