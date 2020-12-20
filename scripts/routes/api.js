const { app } = require('../request')
const Controller = require('../controllers/api-crud')
// 获取全部
app.get('/getMessage', Controller.getMessage)

// 获取单个列表
app.get('/getByName', Controller.getByName)

// 获取数量
app.get('/getCountNum', Controller.getCountNum)

// 编辑状态
app.post('/editorToDoStatus', Controller.editorToDoStatus)

// 删除
app.post('/delToDo', Controller.delToDo)

// 新增
app.post('/putToDo', Controller.putToDo)

module.exports = app
