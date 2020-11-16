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

app.post('/editorToDo', (req, res) => {
  fs.readFile(dataPath, 'utf-8', async (err, data) => {})
})
