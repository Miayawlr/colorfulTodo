import Router from 'koa-router'
import { getMenuList } from '../controllers/api-user'
const router: Router = new Router()

// 获取全部列表
router.get('/getMenuList', getMenuList)

// 根据name获取详情
router.get('/getMenuByName', async (ctx) => {})

export default router
