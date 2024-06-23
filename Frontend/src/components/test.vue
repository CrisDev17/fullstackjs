<template>
  <div>
  <form @submit.prevent="submit" method="POST">
  <div class="form-group">
    <label class="form__label">Tên đăng nhập</label>
    <input class="form__input" v-model.trim="$v.username.$model" type="text"/>
  </div>
  <div class="error" v-if="!$v.username.required">Tên đăng nhập không được để trống</div>
  <div class="error" v-if="!$v.username.minLength">Tên đăng nhập phải có ít nhất {{$v.username.$params.minLength.min}} chữ cái.</div>
  <div class="form-group">
  <label class="form__label">Email</label>
  <input type="email" placeholder="Email" v-model.trim="email">
  <div class="error" v-if="!$v.email.required">Email không được để trống</div>
  <div class="error" v-if="!$v.email.email">Email phải hợp lệ</div>
  </div>

  <div class="form-group">
    <label class="form__label">Mật khẩu</label>
    <input class="form__input" v-model.trim="$v.password.$model" type="password"/>
  </div>
  <div class="error" v-if="!$v.password.required">Mật khẩu không được để trống</div>
  <div class="error" v-if="!$v.password.minLength">Mật khẩu phải có ít nhất {{ $v.password.$params.minLength.min }} kí tự.</div>
  <div class="form-group">
    <label class="form__label">Nhập lại mật khẩu</label>
    <input class="form__input" v-model.trim="$v.repeatPassword.$model" type="password"/>
  </div>
  <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Mật khẩu phải giống nhau</div>
 

  <button class="button" type="submit" :disabled="submitStatus === 'PENDING'">Đăng kí</button>
  <p class="typo__p" v-if="submitStatus === 'OK'">Đăng kí thành công</p>
  <p class="typo__p" v-if="submitStatus === 'ERROR'">Vui lòng điền chính xác.</p>
  <p class="typo__p" v-if="submitStatus === 'PENDING'">Đang gửi...</p>
  </form>
  </div>
</template>

<script>
import { required, minLength, maxLength, sameAs, email } from 'vuelidate/lib/validators'
const axios = require('axios').default;

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      submitStatus: null
    }
  },
  validations: {
    username: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(20)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    submit() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      axios.post('http://localhost:3000/sign-up',{username : this.username,email: this.email,password: this.password})
 			.then( response => {
 				console.log(response)
 			})
 			.catch( error => {
 				console.log(error)
 			})
			
      }
    }
  }
}
</script>

<style>



</style>