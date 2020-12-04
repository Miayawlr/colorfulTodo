import Router from 'koa-router'

const router: Router = new Router()

// 获取全部列表
router.get('/getMenuList', async (ctx) => {
  ctx.body = 'MenuList'
})

export default router
