<template>
  <v-layout row wrap>
    <v-flex xs12 md6>
      <v-card>
        <v-layout class="py-3">
          <v-flex xs6>
            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-switch
                    v-model="nightMode"
                    color="primary"
                  ></v-switch>
                </v-list-tile-action>
                <v-list-tile-content>
                  Night Mode
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-flex xs6 class="pr-3">
            <b>Night Mode</b> is designed to help users to keep healthy life rhythm. This is manual night mode setting. You can also configure auto night mode setting
          </v-flex>
        </v-layout>

        <v-divider />

        <v-layout class="py-3">
          <v-flex xs6>
            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-switch
                    v-model="showNotifications"
                    color="primary"
                  ></v-switch>
                </v-list-tile-action>
                <v-list-tile-content>
                  Show Notifications
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-flex class="pr-3" xs6>
            Things like you got a new message, setting changes. We notify you about all these things if you turn <b>Show Notifications</b> on
          </v-flex>
        </v-layout>

        <v-divider />

        <v-layout class="py-3">
          <v-flex xs6>
            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-switch
                    v-model="optimizedMode"
                    color="primary"
                  ></v-switch>
                </v-list-tile-action>
                <v-list-tile-content>
                  Optimized Mode
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
          <v-flex class="pr-3" xs6>
            <b>Optimized Mode</b> setting is recommended for low-spec devices. This might help you to fix perfomance issues (disables: ripple effect on click, cinema mode for image overlays)
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
    
    <v-flex xs12 md6>
      <v-card>
        <v-layout class="py-3">
          <v-flex xs6>
            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-switch
                    v-model="autoNightMode"
                    color="primary"
                  ></v-switch>
                </v-list-tile-action>
                <v-list-tile-content>
                  Auto Night Mode
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            </v-flex>
            <v-flex xs6 class="pr-3">
              <b>Auto Night Mode</b> will set night mode according to your sleeping hours and timezone. You can always set your sleeping hours manually
            </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import _settings from '@/mixins/_settings'

  export default {
    mixins: [_settings]
  }
</script>
<!--
sections
1. general
2. colors
3. auto night mode
4. cache
-->
