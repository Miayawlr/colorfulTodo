import * as Koa from 'koa'
import personal from '../model/personal'
class UserController {
  // 获取所有tood项
  async getMenuList(ctx: Koa.Context, next: any): Promise<void> {
    const boyds = 'menuList'
    const val = await personal.find({})
    console.log(val)
    // await next()
    ctx.body = boyds
  }
  // todo页
  async getMenuByName(ctx: Koa.Context, next: any): Promise<void> {
    const boyds = 'getMenuByName'
    await next()
    ctx.body = boyds
  }
  // 修改todo的状态
  async ediotrMenuStatus(ctx: Koa.Context, next: any): Promise<void> {
    const postData = ctx.request.body
    await next()
    ctx.body = postData
  }
  // 删除详情代办状态
  async delMenuitem(ctx: Koa.Context, next: any): Promise<void> {
    const postData = ctx.request.body
    await next()
    ctx.body = postData
  }
  // 新增待办事项
  async addMenuItem(ctx: Koa.Context, next: any): Promise<void> {
    const postData = ctx.request.body
    await next()
    console.log(postData + 'post')
    ctx.body = postData
  }
}

export default UserController
