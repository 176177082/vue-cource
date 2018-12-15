<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button v-on:click="handleClick('back')">返回上一页</button>
    <button v-on:click="handleClick('push')">跳转到父页</button>
    <button v-on:click="handleClick('replace')">替换到父页</button>

  </div>
</template>

<script>
  // @ is an alias to /src
  // v-on 用在普通元素上时，监听原生 DOM 事件
  // import HelloWorld from '../components/HelloWorld.vue'

  export default {
    name: 'home',
    // components: {
    //   HelloWorld
    // },
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
      }
    }
  }

</script>
