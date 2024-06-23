<template>
  <div id="cart">
     <h1>day la trang cart</h1>
  </div>
</template>

<script>
export default {
methods: {
  beforeRouteEnter(to,from,next){
	  if(to.meta.requiredLogin === false){
        next({name: 'login'})
	  }
  } 
}
}
</script>

<style>

</style>