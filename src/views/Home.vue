<template>
  <div class="home">
    <b>{{food}}</b>
    <button v-on:click="handleClick('back')">返回上一页</button>
    <button v-on:click="handleClick('push')">跳转到父页</button>
    <button v-on:click="handleClick('replace')">替换到父页</button>
    <button @click="getInfo">请求数据</button>

  </div>
</template>

<script>
  // @ is an alias to /src
  // v-on 用在普通元素上时，监听原生 DOM 事件
  // import HelloWorld from '../components/HelloWorld.vue'
  import { getUserInfo } from '../api/user'

  export default {
    name: 'home',
    // components: {
    //   HelloWorld
    // },
    props: {
      food: {
        type: String,
        default: 'apple'
      }
    },
    // 路由组件内进入守卫钩子，不可以使用this,此时组件还没有渲染
    beforeRouteEnter (to, from, next) {
      console.log(to)
      console.log(from)
      next(vm => {
        console.log(vm)
      })
    },
    // 路由组件内离开前守卫钩子，可以使用this
    beforeRouteLeave (to, from, next) {
      // 很有作用，用户离开前提醒用户保存和作其他操作
      const leave = confirm('你确定要离开吗')
      if (leave) next()
      else next(false)
    },
    methods: {
      handleClick (type) {
        // 返回上一页
        // this.$router.go(-1)
        // this.$router.back()
        // 前进一页
        // this.$router.go(1)
        if (type === 'back') {
          this.$router.back()
        } else if (type === 'push') {
          // this.$router.push('/parent')
          // 也可以写成一个对象的形式
          // const name = 'lison'
          this.$router.push(
            {
              // name: 'parent',
              // // 在url上加入参数
              // query: {
              //   name: 'lison'
              // }
              // 可以跳转到动态路由上，没显示其信息
              // name: 'argu',
              // params: {
              //   name: 'lison'
              // }
              // path: `/argu/${name}`
              name: 'argu',
              params: {
                name: 'lison'
              }
            })
        } else if (type === 'replace') {
          this.$router.replace({
            name: 'parent'
          })
        }
      },
      getInfo () {
        getUserInfo({ userId: 21 }).then(res => {
          console.log('res:', res)
        })
      }
    }
  }

</script>
