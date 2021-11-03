<template>
  <v-layout row wrap>
    <v-flex xs12 sm4 md3>
      <Trends />
    </v-flex>
    <v-flex xs12 sm8 md9>
      <Wall />
    </v-flex>
  </v-layout>
</template>

<script>
  import Trends from './Trends'
  import Wall from './Wall'

  export default {
    name: 'articles',
    components: {
      Trends,
      Wall
    }
  }
</script>
