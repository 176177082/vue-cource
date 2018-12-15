<template>
    <div>
      <p>I am store</p>
      <a-input v-model="inputValue" />
      <a-input v-bind:value="inputValue" v-on:input="handleInput"/>
      <p>{{inputValue}}</p>
      <a-show v-bind:content="inputValue"/>
    </div>
</template>

<script>
  import AInput from '../components/AInput'
  import AShow from '../components/AShow'
  export default {
    name: 'store',
    data () {
      return {
        inputValue: ''
      }
    },
    components: {
      AInput,
      AShow
    },
    methods: {
      handleInput (val) {
        this.inputValue = val
      }
    }
  }
</script>

<style scoped>

</style>
