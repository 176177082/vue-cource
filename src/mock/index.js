import Mock from 'mockjs'
import { getUserInfo } from './response/user'

const Random = Mock.Random

// Mock.mock('http://localhost:3000/getUserInfo', getUserInfo)

// Mock.mock(/\/getUserInfo/, getUserInfo)

// 可以是一个模版
// Mock.mock(/\/getUserInfo/, { name: 'lison' })

Mock.setup({
  timeout: 1
})

Random.extend({
  fruit () {
    const fruit = ['apple', 'peach', 'lemon']
    return this.pick(fruit)
  }
})

Mock.mock(/\/getUserInfo/, 'post', getUserInfo)

export default Mock
