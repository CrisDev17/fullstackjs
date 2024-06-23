<template>
	<div id="signUp">
		<div id="form">
			<h1>Đăng kí</h1>
		<form @submit.prevent="signUp()" method="POST">
			<label>Email</label>
			<input type="email" name="email" placeholder="Nhập email" v-model="user.email">
			<label>Username</label>
			<input type="text" name="username" placeholder="Nhập username" v-model="user.username">
			<label>Password</label>
			<input type="password" name="password" placeholder="Nhập mật khẩu" v-model="user.password">
			<button type="submit">Đăng kí</button>
		</form>
	    </div>
	</div>
</template>
<script>
 const axios = require('axios').default;
 import { required, minLength } from 'vuelidate/lib/validators'

 export default{
 	data(){
 		return {
 			user: {
               email : '',
               username: '',
               password : ''
 			}
 		}
 	},
 	methods: {
 		signUp : function(){
			axios.post('http://localhost:3000/sign-up',this.user)
 			.then( response => {
 				console.log(response)
 			})
 			.catch( error => {
 				console.log(error)
 			})
			
 			
 		}
 	}
 }
</script>
<style>
#signUp {
	background-color : #C43DF2;
	height : 500px;
	display : flex;
	justify-content : center;
	align-items: center;
}
#form {
	background-color : #fff;
	width : 400px;
	height : 400px;
	border-radius: 20px;
	padding: 20px 0;
}
#form form label {
	display: block;
	text-align: left;
	width: 300px;
	margin: 10px auto;
	font-size: 15px;
	margin-bottom: 5px;
	margin-top: 20px;
}
#form form input {
	width: 300px;
	border: none;
	border-bottom: 1px solid black;

}
#form form input:focus {
	outline: none;
}
#form form button {
	display: block;
	margin: 0 auto;
	margin-top: 50px;
	width: 100px;
	height: 30px;
	border: none;
	background-color: #C43DF2;
	border-radius: 5px;
	color: #fff;
	font-size: 15px;
	cursor: pointer;

}


</style>