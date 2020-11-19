const http = require('http')
const fs = require('fs-extra')
const path = require('path')
const url = require('url')
const dataPath = path.join(__dirname, '../data/data.json')
// const dataBase = fs.readFileSync(dataPath, 'utf-8')
const { app } = require('./request')
const utils = require('./utils')

const server = http.createServer(app)
server.listen(8124, () => {
  console.log('server start at http://127.0.0.1:8124')
})
app.get('/getMessage', (req, res) => {
  fs.readFile(dataPath, 'utf-8', async (err, data) => {
    res.send(data)
  })
})

app.get('/getByName', (req, res) => {
  const _url = req.url
  fs.readFile(dataPath, 'utf-8', async (err, data) => {
    const name = url.parse(_url).query.split('=')[1]
    const result = await utils.getListByName(data, name)

    res.send(JSON.stringify(result))
  })
})

app.get('/getCountNum', (req, res) => {
  fs.readFile(dataPath, 'utf-8', async (err, data) => {
    const result = await utils.getTodoTaskNum(data)
    res.send(JSON.stringify(result))
  })
})

// 修改详情

app.post('/editorToDoStatus', (req, res) => {
  fs.readFile(dataPath, 'utf-8', async (err, data) => {
    const params = JSON.parse(req.body)
    const { id } = params
    const { name } = params
    const { status } = params
    const baseData = JSON.parse(data)
    const result = await utils.changeTodoStatus(data, name, id, status)
    for (let key in baseData.data) {
      if (baseData.data[key].name === name) {
        const arr = baseData.data[key].tasks
        for (let val of arr) {
          if (val.id === result[0].id) {
            console.log(val)
            val.done = result[0].done
          }
        }
      }
    }
    const json_str = JSON.stringify(baseData)
    // console.log(json_str)
    await fs.writeFile(dataPath, json_str)
    res.send(JSON.stringify({ success: true, code: 200, message: '修改成功' }))
  })
})
