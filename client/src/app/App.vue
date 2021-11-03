<template>
  <v-app :dark="nightMode && $route.path !== '/auth'">
    <v-navigation-drawer app
      fixed
      v-if="authorized"
      v-model="drawer">
      <div class="center">
        <v-list>
          <template v-for="(item, i) in items">
            <v-list-tile
              v-if="item.to"
              :to="item.to"
              :disabled="!item.to"
              :ripple="!optimizedMode">
              <v-list-tile-action>
                <v-badge v-model="item.badge" :overlap="true">
                  <span slot="badge">{{ item.badge }}</span>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-badge>
              </v-list-tile-action>
              <v-list-tile-content>
  
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>

              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-toolbar app
      v-if="authorized"
      elevation-0
      :color="nightMode ? null : 'white'">
      <v-toolbar-title
        class="ml-0 pl-3"
        :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'">
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer">
        </v-toolbar-side-icon>
        <!-- <span class="hidden-xs-only"></span> -->
      </v-toolbar-title>

      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>  

        <v-menu
          offset-y
          :close-on-content-click="false"
          :nudge-width="220"
          v-model="menu"
          transition="scale-transition"
          origin="top right">

          <v-btn icon large slot="activator">
            <v-avatar size="32px">
              <v-icon v-if="false" style="font-size: 2.3rem;">account_circle</v-icon>
              <img v-else src="/static/png/ali--128x128.png" />
            </v-avatar>
          </v-btn>

          <v-card>
            <v-list>
              <v-list-tile avatar @click="$router.push({path: '/profile'})">
                <v-list-tile-avatar>
                  <v-icon v-if="false">account_circle</v-icon>
                  <img v-else src="/static/png/ali--128x128.png" />
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ user.fullname }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-switch
                    v-model="nightMode"
                    color="primary">
                  </v-switch>
                </v-list-tile-action>
                <v-list-tile-title>Night mode</v-list-tile-title>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-action>
                  <v-switch
                    v-model="showNotifications"
                    color="primary">
                  </v-switch>
                </v-list-tile-action>
                <v-list-tile-title>Show notifications</v-list-tile-title>
              </v-list-tile>
            </v-list>
            <v-divider />
            <v-list>
              <v-list-tile @click="$router.push({path: '/settings'})">
                <v-list-tile-action>
                  <v-icon>settings</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  Settings
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile to="/auth/logout">
                <v-list-tile-action>
                  <v-icon>exit_to_app</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  Sign Out
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu>

      </div>
    </v-toolbar>
    
    <v-content>
      <router-view v-if="!authorized" name="fullsize" />

      <v-container
        v-else
        fill-height fluid
        v-bind="{ [`grid-list-${size}`]: true }">
        <vue-topprogress ref="progress" :color="$vuetify.theme.primary" :minimum="70" />
        <router-view />
      </v-container>
    </v-content>

      <v-snackbar
        :timeout="notification.timeout"
        v-model="notification.visible"
        left>
        {{ notification.text }}
    </v-snackbar>
  </v-app>
</template>

<script>
  import {mapState} from 'vuex'
  import _settings from '../mixins/_settings'

  export default {
    mixins: [
      _settings
    ],

    watch: {
      authorized (v) {
        if (v === true) this.$router.push('/')
      },

      '$store.state.progressBarActive' (value) {
        if (!this.$refs.progress) return
        
        switch (v) {
          case true: this.$refs.progress.start(); break
          case false: this.$refs.progress.done(); break
        }
      }
    },

    computed: {
      ...mapState({
        notification: state => state.notification,
        authorized: state => state.auth.authorized,
        user: state => state.auth.user
      }),

      size () {
        return this.$vuetify.breakpoint.name
      }
    },

    data: () => ({
      menu: null,
      drawer: null,
      items: [
        {
          text: 'My profile',
          to: '/profile',
          badge: null,
          icon: 'account_circle'
        },
        {
          text: 'Messages',
          to: '/messages',
          badge: 5,
          icon: 'mail'
        },
        {
          text: 'Articles',
          to: '/articles',
          badge: null,
          icon: 'library_books',
        },
        {
          text: 'Discover',
          to: '/discover',
          badge: null,
          icon: 'camera'
        },
        {
          text: 'Settings',
          to: '/settings',
          badge: null,
          icon: 'settings'
        },
        {
          text: 'Test Page',
          to: null,
          badge: null,
          icon: 'warning'
        }
      ]
    })
  }
</script>
