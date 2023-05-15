<template>
    <div class="home">
        <!-- 标题 -->
        <home-nav-bar></home-nav-bar>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="" />
        </div>
        <home-search-box :hotSuggests="hotSuggests"></home-search-box>
        <home-categories></home-categories>

        <div class="top" v-if="isShow">
            <div class="search">
                <div class="select-time">
                    <div class="item start">
                        <div class="name"></div>
                    </div>
                    <div class="item end"></div>
                </div>
                <div class="content">我是搜索框</div>
                <div class="right">
                    <img src="" alt="">
                </div>
            </div>
        </div>
        <home-content></home-content>
    </div>
</template>

<script setup>
import { onUnmounted, onMounted, watch, ref } from 'vue'
import homeNavBar from "./components/home-nav-bar.vue"
import homeSearchBox from "./components/home-search-box.vue"
import { storeToRefs } from "pinia"
import useHomeStore from "@/store/moudles/home"
import HYRequest from "@/services/request/index"
import homeCategories from './components/home-categories.vue'
import homeContent from './components/home-content.vue'
import useScroll from '@/hooks/useScroll'


//发送网络请求
//1. 热门建议
// const hotSuggests = ref([])
// HYRequest.get({
//     url: "/home/hotSuggests",
// }).then((res) => {
//     console.log(res.data)
//     hotSuggests.value = res.data
// })

const homeStore = useHomeStore()
//发送网络请求
homeStore.fetchHotSuggestData()
homeStore.fetchHomeCategories()
homeStore.fetchHouseList()
//对象解构
const { hotSuggests } = storeToRefs(homeStore)

// //监听window的滚动
// function scrollListener() {
//     //页面高度
//     const clientHeight = document.documentElement.clientHeight
//     //window滚动距离
//     const scrollTop = document.documentElement.scrollTop
//     const scrollHeight = document.documentElement.scrollHeight
//     // console.log(clientHeight, scrollTop, scrollHeight)

//     if (clientHeight + scrollTop >= scrollHeight) {
//         homeStore.fetchHouseList()
//     }
// }

// //挂载后添加监听
// onMounted(() => {
//     window.addEventListener('scroll', scrollListener)
// })
// //当离开页面时，移除监听
// onUnmounted(() => {
//     window.addEventListener('scroll', scrollListener)
// })

// useScroll(() => {
//     homeStore.fetchHouseList()
// })

const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
    if (newValue) {
        homeStore.fetchHouseList().then(() => {
            //数据请求完后修改 isReachBottom
            isReachBottom.value = false
        })
    }
})

//搜索框显示
const isShow = ref(false)
watch(scrollTop, (newValue) => {
    isShow.value = newValue > 500
})
</script>

<style lang="less" scoped>
.home {

    .banner {
        img {
            width: 100%;
        }
    }

    .top {
        position: fixed;
        padding: 16px 16px 10px 16px;
        width: 100%;
        top: 0;
        color: black;
        background-color: #fff;
        z-index: 99;

        .search {
            color: #999;
            background-color: #f2f4f6;
        }
    }
}
</style>
