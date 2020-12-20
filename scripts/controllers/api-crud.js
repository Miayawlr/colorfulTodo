const fs = require('fs-extra')
const path = require('path')
const dataPath = path.join(__dirname, '../../data/data.json')
const url = require('url')
const utils = require('../utils')
const Controller = {}

Controller.getMessage = (req, res) => {
  fs.readFile(dataPath, 'utf-8', async (err, data) => {
    res.send(data)
  })
}

Controller.getByName = (req, res) => {
  const _url = req.url
  const data = fs.readFileSync(dataPath, 'utf-8')
  const name = url.parse(_url).query.split('=')[1]
  const result = utils.getListByName(data, name)
  res.send(JSON.stringify(result))
}

Controller.getCountNum = (req, res) => {
  fs.readFile(dataPath, 'utf-8', async (err, data) => {
    const result = await utils.getTodoTaskNum(data)
    res.send(JSON.stringify(result))
  })
}

Controller.editorToDoStatus = (req, res) => {
  const data = fs.readFileSync(dataPath, 'utf-8')
  const params = JSON.parse(req.body)
  const { id } = params
  const { name } = params
  const { status } = params
  const baseData = JSON.parse(data)
  const result = utils.changeTodoStatus(data, name, id, status)
  for (let key in baseData.data) {
    if (baseData.data[key].name === name) {
      const arr = baseData.data[key].tasks
      for (let val of arr) {
        if (val.id === result[0].id) {
          val.done = result[0].done
        }
      }
    }
  }
  const json_str = JSON.stringify(baseData)
  fs.writeFileSync(dataPath, json_str)
  res.send(
    JSON.stringify({
      success: true,
      code: 200,
      message: '修改成功',
      data: baseData,
    })
  )
}

Controller.delToDo = (req, res) => {
  const data = fs.readFileSync(dataPath, 'utf-8')
  const params = JSON.parse(req.body)
  const { id } = params
  const { name } = params
  const baseData = JSON.parse(data)
  const datas = baseData.data
  const v = datas
    .filter((item) => item.name === name)[0]
    ['tasks'].filter((task) => task.id !== id)
  for (let key in datas) {
    if (datas[key]['name'] === name) {
      datas[key]['tasks'] = v
    }
  }
  fs.writeFileSync(dataPath, JSON.stringify(baseData))
  res.send(JSON.stringify({ success: true, code: 200, message: '删除成功' }))
}

Controller.putToDo = (req, res) => {
  const data = fs.readFileSync(dataPath, 'utf-8')
  const params = JSON.parse(req.body)
  const { name } = params
  const { menu } = params
  const id = Math.floor(Math.random() * (100 - 1)) + 1
  console.log(id)
  const baseData = JSON.parse(data)
  const datas = baseData.data
  const v = datas.filter((item) => item.name === name)[0]['tasks']
  const todoItem = {
    id,
    title: menu,
    date: new Date(),
    done: false,
    deleted: false,
  }
  v.push(todoItem)
  for (let key in datas) {
    if (datas[key]['name'] === name) {
      datas[key]['tasks'] = v
    }
  }
  fs.writeFileSync(dataPath, JSON.stringify(baseData))
  res.send(JSON.stringify({ success: true, code: 200, message: '创建成功' }))
}

module.exports = Controller
