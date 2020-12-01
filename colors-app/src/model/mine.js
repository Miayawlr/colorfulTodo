import instance from 'utils/request'
// 获取index页的ToDo
export const getTodoList = () => {
  return instance({
    url: '/getMessage',
    method: 'get',
  })
}
// 根据name获取todo的详情
export const getTodoByName = (name) => {
  return instance({
    url: `/getByName?name=${name}`,
    method: 'get',
  })
}
// 获取待完成的Todo项
export const getTodoNumCount = () => {
  return instance({
    url: '/getCountNum',
    method: 'get',
  })
}

export const editorTodoStatus = (data) => {
  return instance({
    url: '/editorToDoStatus',
    method: 'post',
    data,
  })
}

// 删除
export const delTodo = (data) => {
  return instance({
    url: '/delToDo',
    method: 'post',
    data,
  })
}

// 增加
export const putTodo = (data) => {
  return instance({
    url: '/putToDo',
    method: 'post',
    data,
  })
}
