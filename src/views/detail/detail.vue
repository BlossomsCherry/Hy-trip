<template>
    <div class="detail">
        <nav-bar title="房屋详情" :isShowRight="false" LeftText="旅途" @textClick="textClick"></nav-bar>
        <div class="main" v-if="mainPart">
            <!-- 轮播图 -->
            <detail-swipe :swipeData="topModule.housePicture.housePics"></detail-swipe>

            <!-- 详情模块 -->
            <detail-info :topModule="topModule"></detail-info>

            <detail-section title="房屋设施" moreText="查看全部设施"></detail-section>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import navBar from '@/components/nav-bar/nav-bar.vue'
import detailSwipe from './components/detail-swipe.vue'
import detailInfo from './components/detail-info.vue'
import detailSection from './components/detail-section.vue'
import { useRouter, useRoute } from 'vue-router'
import { getDetailInfos } from '@/services'

const router = useRouter()
const route = useRoute()
const houseId = route.params.id

//发送网络请求获取数据
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value?.mainPart)
const topModule = computed(() => mainPart.value?.topModule)
getDetailInfos(houseId).then(res => {
    // console.log(res)
    detailInfos.value = res.data
})

function textClick() {
    router.push('/home')
}

</script>

<style lang='less' scoped></style>
