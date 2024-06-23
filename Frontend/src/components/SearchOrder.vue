<template>
    <div id="searchOrder">
        <h1>Tra cứu đơn hàng</h1>
        <form action="">
            <input id="codeOrder" type="text" placeholder="Mã đơn hàng">
            <input id="email" type="email" placeholder="Email">
            <button>Tra cứu đơn hàng</button>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
#searchOrder {
    height: 400px;
    padding: 50px 0;
}
h1 {
    font-size: 25px;
    text-transform: uppercase;
}
#searchOrder form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
} 
#searchOrder form input {
    margin: 40px 0;
    width: 600px;
    height: 30px;
    padding: 5px 10px;
} 
#searchOrder button {
    cursor: pointer;
    background-color: #F15E2C;
    color: #fff;
    text-transform: uppercase;
    font-size: 20px;
    border: none;
    padding: 20px;
}
</style>