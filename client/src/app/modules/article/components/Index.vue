<template>
  <h1>article test</h1>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'article',
    computed: {
      ...mapState({
        nightMode: state => state.settings.nightMode
      })
    }
  }
</script>

<style>
  h1 {
    text-transform: uppercase;
    color: red;
  }
</style>
