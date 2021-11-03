<template>
  <v-card
    class="Login AuthPage-form"
    elevation-1>
    <v-card-title class="light-blue darken-2 white--text">
      <span class="headline">Log In</span>
    </v-card-title>
    <v-form
      @submit.prevent="onSubmit"
      v-model="valid">
      <v-card-text>
        <v-text-field
          label="E-mail"
          v-model="email"
          :rules="emailRules"
          validate-on-blur
          required
        ></v-text-field>
        <v-text-field
          label="Password"
          v-model="password"
          type="password"
          :rules="passwordRules"
          validate-on-blur
          required
        ></v-text-field>
        <v-alert color="error" icon="warning" v-model="errorVisible" dismissible>
          {{ error }}
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          type="submit"
          color="light-blue darken-2 white--text"
          :loading="requestPending"
          :disabled="requestPending">
          Log In
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
  import AuthService from '@/services/AuthService'
  import _alerts from '@/mixins/_alerts'

  export default {
    mixins: [
      _alerts
    ],

    data: () => ({
      valid: false,
      requestPending: false,
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) || 'Please enter a valid email address'
      ],
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 6 || 'Password must be not less than 6 characters'
      ],
    }),
    methods: {
      onSubmit () {
        this.requestPending = true
        AuthService
          .login({
            email: this.email,
            password: this.password
          })
          .then(res => {
            const {user, token} = res.data
            const name = user.fullname.split(' ')[0]
            this.requestPending = false
            this.$store.commit(
              'notify',
              `Welcome ${name}!`,
              3000,
            )
            this.$store.commit('auth/login', {user, token})
          })
          .catch(err => {
            this.requestPending = false
            try {
              this.error = err.response.data.error
            } catch (e) {
              this.error = err.toString()
            }
          })
      }
    }
  }
</script>
