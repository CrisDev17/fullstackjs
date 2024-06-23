<template>
    <div class="top">
    <div class="navbar">
      <ul>
        <li>
          <router-link :to="{name: 'searchOrder'}">
            <font-awesome-icon class="iconNavbar" icon="fa-solid fa-box-open" />
            <span class="textNavbar">Tra cứu đơn hàng</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'store'}">
            <font-awesome-icon class="iconNavbar" icon="fa-solid fa-location-dot" />
            <span class="textNavbar">Tìm cửa hàng</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'wishList'}">
            <font-awesome-icon class="iconNavbar" icon="fa-solid fa-heart" />
            <span class="textNavbar">Yêu thích</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'login'}">
            <font-awesome-icon class="iconNavbar" icon="fa-solid fa-user" />
            <span class="textNavbar">Đăng nhập</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'cart'}">
            <font-awesome-icon class="iconNavbar" icon="fa-solid fa-cart-shopping" />
            <span class="textNavbar">Giỏ hàng <span>(0)</span></span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="menu">
    <div class="logo">
        <router-link :to="{name: 'home'}"><img src="../assets/logo.png"></router-link>
    </div>
    <div class="menuText">
        <ul>
            <li @mouseover="showMenu1 = true" @mouseleave="showMenu1 = false">
                <a href="#">Sản phẩm<font-awesome-icon v-show="!showMenu1" class="iconMenu" icon="fa-solid fa-angle-down" /><font-awesome-icon class="up" v-show="showMenu1" icon="fa-solid fa-angle-up" /></a>
                <div class="showMenu1" v-show="showMenu1">
                  <div class="megaMenu">
                    <div>
                      <a href="#">
                        <img src="../assets/Menu_Nam.jpg">
                        <span>Cho Nam</span>
                      </a>
                    </div>
                      <div>
                      <a href="#">
                        <img src="../assets/Menu_Nu.jpg">
                        <span>Cho Nữ</span>
                      </a>
                    </div>
                      <div>
                      <a href="#">
                        <img src="../assets/Menu_Phu-kien.jpg">
                        <span>Outlet Sale</span>
                      </a>
                    </div>
                      <div>
                      <a href="#">
                        <img src="../assets/Menu_Sale-off.jpg">
                        <span>Thời trang & Phụ kiện</span>
                      </a>
                    </div>
                  </div>
                </div>
            </li>
            <li @mouseover="showMenu2 = true" @mouseleave="showMenu2 = false">
                <a href="#">Nam<font-awesome-icon v-show="!showMenu2" class="iconMenu" icon="fa-solid fa-angle-down" /><font-awesome-icon class="up" v-show="showMenu2" icon="fa-solid fa-angle-up" /></a>
                <div class="showMenu2" v-show="showMenu2">
                    <div>
                      <h1><a href="#">Nổi bật</a></h1>
                      <div>
                         <a href="#">Best Seller</a>
                         <a href="#">New Arrival</a>
                         <a href="#">Sale Off</a>
                         
                      </div>
                         <div>
                         <a href="#">Urbas Ruller</a>
                         <a href="#">Track 6 Class E</a>
                         <a href="#">Vintas Flannel</a>
    
                      </div>
                    </div>
                       <div>
                      <h1><a href="#">Giày</a></h1>
                      <div>
                         <h2><a href="#">Dòng sản phẩm</a></h2>
                         <a href="#">Basas</a>
                         <a href="#">Vintas</a>
                         <a href="#">Urbas</a>
                         <a href="#">Pattas</a>
                         <a href="#">Creas</a>
                         <a href="#">Track 6</a>
                         
                      </div>
                         <div>
                         <h2><a href="#">Style</a></h2>
                         <a href="#">Urbas Ruller</a>
                         <a href="#">Track 6 Class E</a>
                         <a href="#">Vintas Flannel</a>
    
                      </div>
                      <a href="#">Tất cả các sản phẩm</a>
                       </div>
                      <div>
                      <h1><a href="#">Thời trang & Phụ kiện</a></h1>
                      <div>
                         <h2><a href="#">Nửa trên</a></h2>
                         <a href="#">Basic tee</a>
                         <a href="#">Hoodie</a>
                         <a href="#">Graphic Tee</a>
                         <a href="#">SweatShirt</a>
                         
                      </div>
                         <div>
                          <h2><a href="#">Phụ kiện</a></h2>
                         <a href="#">Nón</a>
                         <a href="#">Dây giày</a>
                         <a href="#">Vớ</a>
                         <a href="#">Balo & Túi</a>
                      </div>
                      <a href="#">Xem tất cả</a>
                    </div>
                </div>
            </li>
            <li @mouseover="showMenu3 = true" @mouseleave="showMenu3 = false">
                <a href="#">Nữ<font-awesome-icon v-show="!showMenu3" class="iconMenu" icon="fa-solid fa-angle-down" /><font-awesome-icon class="up" v-show="showMenu3" icon="fa-solid fa-angle-up" /></a>
                <div class="showMenu3" v-show="showMenu3">
                    <div>
                      <h1><a href="#">Nổi bật</a></h1>
                      <div>
                         <a href="#">Best Seller</a>
                         <a href="#">New Arrival</a>
                         <a href="#">Sale Off</a>
                         
                      </div>
                         <div>
                         <a href="#">Urbas Ruller</a>
                         <a href="#">Track 6 Class E</a>
                         <a href="#">Vintas Flannel</a>
    
                      </div>
                    </div>
                       <div>
                      <h1><a href="#">Giày</a></h1>
                      <div>
                         <h2><a href="#">Dòng sản phẩm</a></h2>
                         <a href="#">Basas</a>
                         <a href="#">Vintas</a>
                         <a href="#">Urbas</a>
                         <a href="#">Pattas</a>
                         <a href="#">Creas</a>
                         <a href="#">Track 6</a>
                         
                      </div>
                         <div>
                         <h2><a href="#">Style</a></h2>
                         <a href="#">Urbas Ruller</a>
                         <a href="#">Track 6 Class E</a>
                         <a href="#">Vintas Flannel</a>
    
                      </div>
                      <a href="#">Tất cả các sản phẩm</a>
                       </div>
                      <div>
                      <h1><a href="#">Thời trang & Phụ kiện</a></h1>
                      <div>
                         <h2><a href="#">Nửa trên</a></h2>
                         <a href="#">Basic tee</a>
                         <a href="#">Hoodie</a>
                         <a href="#">Graphic Tee</a>
                         <a href="#">SweatShirt</a>
                         
                      </div>
                         <div>
                          <h2><a href="#">Phụ kiện</a></h2>
                         <a href="#">Nón</a>
                         <a href="#">Dây giày</a>
                         <a href="#">Vớ</a>
                         <a href="#">Balo & Túi</a>
                      </div>
                      <a href="#">Xem tất cả</a>
                    </div>
                </div>
            </li>
            <li>
                <a href="#">Sale off</a>
            </li>
            <li>
                <a href="#" id="discover"><img src="../assets/discoverU.png"></a>
            </li>
        </ul>
    </div>
    <div class="form">
    <form>
        <font-awesome-icon id="search" icon="fa-solid fa-magnifying-glass" />
        <input placeholder="Tìm kiếm" type="text">
    </form>
    </div>
    </div>
    <div class="slideShow">
    <div>
      <div id="slide" ref="slide">
         <div><a href="#">Freeshipping với hóa đơn từ 800k !</a></div>
         <div><a href="#">Hàng 2 tuần nhận đổi - Giày nửa năm bảo hành</a></div>
         <div><a href="#">Buy more pay less - Áp dụng khi mua phụ kiện</a></div>
         <div><a href="#">Buy 2 get 10% off - Áp dụng với tất cả basic tee</a></div>
      </div>
      <a @click.prevent="prev" href="#" id="left"><font-awesome-icon icon="fa-solid fa-angle-left" /></a>
      <a @click.prevent="next" href="#" id="right"><font-awesome-icon icon="fa-solid fa-angle-right" /></a>
      
    </div>
    </div>
    <div class="showContent">
      <router-view></router-view>
    </div>
    <div class="divStatic">
       <div id="cartIcon">
       <a href="#">
         <span>0</span>
         <font-awesome-icon id="cartFont" icon="fa-solid fa-cart-shopping" />
       </a>
       </div>
       <div id="socialIcon">
        <a href="#">
          <font-awesome-icon icon="fa-brands fa-facebook-f" />
       </a>
        <a href="#">
          <font-awesome-icon icon="fa-brands fa-instagram" />
       </a>
       <a href="#">
          <font-awesome-icon icon="fa-brands fa-youtube" />
       </a>
       </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios';
