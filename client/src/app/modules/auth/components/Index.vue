<template>
  <v-container fluid fill-height style="padding: 0;">
    <v-layout class="AuthPage-hero flex-grow" row wrap>
      <div id="particles"></div>
      <v-flex md6>
        <Welcome/>
      </v-flex>
      <v-flex md6>
        <v-layout row wrap>
          <v-flex md12 lg6>
            <Register/>
          </v-flex>
          <v-flex md12 lg6>
            <Login/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Welcome from './Welcome'
  import Login from './Login'
  import Register from './Register'

  import particlesConfig from '@/assets/json/particles.config.json'

  export default {
    name: 'AuthPage',
    components: {
      Welcome,
      Login,
      Register,
    },
    mounted () {
      window.particlesJS.load('particles', particlesConfig)
    }
  }
</script>

<style>
  .AuthPage-hero {
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    background-color: #1da1f2;
  }
  #particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }
  .Register,
  .Login,
  .Welcome {
    z-index: 2;
  }

  .flex-grow {
    flex-grow: 1 !important;
  }

  .AuthPage-form {
    width: 90%;
    max-width: 384px;
    margin: 16px auto;
  }
</style>
