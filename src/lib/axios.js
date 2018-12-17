import axios from 'axios'
import { baseURL } from '../config'

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      header: {

      }
    }
    return config
  }
  interceptors (instance) {
    // 请求拦截器
    instance.interceptors.request.use(config => {
      // 请求权的控制，添加一个全局的loading
      // Spin标签 Spin.show()
      console.log(config)
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截器
    instance.interceptors.response.use(res => {
      console.log(res)
      return res
    }, error => {
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(options)
  }
}
export default HttpRequest
