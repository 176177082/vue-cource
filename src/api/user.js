import axios from './index'
import user from '../store/module/user'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getUserInfo',
    method: 'post',
    data: {
      userId: userId
    }
  })
}
