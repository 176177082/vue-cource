<template>
  <div>
    <p>I am store</p>
    <a-input v-model="inputValue"/>
    <a-input v-bind:value="inputValue" v-on:input="handleInput"/>
    <p>{{inputValue}} -> lastLetter is {{inputValueLastLetter}}</p>
    <a-show v-bind:content="inputValue"/>

    <p>{{ appName}}</p>
    <p>{{ userName}}</p>
    <p>{{ appNameWithVersion }}</p>
    <p>{{ firstLetter }}</p>
    <button v-on:click="handleChangeAppName">修改vuex中appName</button>
    <button v-on:click="changeuserName">修改用户名</button>
    <button v-on:click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>

<script>
  import AInput from '../components/AInput'
  import AShow from '../components/AShow'
  // import { mapState, mapGetters } from 'vuex'
  import { mapState, mapMutations, mapActions } from 'vuex'
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
      appName () {
        return this.$store.state.appName
      },
      // 对象的set,get属性
      // appName: {
      //   set: function (newValue) {
      //     this.inputValue = newValue + 'sd11111111111'
      //   },
      //   get: function () {
      //     return this.inputValue + 'sdfsdf'
      //   }
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
      // ...mapState('user', {
      //   userName: state => state.userName
      // }),
      ...mapState({
        userName: state => state.user.userName,
        todoList: state => state.todo.todoList
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
      ...mapMutations([
        'SET_USER_NAME',
        'SET_APP_NAME'
      ]),
      ...mapActions([
        'updateAppName'
      ]),
      handleInput (val) {
        this.inputValue = val
      },
      handleChangeAppName () {
        // this.appName = 'new'
        // this.$store.commit('SET_APP_NAME','newAppname')
        // this.$store.commit('SET_APP_NAME', {
        //   appName: 'newAppName'
        // })
        // this.$store.commit({
        //   type: 'SET_APP_NAME',
        //   appName: 'newAppName'
        // })
        // this.SET_APP_NAME('newAppname')
        this.updateAppName()
      },
      changeuserName () {
         this.SET_USER_NAME('newusername')
        // 还可以使用dispatch来触发这个action
        // this.$store.dispatch('updateAppName','123')
      },
      registerModule () {
        this.$store.registerModule('todo', {
          state: {
            todoList: [
              '动态注册模块1',
              '动态注册模块2'
            ]
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
