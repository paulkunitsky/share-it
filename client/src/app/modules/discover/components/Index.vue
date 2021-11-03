<template>
  <div>
    <v-progress-circular
      class="center"
      v-if="requestPending"
      indeterminate
      :color="$vuetify.theme.primary"
      :size="50"
    />
    <div class="grid" v-else-if="currentPagePosts">
      <div
        class="grid__item card"
        v-for="post in currentPagePosts"
        :key="post.urls.regular">
        <div class="card__body">
          <img
            class="card__img"
            v-img="{
              src: post.urls.regular,
              group: 'main',
              opened: onGalleryOpen,
              closed: onGalleryClose
            }"
            :alt="post.description"
            :src="post.urls.small" />
        </div>
        <div class="card__footer media">
          <img
            class="media__img"
            :src="post.user.profile_image.small">
          <div class="media__body">
            <a
              class="media__link"
              :href="post.user.portfolio_url"
              target="_blank">
              {{ post.user.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!requestPending" class="text-xs-center">
      <v-pagination
        :total-visible="7"
        :length.number="normalizedTotalPages"
        v-model="currentPage">
      </v-pagination>
      <div class="pagination__subtext">{{ requestsLeft }} requests left for current hour</div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import axios from 'axios'
  import {mapState} from 'vuex'
  import _vImg from '@/mixins/_v-img'

  const client_id = '63d38d54954444a6464ea0f78afe58384eabbdb7359aaf1977d46da2ca200ff4'

  export default {
    data: () => ({
      requestPending: false,
    }),

    mixins: [
      _vImg
    ],

    computed: {
      normalizedTotalPages () {
        const normalized = this.currentPage + 4
        return (this.totalPages >= normalized)
          ? normalized
          : this.totalPages
      },
      totalPages () {
        return Math.ceil(this.totalPosts / this.perPage)
      },
      currentPagePosts () {
        return this.cachedPages.find(page => page.pageNum === this.currentPage).posts
      },
      totalPosts: {
        get () {return this.$store.state.discover.totalPosts},
        set (v) {this.$store.commit('discover/totalPosts', v)}
      },
      requestsLeft: {
        get () {return this.$store.state.discover.requestsLeft},
        set (v) {this.$store.commit('discover/requestsLeft', v)}
      },
      currentPage: {
        get () {return this.$store.state.discover.currentPage},
        set (v) {this.$store.commit('discover/currentPage', v)}
      },
      perPage: {
        get () {return this.$store.state.discover.perPage},
        set (v) {this.$store.commit('discover/perPage', v)}
      },
      cachedPages: {
        get () {return this.$store.state.discover.cachedPages},
        set (v) {this.$store.commit('discover/cachedPages', v)}
      }
    },

    created () {
      this.request(this.currentPage)
    },

    watch: {
      currentPage (newPage) {
        const noCachedPages = this.cachedPages.length === 0
        if (newPage === this.currentPage && noCachedPages) return
        this.request(newPage)
      }
    },

    methods: {
      request (pageNum) {
        /**
         * TODO:
         * 1. request for a page only once
         * 2. save to cache
         * 3. check for cache
         */
        const pageIsCached = this.cachedPages.findIndex(p => p.pageNum === pageNum) !== -1
        if (pageIsCached) {
          
          return
        }

        this.requestPending = true
  
        const options = {
          params: {
            client_id,
            page: pageNum,
            per_page: 9
          }
        }
        axios.get(`https://api.unsplash.com/photos`, options)
          .then(response => {
            this.requestPending = false

            const posts = response.data
            this.posts = posts

            this.cachedPages.push({
              pageNum,
              posts
            })
            
            this.totalPosts = parseInt(response.headers['x-total'])
            this.requestsLeft = response.headers['x-ratelimit-remaining']
          })
          .catch(err => {
            this.requestPending = false
            this.$store.commit(
              'notify',
              err.toString(),
              5000
            )
          })
      }
    }
  }
</script>

<style scoped>
  .grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .grid__item {
    flex: 1 1 25%;
    min-width: 270px;
    margin: 0 6px 12px;
  }
  /* LG and up */
  @media (min-width: 1200px) {
    .grid {
      margin-top: 12px;
    }
    .grid__item {
      margin: 0 16px 32px;
    }
  }
  .card {
    cursor: pointer;
    line-height: 0;
    border-radius: 2px;
    overflow: hidden;
  }
  .card__body {
    height: 215px;
    overflow: hidden;
  }
  .card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .card__footer {
    padding: 10px 15px;
  }
  .media__img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 15px;
    float: left;
    background-color: #d8d8d8;
  }
  .media__body {
    height: 32px;
    line-height: 32px;
  }
  .media__link {
    font-family: 'Courier New', Courier, monospace, serif;
    font-size: 15px;
    color: #999;
  }
  .media__link:hover {
    text-decoration: none;
  }

  .pagination {
    margin-bottom: 1.2rem;
  }

  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .pagination {
    position:relative;
  }
  .theme--dark .pagination__subtext {color: #ffffff1f}
  .pagination__subtext {
    font-size: 10px;
    letter-spacing: 0.32px;
    word-spacing: 0.6px;
    color: #999;
    text-transform: uppercase;
    bottom: 12px;
    text-align: center;
  }
</style>
