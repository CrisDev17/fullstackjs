<template>
    <div class="footer">
        <div>
            <h1>Sản phẩm</h1>
            <ul>
                <li><a href="#">Giày nam</a></li>
                <li><a href="#">Giày nữ</a></li>
                <li><a href="#">Thời trang & Phụ kiện</a></li>
                <li><a href="#">Sale off</a></li>
            </ul>
            <h1>CrisDev Social</h1>
            <a href="#"><font-awesome-icon class="social" icon="fa-brands fa-square-facebook" /></a>
            <a href="#"><font-awesome-icon class="social" icon="fa-brands fa-square-instagram" /></a>
            <a href="#"><font-awesome-icon class="social" icon="fa-brands fa-square-youtube" /></a>
        </div>
        <div>
            <h1>Về công ty</h1>
            <ul>
                <li><a href="#">Tuyển dụng</a></li>
                <li><a href="#">Liên hệ nhượng quyền</a></li>
                <li><a href="#">Về CrisDev</a></li>
            </ul>
        </div>
        <div>
            <h1>Hỗ trợ</h1>
            <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Bảo mật thông tin</a></li>
                <li><a href="#">Chính sách chung</a></li>
                <li><a href="#">Tra cứu đơn hàng</a></li>
            </ul>
        </div>
        <div>
            <h1>Liên hệ</h1>
            <p id="phone">0378209601</p>
        </div>
    </div>
</template>
<script>

</script>
<style>
.footer {
    display: flex;
    justify-content: space-between;
    background-color: #4C4C4C;
    padding: 50px 200px;
    
}
.footer > div h1 {
    font-size: 23px;
    color: #fff;
    text-transform: uppercase;
    margin: 20px 0;
    text-align: left;
}
.footer > div li {
    list-style: none;
    margin: 8px 0;
    text-align: left;
}
.footer > div li a {
    color: #cccccc;
    text-decoration: none;
    font-size: 15px;
    
}
.footer > div li a:hover {
    color: #F95732;
}
#phone {
     color: #cccccc;
}

.social{
    width: 35px;
    height: 35px;
    color: #cccccc;
    margin-right: 20px;
}
</style>
