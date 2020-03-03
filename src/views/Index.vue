<template>
    <div id="Index">
        <Topbar></Topbar>
        <!-- 轮播图 -->
        <cube-slide ref="slideBanners" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                    <img :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
        <!-- 滚动标签 -->
        <cube-slide ref="slideTags" :data="tags" :auto-play="false">
            <cube-slide-item v-for="(tag, index) in tags" :key="index">
                <ul class="ulTags">
                    <li class="liTags" v-for="(item,index2) in tag" :key="index2">
                        <a :href="item.url">
                            <img :src="item.image">
                            <p>{{item.label}}</p>
                        </a>
                    </li>
                </ul>
            </cube-slide-item>
        </cube-slide>
    </div>
</template>

<script>
    import Topbar from "../components/Topbar";
    export default {
        name: "Index",
        components:{
            Topbar
        },
        data() {
            return {
                items: [],//轮播图
                tags: []//滚动分类
            }
        },
        methods: {
            changePage(current) {
                console.log('当前轮播图序号为:' + current)
            },
            clickHandler(item, index) {
                console.log(item, index)
            }
        },
        async created(){
            try{
                //获取轮播图数据
                const items=await this.$http.get('/api/banners')
                this.items=items.data
                //获取滚动分类数据
                const tags=await this.$http.get('/api/tags')
                this.tags=tags.data
            }catch(err){
                console.log(err)
            }
        }
    }
</script>

<style lang="stylus" scoped>
#Index
    a
        img
            display:block
            width:100%
            height:145px
    .ulTags
        display flex
        flex-wrap   wrap
    .liTags
        width 20%
        justify-content center
        img
            width 35px
            height  35px
            padding 10px 20px
        p
            font-size  10px
            padding-bottom  10px

</style>