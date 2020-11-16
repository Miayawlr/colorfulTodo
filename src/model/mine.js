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

export const getTodoNumCount = () => {
  return instance({
    url: '/getCountNum',
    method: 'get',
  })
}
