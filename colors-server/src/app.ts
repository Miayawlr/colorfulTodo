import Koa from 'koa'
import { config } from './config'
import Router from 'koa-router' //路由中间件
import user from './routes/api/user' //api/user

import bodyParser from 'koa-bodyparser'
const app: Koa = new Koa()
const router: Router = new Router()

// 设置服务端时间戳
app.use(async (ctx, next) => {
  const start: number = new Date().getTime()
  await next()
  ctx.set('X-Response-Time', start.toString())
})

// 设置body请求接收
app.use(bodyParser())

// api router层
router.use('/miayaTodo/api/user', user.routes())

app.use(router.routes()).use(router.allowedMethods())

const { port }: { port: number } = config

// 监听端口
app.listen(port, () => {
  console.log(`seccess start server`)
  console.log(`local: http://127.0.0.1:${port}`)
})
