<template>
  <v-layout row wrap>
    <v-flex sm6 md4>
      <v-card class="article">
        <div class="article__header">
          <img class="article__image" src="https://content-static.upwork.com/blog/uploads/sites/3/2017/08/13213146/How-to-choose-the-best-Nodejs-framework-Expressjs-Koajs-or-Sailsjs-thumb.jpg">
        </div>
        <div class="article__body">
          <h4 class="article__category">for clients</h4>
          <h5 class="article__title">How to Choose the Best Node.js Framework: Express.js vs Koa.js vs Sails.js</h5>
          <p class="article__text">We are going to explore three Node.js backend frameworks: Express.js, Koa.js, and Sails.js. These are MVC server
            frameworks and written in JavaScript. Therefore, they share the same advantage - they are compatible across various
            browsers, devices, and OSs. To learn about their differences, lets delve into definitions a bit...
            <br>
            <a class="article__link" :class="nightMode ? 'grey--text':'primary--text'" href="#">read more</a>
          </p>
          <div class="article__date">August 18, 2017</div>
        </div>
      </v-card>
      <v-card class="article">
        <div class="article__header">
          <img class="article__image" src="https://content-static.upwork.com/blog/uploads/sites/3/2017/02/27124935/NodeJS-290x175.jpg">
        </div>
        <div class="article__body">
          <h4 class="article__category">web development</h4>
          <h5 class="article__title">Node.js: Bringing the Speed of JavaScript to Back-End Development</h5>
          <p class="article__text">The Node.js platform made JavaScript a player in back-end technology—migrating over to the server-side and bringing
            all its benefits with it. Learn more about how Node.js works, some of its most popular frameworks, and how it's...
            <br>
            <router-link class="article__link" :class="nightMode ? 'grey--text':'primary--text'" :to="'/article/' + 1">read more</router-link>
          </p>
          <div class="article__date">August 31, 2016</div>
        </div>
      </v-card>
    </v-flex>

    <v-flex sm6 md4>
      <v-card class="article">
        <div class="article__header">
          <img class="article__image" src="https://content-static.upwork.com/blog/uploads/sites/3/2017/08/02104852/NodeJS-vs-Ruby-on-Rails-Which-is-the-best-for-web-development-feature-thumb.jpg">
        </div>
        <div class="article__body">
          <h4 class="article__category">for clients</h4>
          <h5 class="article__title">NodeJS vs Ruby on Rails: Which is the Best for Web Development?</h5>
          <p class="article__text">It's hard for a startups to choose the right language for development. One of the biggest fights in the development
            world is between Node.JS and Ruby on Rails. So, who is the winner in this battle? If you asked this question
            5 years ago, the answer would have been Ruby, but time is changing and we have a new leader...
            <br>
            <router-link class="article__link" :class="nightMode ? 'grey--text':'primary--text'" :to="'/article/' + 1">read more</router-link>
          </p>
          <div class="article__date">August 9, 2017</div>
        </div>
      </v-card>
      <v-card class="article">
        <div class="article__header">
          <img class="article__image" src="https://content-static.upwork.com/blog/uploads/sites/3/2016/04/11072510/DEV_MeteorJS-framework-app-development.png">
        </div>
        <div class="article__body">
          <h4 class="article__category">web development</h4>
          <h5 class="article__title">Is MeteorJS the Right Node.js Framework for Your App?</h5>
          <p class="article__text">MeteorJS is one of the most talked-about Node.js frameworks on the scene. So where does it fall in the Node.js
            framework landscape, and is it the right choice for your MEAN-powered application?
            <br>
            <router-link class="article__link" :class="nightMode ? 'grey--text':'primary--text'" :to="'/article/' + 1">read more</router-link>
          </p>
          <div class="article__date">April 11, 2016</div>
        </div>
      </v-card>
    </v-flex>

    <v-flex sm12 md4>
      <v-layout row wrap>
        <v-flex sm6 md12>
          <v-card class="article">
            <div class="article__header">
              <img class="article__image" src="https://content-static.upwork.com/blog/uploads/sites/3/2017/02/02162005/Technology-PHP-vs-NodeJS-t.jpg">
            </div>
            <div class="article__body">
              <h4 class="article__category">Web Development</h4>
              <h5 class="article__title">PHP vs. Node.js</h5>
              <p class="article__text">PHP vs Node.js—what’s the difference? Both power the backend of dynamic websites, but with distinct differences...
                <br>
                <a class="article__link" :class="nightMode ? 'grey--text':'primary--text'" href="#">read more</a>
              </p>
              <div class="article__date">February 6, 2017</div>
            </div>
          </v-card>
        </v-flex>
        <v-flex sm6 md12>
          <v-card class="article">
            <div class="article__header">
              <img class="article__image" src="https://content-static.upwork.com/blog/uploads/sites/3/2016/04/07120308/DEV_top-nodeJS-frameworks_T.png">
            </div>
            <div class="article__body">
              <h4 class="article__category">Web Development</h4>
              <h5 class="article__title">15 Frameworks to Know for Next-Level Node.js Development</h5>
              <p class="article__text">Node.js is a groundbreaking addition to the web development landscape, enabling developers to write full-stack
                JavaScript applications for the first time ever. It's now an entire development ecosystem, fueling the creation
                of numerous frameworks that both extend and add to Node.js's existing features. Here are 15 frameworks to
                know...
                <br>
                <router-link class="article__link" :class="nightMode ? 'grey--text':'primary--text'" :to="'/article/' + 1">read more</router-link>
              </p>
              <div class="article__date">April 7, 2016</div>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        nightMode: state => state.settings.nightMode
      })
    }
  }
</script>

<style>
  .article {
    background: #fff;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .article__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .article__category {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 300;
    word-spacing: 1px;
    letter-spacing: 0.5px;
    margin-bottom: 18px;
  }
  .theme--light .article__title { color: #333 }
  .theme--light .article__body { color: #666 }

  .theme--dark .article__body { color: #eeeeee }
  .article__title {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin-bottom: 18px;
  }
  .article__body {
    padding: 32px 25px;
  }
  .article__text {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 35px;
  }
  .article__date {
    font-size: 14px;
    font-style: italic;
  }
  .article__link {
    text-decoration: none !important;
    text-transform: capitalize;
  }
</style>
