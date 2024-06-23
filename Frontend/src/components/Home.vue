<template>
  <div id="home">
       <div id="background_img">
        <div>
        <div id="slide_bg" ref="slide_bg">
        <div id="bg1" ref="bg1"><a href="#"><img src="../assets/background.jpg"></a></div>
        <div id="bg2"><a href="#"><img src="../assets/background2.jpg"></a></div>
        </div>
        <div id="bar">
          <div @click="prev" ref="prev" :class="{ active : isActive1}"></div>
          <div @click="next" :class="{ active : isActive2}"></div>
        </div>
        </div> 
       </div>
       <div id="col-1">
            <div>
             <div>
               <div>
                <img src="../assets/banner 3.jpg">
                <img src="../assets/banner11.jpg">
              </div>
              <div>
                <div>
                  <h1>Bình mới rượu "mới"</h1>
                </div>
                <div></div>
              </div>
             </div>
            </div>
            <div></div>
       </div>
  </div>
</template>

<script>
export default {
 data(){
  return {
    count : 1,
    isActive1 : true,
    isActive2 : false
  }
 },
 methods : {
  prev(){
         if( this.count === 0){
           this.count = 1;
           this.$refs.slide_bg.style.transform = 'translate(' + 0 + 'px)';
           this.$refs.slide_bg.style.transition = 'transform ease-in-out 0.5s';
           this.isActive1 = true;
           this.isActive2 = false;
         }
         },
    
      next(){
        if( this.count === 1){
          this.count = 0;
          this.$refs.slide_bg.style.transform = 'translate(' + -1519 + 'px)';
          this.$refs.slide_bg.style.transition = 'transform ease-in-out 0.5s';
          this.isActive2 = true;
          this.isActive1 = false;
        }
      },
 },
}
</script>

<style>
#background_img {
  width: 100%;
  height: 800px;
}
#background_img > div {
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
}
#slide_bg {
  width: 100%;
  display: flex;
  height: 100%;
}
#slide_bg #bg2 {
  min-width: 100%;
  height: 100%;
}
#slide_bg #bg2 a {
  display: block;
  width: 100%;
  height: 100%;
}
#slide_bg #bg2 a img {
  width: 100%;
  height: 100%;
}
#slide_bg #bg1 {
  min-width: 100%;
  height: 100%;
}
#slide_bg #bg1 a {
  display: block;
  width: 100%;
  height: 100%;
}
#slide_bg #bg1 a img {
  width: 100%;
  height: 100%;
}
#bar {
  position: absolute;
  width: 120px;
  height: 10px;
  top: 97%;
  left: 46%;
  display: flex;
  justify-content: space-between;
}
#bar > div {
  width: 50px;
  height: 10px;
  background-color: #D3D3D3;
}
.active {
  background-color: #F15E2C !important;
}

</style>