import Router from 'koa-router'
import UserController from '../controllers/api-user'
const router: Router = new Router()

const controllers: UserController = new UserController()

// 获取全部列表
router.get('/getMenuList', controllers.getMenuList)

// 根据name获取详情
router.get('/getMenuByName', controllers.getMenuByName)

// 修改详情代办状态

router.put('/ediotrMenuStatus', controllers.ediotrMenuStatus)

// 删除详情代办状态

router.delete('/delMenuitem', controllers.delMenuitem)

// 新增待办事项

router.post('/addMenuItem', controllers.addMenuItem)

export default router
