<template>
  <div>
    <p>I am store</p>
    <a-input v-model="inputValue"/>
    <a-input v-bind:value="inputValue" v-on:input="handleInput"/>
    <p>{{inputValue}} -> lastLetter is {{inputValueLastLetter}}</p>
    <a-show v-bind:content="inputValue"/>
    <!--
    <p>{{ appName}}</p>
    -->
    <p>{{ userName}}</p>
    <p>{{ appNameWithVersion }}</p>
    <p>{{ firstLetter }}</p>
  </div>
</template>

<script>
  import AInput from '../components/AInput'
  import AShow from '../components/AShow'
  // import { mapState, mapGetters } from 'vuex'
  import { mapState } from 'vuex'
  // import { createNamespacedHelpers } from 'vuex'
  // const { mapState } = createNamespacedHelpers('user')

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
    computed: {
      // appName () {
      //   return this.$store.state.appName
      // },
      // userName () {
      //   return this.$store.state.user.userName
      // }
      // ...展开操作符
      // ...mapState([
      //   'appName',
      //   'userName'
      // ])
      // ...mapState({
      //   appName: state => state.appName,
      //   userName: state => state.user.userName
      // })
      ...mapState('user', {
        userName: state => state.userName
      }),
      inputValueLastLetter () {
        return this.inputValue.substr(-1, 1)
      },
      appNameWithVersion () {
        return this.$store.getters.appNameWithVersion
      },
      // ...mapGetters([
      //   'appNameWithVersion',
      //   'firstLetter'
      // ])
      firstLetter () {
        return this.userName.substr(0, 1)
      }
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
