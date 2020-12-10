import * as Koa from 'koa'
import menuColors from '../model/menucolors'
import menu from '../model/menu'

class UserController {
  // 获取所有tood项
  async getMenuList(ctx: Koa.Context, next: any): Promise<void> {
    const all_list = await menuColors.aggregate([
      {
        $lookup: {
          from: 'menu',
          localField: 'todo_id',
          foreignField: 'todo_id',
          as: 'tasks',
        },
      },

      {
        $project: {
          _id: 0,
          todo_id: 0,
        },
      },
    ])
    const will_thing = await menu.find({ done: false }, { _id: 0 }).count()
    await next()
    if ((ctx.status = 200)) {
      ctx.body = {
        code: 200,
        msg: '请求成功',
        data: all_list,
        task_num: will_thing,
      }
    } else {
      ctx.body = {
        code: ctx.status,
        data: [],
        msg: 'error',
      }
    }
  }
  // 获取代办项

  // todo页
  async getMenuByName(ctx: Koa.Context, next: any): Promise<void> {
    const { name } = ctx.request.query
    const all_list = await menuColors.aggregate([
      {
        $lookup: {
          from: 'menu',
          localField: 'todo_id',
          foreignField: 'todo_id',
          as: 'tasks',
        },
      },

      {
        $project: {
          _id: 0,
          todo_id: 0,
        },
      },
      {
        $match: {
          name: name,
        },
      },
    ])
    await next()
    ctx.body = {
      code: 200,
      msg: '请求成功',
      data: all_list,
    }
  }
  // 修改todo的状态
  async ediotrMenuStatus(ctx: Koa.Context, next: any): Promise<void> {
    const postData = ctx.request.body
    const toDoIdSelect: any = {
      Personal: '1',
      Work: '2',
      Home: '3',
    }
    const { name } = postData
    const { id } = postData
    const { status } = postData
    const doDoName = toDoIdSelect[name]
    await menu.updateOne({ todo_id: doDoName, id: id }, { done: status })
    await next()
    ctx.body = {
      msg: '修改成功',
      code: 200,
    }
  }
  // 删除详情代办状态
  async delMenuitem(ctx: Koa.Context, next: any): Promise<void> {
    const postData = ctx.request.body
    const toDoIdSelect: any = {
      Personal: '1',
      Work: '2',
      Home: '3',
    }
    const { name } = postData
    const { id } = postData
    const doDoName = toDoIdSelect[name]
    await menu.deleteOne({
      todo_id: doDoName,
      id: id,
    })
    await next()
    ctx.body = {
      msg: '删除成功',
      code: 200,
    }
  }
  // 新增待办事项
  async addMenuItem(ctx: Koa.Context, next: any): Promise<void> {
    const postData = ctx.request.body
    const toDoIdSelect: any = {
      Personal: '1',
      Work: '2',
      Home: '3',
    }
    const { name } = postData
    const title = postData.menu
    const doDoName = toDoIdSelect[name]
    const id = Math.floor(Math.random() * (100 - 1)) + 1
    const todoData = new menu({
      todo_id: doDoName,
      id: id,
      title: title,
      done: false,
      deleted: false,
    })
    await todoData.save()
    // await next()
    ctx.body = postData
    ctx.body = {
      msg: '增加成功',
      code: 200,
    }
  }
}

export default UserController
