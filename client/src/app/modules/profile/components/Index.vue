<template>
  <v-layout row wrap>
    <v-flex xs12 md4>
      <ProfileCard />
    </v-flex>
    <v-flex md8>
      
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
  import ProfileCard from './ProfileCard'

  export default {
    components: {
      ProfileCard
    }
  }
</script>
