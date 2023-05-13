<template>
    <div class="home">
        <!-- 标题 -->
        <home-nav-bar></home-nav-bar>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="" />
        </div>
        <home-search-box :hotSuggests="hotSuggests"></home-search-box>
    </div>
</template>

<script setup>
import homeNavBar from "./components/home-nav-bar.vue"
import homeSearchBox from "./components/home-search-box.vue"
import HYRequest from "@/services/request/index"
import { ref } from 'vue'
import useHomeStore from "@/store/moudles/home"
import { storeToRefs } from "pinia"

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
homeStore.fetchHotSuggestData().then(res => {
    console.log(res)
})
const { hotSuggests } = storeToRefs(homeStore)


</script>

<style scoped>
.banner img {
    width: 100%;
}
</style>
