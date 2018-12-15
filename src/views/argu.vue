<template>
  <div>{{name}}</div>

</template>

<script>
  // 动态路由传参
  export default {
    name: 'argu',
    props: {
      name: {
        // type: [String,Number]
        type: String,
        default: 'lison'
      }
    },
    beforeRouteUpdate (to, from, next) {
      // 路由发生变化时，组件被复用时调用,可以使用this这个实例
      console.log(to, from)
    }
  }
</script>

<style scoped>

</style>
