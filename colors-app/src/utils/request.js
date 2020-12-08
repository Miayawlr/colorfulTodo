import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:9000/miayaTodo/api/v2',
  timeout: 9999,
})
// requeset interceptor
instance.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
instance.interceptors.request.use(
  (config) => {
    // config.headers = {
    //   'Content-Type': 'application/json',
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

//response interceptor

instance.interceptors.response.use(
  (response) => {
    if (response.data.code === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data.msg)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
