<template>
  <v-card class="br2 pa4">
    <div>
      <h4
        :class="nightMode ? 'white--text':null"
        class="tags-title">Latest trends</h4>
    </div>
    <ul class="tags list f6 pl0 mb0">
      <li
        v-for="tag in tags"
        class="tags__li pv2">
        <a href="#" class="link">
          <span
            class="tag"
            :class="nightMode ? 'white--text':'primary--text'">
            {{ tag.text }}
          </span>
          <span class="db grey--text">
            {{ tag.mentions }} mentions
          </span>
        </a>
      </li>
    </ul>
  </v-card>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data: () => ({
      tags: [
        { text: '#AmazingSerena', mentions: '134.5k' },
        { text: '#womenintech', mentions: '11k' },
        { text: '#SenWarrenRoastsWellsFargo', mentions: '99k' },
        { text: '#blackgirlmagic', mentions: '256.5k' },
        { text: '#becauseofthemwecan', mentions: '4.1k' },
        { text: '#gillscottheron', mentions: '20.11k' },
        { text: '#trending', mentions: '4.1k' },
      ]
    }),

    computed: {
      ...mapState({
        nightMode: state => state.settings.nightMode
      })
    }
  }
</script>

<style scoped>
  /* tachyons list component: 
    http://tachyons.io/components/:lists/hashtagsClassObj/index.html
  */
  .ba {
    border-style: solid;
    border-width: 1px;
  }
  .br2 {
    border-radius: .25rem;
  }
  .db {
    display: block;
  }
  .tag {
    font-weight: 700;
  }
  .link {
    line-height: 1.25;
    transition: color .15s ease-in;
    text-decoration: none;
  }
  .list {
    list-style-type: none;
  }
  .pa4 {
    padding: 2rem;
  }
  .pl0 {
    padding-left: 0;
  }
  .pv2 {
    padding-top: .5rem;
    padding-bottom: .5rem;
  }
  .mb0 {
    margin-bottom: 0;
  }

  .no-underline {
    text-decoration: none;
  }
  .tags-title {
    margin-top: 0;
    margin-bottom: 0;
    display: inline-block;
    font-size: 1rem;
    font-weight: 400;
    vertical-align: middle;
    text-transform: uppercase;
    letter-spacing: -0.4px;
    color: rgba(0,0,0, 0.64);
  }
  .f6 {
    font-size: .875rem;
  }
  /* < -- tachyons component end */

  .tags {
    margin-top: .5rem;
  }
</style>
