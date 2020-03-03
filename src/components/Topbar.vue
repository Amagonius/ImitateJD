<template>
    <div id="login">
        <div id="left">
            <cube-button icon="cubeic-back"></cube-button>
        </div>
        <div id="middle">
            <input type="text" name="" id="" value="" />
        </div>
        <div id="right">
            <router-link to="/login" style="color: #ffffff">登录</router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Topbar"
    }
</script>

<style lang="stylus" scoped>
#login
    background-color #13b3f7
    #left
        width 70px
        height 50px
        position absolute
        top 0
        left 0
    .cube-btn
        background-color #13b3f7
    #right
        width 100px
        height 50px
        position absolute
        top 0
        right 0
        font-size 15px
    #middle
        margin-left 20px
        margin-right 30px
        height 50px
        input
            float left
            margin-top 10px
            height 30px
            width 250px
</style>