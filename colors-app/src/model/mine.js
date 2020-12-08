import instance from 'utils/request'

//获取全部菜单
export const getMenuList = () => {
  return instance({
    url: '/getMenuList',
    method: 'get',
  })
}

// 根据name获取菜单

export const getMenuByName = (name) => {
  return instance({
    url: `/getMenuByName?name=${name}`,
    method: 'get',
  })
}

// 修改状态
export const editorStatus = (data) => {
  return instance({
    url: `/ediotrMenuStatus`,
    method: 'put',
    data,
  })
}

// 删除item项

export const delItem = (data) => {
  return instance({
    url: '/delMenuitem',
    method: 'delete',
    data,
  })
}

// 新增

export const addItem = (data) => {
  return instance({
    url: '/addMenuItem',
    method: 'post',
    data,
  })
}
