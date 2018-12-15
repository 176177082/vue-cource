<template>
  <div class="tel">
    this is tel
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    name: 'tel',
    data () {
      return {
        message: ''
      }
    },
    mounted () {
      this.$bus.$on('on-click', (mes) => {
        this.message = mes
      })
    }
  }
</script>

<style scoped>
.tel{
  border: 5px solid red;
}
</style>
