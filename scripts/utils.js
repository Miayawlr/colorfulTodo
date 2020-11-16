const fs = require('fs-extra')
const path = require('path')
const url = require('url')
const dataPath = path.join(__dirname, '../data/data.json')

const getFileAll = (file) => {
  const { data } = JSON.parse(file)
  const local_store = {}
  data.map((item, i) => {
    return (local_store[item.name] = item)
  })
  return Promise.resolve(local_store)
}

const filterById = (data, id) => {
  data = data.filter((item) => item.id === id)
  return data
}
// 根据name 筛选数据
const getListByName = (file, name = 'Work') => {
  const { data } = JSON.parse(file)
  const local_store = {}

  data.map((item, i) => {
    return (local_store[item.name] = item)
  })
  local_store[name].success = true
  local_store[name].code = 200
  return Promise.resolve(local_store[name])
}
// 获取单条数据
const getData = async (file, name, id) => {
  const dataId = Number(id)
  const res = await getListByName(file, name)
  const task = filterById(res, dataId)
  return task
}

const getTodoTaskNum = async (file) => {
  const res = await getFileAll(file)
  const countArr = []
  for (let key in res) {
    const { tasks } = res[key]
    const c = tasks.filter((item) => item.done !== true)
    countArr.push(...c)
  }
  return { success: true, code: 200, count: countArr.length }
}

module.exports = {
  getFileAll,
  getListByName,
  getData,
  getTodoTaskNum,
}
