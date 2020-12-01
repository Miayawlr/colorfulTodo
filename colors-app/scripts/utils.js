const getFileAll = (file) => {
  const { data } = JSON.parse(file)
  const local_store = {}
  data.map((item, i) => {
    return (local_store[item.name] = item)
  })
  return Promise.resolve(local_store)
}

const filterById = (data, id) => {
  data = data.tasks.filter((item) => item.id === id)
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
  return local_store[name]
  // return Promise.resolve(local_store[name])
}
// 获取单条数据
const getData = (file, name, id) => {
  const dataId = Number(id)
  const res = getListByName(file, name)
  const task = filterById(res, dataId)
  return task
}
// 获取待办条数
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

// 修改完成状态

const changeTodoStatus = (file, name, id, status) => {
  const task = getData(file, name, id)
  task[0].done = status
  return task
}

// 获取用户头像

module.exports = {
  getFileAll,
  getListByName,
  getData,
  getTodoTaskNum,
  changeTodoStatus,
}
