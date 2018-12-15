<template>
  <div class="email">
    this is email
    <button v-on:click="handleClick">按我</button>
  </div>
</template>

<script>
  export default {
    name: 'email',
    methods: {
      handleClick () {
        this.$bus.$emit('on-click', 'hello')
      }
    }
    // mounted () {
    //   this.$on('on-click', mes => {
    //     console.log(mes)
    //   })
      // console.log(this.$bus)
    // }
  }
</script>

<style scoped>
  .email{
    border: 5px solid green;
  }

</style>
