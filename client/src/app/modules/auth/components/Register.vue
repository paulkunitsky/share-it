<template>
  <v-card
    class="Register AuthPage-form"
    elevation-1>
    <v-card-title class="light-blue darken-2 white--text">
      <span class="headline">Register</span>
    </v-card-title>
    <v-form
      @submit.prevent="onSubmit"
      v-model="valid">
      <v-card-text>
        <v-text-field
          label="Full name"
          v-model="fullname"
          :rules="fullnameRules"
          validate-on-blur
          required
        ></v-text-field>
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
        <v-text-field
          label="Confirm Password"
          v-model="confirmPassword"
          type="password"
          :rules="confirmPasswordRules"
          validate-on-blur
          required
        ></v-text-field>
        <v-alert color="success" icon="check_circle" v-model="successVisible" dismissible>
          {{ success }}
        </v-alert>
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
          Register
        </v-btn>  
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
  import AuthService from '@/services/AuthService'
  import notify from '@/utils/notify'
  import _alerts from '@/mixins/_alerts'

  export default {
    mixins: [
      _alerts
    ],

    data: () => ({
      valid: false,
      requestPending: false,
      fullname: '',
      fullnameRules: [
        (v) => !!v || 'Please, enter your full name'
      ],
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
      confirmPassword: '',
      confirmPasswordRules: [
        (v) => !!v || 'Make sure you remember your password',
        (v) => {
          const password = document.querySelector('.Register input[type="password"]').value
          return v === password || 'Passwords should match'
        }
      ]
    }),

    methods: {
      onSubmit () {
        if (!this.fullname || !this.email || !this.password || !this.confirmPassword) {
          this.error = 'Please fill out all the fields'
          return
        }

        this.requestPending = true
        AuthService
          .register({
            fullname: this.fullname,
            email: this.email,
            password: this.password
          })
          .then(res => {
            this.requestPending = false
            const name = res.data.fullname.split(' ')[0]
            this.fullname = this.email = this.password = this.confirmPassword = null
            this.success = 'Account is registered'
          })
          .catch(err => {
            this.requestPending = false
            console.log(err.response.data.error)
            console.log(err.toString())
            const msg = err.response.data.error || err.toString()
            this.error = msg
          })
      }
    }
  }
</script>