export default{
  data(){
    return {
      showMenu1 : false,
      showMenu2 : false,
      showMenu3 : false,
      count : 0
    }
  },
  mounted(){
       setInterval(this.next , 5000);
  },
      methods: {
      prev(){
         if(this.count > 0 ){
            this.count--;
         }
         else {
          this.count = 3;
         }
         this.$refs.slide.style.transform = 'translate(' + -this.count*400 + 'px)';
         this.$refs.slide.style.transition = 'transform ease-in-out 0.5s';
         },
    
      next(){
         if( this.count < 3){
          this.count++;
         }
         else{
          this.count = 0
         }
         this.$refs.slide.style.transform = 'translate(' + -this.count*400 + 'px)';
         this.$refs.slide.style.transition = 'transform ease-in-out 0.5s';
      }
    }
}

</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.navbar {
    background-color: #303030;
    padding: 0 40px;
}
.navbar ul {
    display: flex;
    justify-content: flex-end;
}
.navbar ul li{
    list-style: none;
    
    padding : 5px 10px;
}
.navbar ul li a {
    text-decoration: none;
    color: #fff;
}
.navbar ul li a:hover {
    color: #f15e2c;
}
.iconNavbar {
    margin-right: 10px;
    font-size: 12px;
}
.textNavbar {
    font-size: 12px;
}
.menu {
     display: flex;
     justify-content: space-between;
     padding: 0px 50px;
     background-color: #FFFFFF;
}
.menuText ul li {
  display: inline-block;
}
.logo {
  width: 200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0;
}
.logo a {
  display: block;
  width: 50px;
  height: 88px;
}
.logo a img {
  width: 100%;
  height: 100%;
}
.menuText {
  display: flex;
  align-items: flex-end;
}
.menuText ul {
  height: 60%;
}
.menuText ul li {
  height: 80%;
  padding: 0 5px;
}
#discover {
  border-right: none;
}
.menuText ul li > a {
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
  color: black;
  display: block;
  padding: 0 20px;
  border-right: #e3e2e2 2px solid;
}
.menuText ul li a .iconMenu {
  margin-left: 10px;
}
.menuText ul li > a img {
  width: 80px;
}
.menu .form {
  display: flex;
  align-items: center;
}
.menu form {
  border: 1px solid black;
  height: 40px;
  width: 250px;
  display: flex;
  align-items: center;

}
.menu form input{
  border: none;
}
.menu form input:focus {
  outline: none;
}
#search {
  margin: 0 10px;
}
.menuText ul li:first-child {

  cursor: pointer;
}
.menuText ul li:nth-child(2) {
  cursor: pointer;
}
.menuText ul li:nth-child(3) {
  cursor: pointer;
}
.menuText ul li:hover > a{
    color: #f15e2c;
}
.showMenu1 {
  position: absolute;
  top: 155px;
  left: 0;
  width: 100%;
  height: auto;
  background-color: #4c4c4c;
  z-index: 1000;
}
.showMenu1::before {
    content: " ";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #4c4c4c;
    transform: rotate(45deg);
    position: absolute;
    top: -5px;
    left: 32%;
}
.showMenu2::before {
    content: " ";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #4c4c4c;
    transform: rotate(45deg);
    position: absolute;
    top: -5px;
    left: 42%;
}
.showMenu3::before {
    content: " ";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #4c4c4c;
    transform: rotate(45deg);
    position: absolute;
    top: -5px;
    left: 49%;
}
.showMenu2 {
 position: absolute;
  top: 155px;
  left: 0;
  width: 100%;
  height: auto;
  background-color: #4c4c4c;
  display: flex;
  justify-content: space-between;
  padding: 20px 250px;
  z-index: 1000;
}
.showMenu2 > div a {
  display: block;
  text-decoration: none;
  font-size: 16px;
  color: #cccccc;
  margin : 5px 0;
  text-align: left;
}
.showMenu2 div:first-child {
  border-right: 2px dashed #cccccc;
  padding-right: 150px;
}
.showMenu2 > div a:hover {
  color: #f15e2c;
}
.showMenu2 > div > h1 > a {
  font-size: 25px;
  color: #fff;
  text-transform: uppercase;
}
.showMenu2 > div > div {
  margin: 20px 0;
}
.showMenu2  div > h2 > a {
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  
}
.showMenu3 {
 position: absolute;
  top: 155px;
  left: 0;
  width: 100%;
  height: auto;
  background-color: #4c4c4c;
  display: flex;
  justify-content: space-between;
  padding: 20px 250px;
  z-index: 1000;
}
.showMenu3 > div a {
  display: block;
  text-decoration: none;
  font-size: 16px;
  color: #cccccc;
  margin : 5px 0;
  text-align: left;
}
.showMenu3 div:first-child {
  border-right: 2px dashed #cccccc;
  padding-right: 150px;
}
.showMenu3 > div a:hover {
  color: #f15e2c;
}
.showMenu3 > div > h1 > a {
  font-size: 25px;
  color: #fff;
  text-transform: uppercase;
}
.showMenu3 > div > div {
  margin: 20px 0;
}
.showMenu3  div > h2 > a {
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  
}
.up {
  margin-left: 10px;
}
.megaMenu {
  display: flex;
  justify-content: space-between;
  padding: 50px 200px;
}
.megaMenu > div {
  width: 250px;
  height: 250px;
}
.megaMenu > div > a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
}
.megaMenu > div > a:hover img{
   opacity: 1;
}
.megaMenu > div > a:hover span{
   opacity: 1;
}
.megaMenu > div > a img {
  width: 250px;
  height: 250px;
  opacity: 0.5;
  transition: opacity 0.5s;
}
.megaMenu > div > a span {
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  display: block;
  width: 100%;
  margin-top: 10px;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.5s;
}
.slideShow {
  background-color: #F1F1F1;
  height: 50px;
  display: flex;
  justify-content: center;
  z-index: 1;
}
.slideShow > div {
  width: 400px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
#slide {
  width: 400px;
  display: flex;
}

#slide div {
  min-width: 400px;
}
#slide div a {
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-style: italic;
  color: black;
  font-size: 13px;
}
#right {
  position: absolute;
  right: 0px;
  top: 15px;
  text-decoration: none;
}
#left {
  position: absolute;
  left: 0px;
  top: 15px;
  text-decoration: none;
}
.divStatic {
  position: fixed;
  top: 30%;
  right: 0;
  display: flex;
  flex-direction: column;
  height: 220px;
  justify-content: space-between;

}
#cartIcon {
  background-color: #FF5F17;
  width: 40px;
  height: 75px;
}
#socialIcon {
  background-color: #666666;
  width: 40px;
  height: 108px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
#cartIcon a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 5px 0;
}
#cartIcon  a span {
  display: block;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin: 5px 0;
}
#cartFont {
  color: #fff;
  margin: 5px 0;
}
#socialIcon a {
  display: block;
  color: #999999;
  transition: 0.5s;
}
#socialIcon a:hover {
  color: #fff;
}
</style>
