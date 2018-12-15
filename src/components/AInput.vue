<template>
    <input v-on:input="handleInput" v-bind:value="value"/>
</template>

<script>
  // 父子组件之间传值，是单向传送，通过。。
  export default {
    name: 'AInput',
    props: {
      value: {
        type: [String, Number],
        default: ''
      }
    },
    methods: {
      handleInput () {
        const value = event.target.value
        this.$emit('input', value)
      }
    }
  }
</script>

<style scoped>

</style>
