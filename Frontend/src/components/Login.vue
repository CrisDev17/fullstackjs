<template>
    <div id="loginPage">
    <div id="login">
        <h1>Login</h1>
        <form @submit.prevent="login()">
            <label>Tên đăng nhập</label>
            <div id="username">
            <font-awesome-icon icon="fa-solid fa-user"  class="iconInput"/>
            <input type="text" placeholder="Nhập tên đăng nhập" v-model="user.username">
            </div>
            <label>Mật khẩu</label>
            <div id="password">
            <font-awesome-icon icon="fa-solid fa-lock" class="iconInput" />
            <input type="password" placeholder="Nhập mật khẩu" v-model="user.password">
            </div>
            <button type="submit">Đăng nhập</button>
        </form>
        <div id="social">
            <p>Or sign up using</p>
            <ul>
                <li><a href="#"><font-awesome-icon id="iconFb" icon="fa-brands fa-facebook" /></a></li>
                <li><a href="#"><font-awesome-icon id="iconGg" icon="fa-brands fa-google" /></a></li>
            </ul>
            <router-link :to="{name:'signUp'}">Sign up ?</router-link>
        </div>
    </div>
</div>
</template>
<script>
const axios = require('axios').default;
import router from '@/router';
export default {
     data(){
        return {
          user : {
            username : '',
            password : ''
          }
        }
     },
     methods: {
        setCookie : function(cname, cvalue, exdays) {
           const d = new Date();
           d.setTime(d.getTime() + (exdays*24*60*60*1000));
           let expires = "expires="+ d.toUTCString();
           document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        },
       login : function(){
           axios.post('http://localhost:3000/login',this.user)
           .then( response => {
            this.setCookie('token', response.data.token, 1);
            this.$router.push('/');
            alert("Chúc mừng bạn đã đăng nhập thành công!")
           })
           .catch( error => {
            console.log(error)
           })
       }
     }
    
}
</script>
<style>
#loginPage {
    background-color: #C43DF2;
    display : flex;
    justify-content : center;
    align-items : center;
    padding : 50px 0;
}
#login {
    width: 30%;
    height: auto;
    background-color: #fff;
    border-radius : 10px;
 }
#login h1 {
    font-size : 30px;
    text-transform: uppercase;
    padding : 30px;
}
#login form {
    margin: 20px 0;
}
#login form label {
    width: 250px;
    display: block;
    margin: 0 auto;
    text-align: left
}
#login form #username {
    border-bottom : 2px solid #E8E8E8;
    width : 250px;
    margin : 5px auto;
    padding : 10px 5px;
    display : flex;
    margin-bottom : 20px;
}
.iconInput {
    color :#E8E8E8;
}
#login form #username input {
    border : none;
    margin-left: 10px;
}
#login form #username input:focus {
    outline : none;
}
#login form #password {
    border-bottom : 2px solid #E8E8E8;
    width : 250px;
    margin : 5px auto;
    padding : 10px 5px;
    display : flex;
}
#login form #password input {
    border : none;
    margin-left: 10px;
}
#login form #password input:focus {
    outline : none;
}
#login form button {
    width : 200px;
    height : 40px;
    border-radius : 10px;
    text-align : center;
    line-height: 40px;
    background-color: #C43DF2; 
    color : #fff;
    font-size : 20px;
    text-transform : uppercase;
    border : none;
    cursor : pointer;
    margin-top: 20px;
}

#social p{
    font-size : 15px;
}
#social ul li {
    list-style : none;
    display : inline-block;
    padding : 10px 5px;
}
#iconFb {
    width : 30px;
    height : 30px;
    color : #0F91F3;
}
#iconGg {
    width : 30px;
    height : 30px;
    color : #E64A43;
}

</style>