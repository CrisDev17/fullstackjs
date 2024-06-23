<template>
	<div id="favourite">
		<h1>Danh mục yêu thích của bạn</h1>
		<button @click.prevent="getProduct">Hien thi san pham</button>
		
			 <div v-for="(product,index) in products" :key="index">{{product.name}}</div>

		<input type="text" placeholder="ten san pham" v-model="product.name">
		<input type="number" placeholder="gia" v-model="product.price">
        <input type="text" placeholder="them mo ta" v-model="product.description">

         
		<button @click.prevent="addProduct">Them san pham</button>
	</div>
</template>
<script>
const axios = require('axios').default;
export default {
	data(){
		return{
			products : [],
			product : {
				name: '',
				price: '',
				description: ''
			}
		}
	},
	methods: {
		getProduct(){
			
            console.log(this.getCookie('token'))
		
		},
		addProduct(){
           axios.post('http://localhost:8000/api/add',this.product)
           .then( response => {
           	console.log(response)
           })
		},
		getCookie(cname){
		  let name = cname + "=";
		  let decodedCookie = decodeURIComponent(document.cookie);
		  let ca = decodedCookie.split(';');
		  for(let i = 0; i <ca.length; i++) {
		    let c = ca[i];
		    while (c.charAt(0) == ' ') {
		      c = c.substring(1);
		    }
		    if (c.indexOf(name) == 0) {
		      return c.substring(name.length, c.length);
		    }
		  }
		  return "";
		}

	},
	beforeRouteEnter(to,from,next){
	  if(to.meta.requiredLogin === false){
        next({name: 'login'})
	  }
  } 
}
</script>
<style>

</style>