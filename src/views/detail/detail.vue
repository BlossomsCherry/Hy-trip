<template>
    <div class="detail">
        <nav-bar title="房屋详情" :isShowRight="false" LeftText="旅途" @textClick="textClick"></nav-bar>
        <div class="main" v-if="mainPart">
            <!-- 轮播图 -->
            <detail-swipe :swipeData="topModule.housePicture.housePics"></detail-swipe>

            <!-- 详情模块 -->
            <detail-info :topModule="topModule"></detail-info>

            <!-- 房屋设施 -->
            <detail-facility :houseFacility="dynamicModule.facilityModule.houseFacility"></detail-facility>

            <!-- 房东介绍 -->
            <detail-landlord :landlord-module="dynamicModule.landlordModule"></detail-landlord>

            <!-- 房客点评 -->
            <detail-comment :comment-module="dynamicModule.commentModule"></detail-comment>

            <!-- 预定须知 -->
            <detail-notice :rules-module="dynamicModule.rulesModule"></detail-notice>

            <!-- 位置周边 -->
            <detail-map></detail-map>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import navBar from '@/components/nav-bar/nav-bar.vue'
import detailSwipe from './components/detail-swipe.vue'
import detailInfo from './components/detail-info.vue'
import detailFacility from './components/detail-facility.vue'
import detailLandlord from './components/detail-landlord.vue'
import detailComment from './components/detail-comment.vue'
import detailNotice from './components/detail-notice.vue'
import detailMap from './components/detail-map.vue'
import { useRouter, useRoute } from 'vue-router'
import { getDetailInfos } from '@/services'

const router = useRouter()
const route = useRoute()
const houseId = route.params.id

//发送网络请求获取数据
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value?.mainPart)
const topModule = computed(() => mainPart.value?.topModule)
const dynamicModule = computed(() => mainPart.value?.dynamicModule)

getDetailInfos(houseId).then(res => {
    // console.log(res)
    detailInfos.value = res.data
    console.log(dynamicModule.value.facilityModule.houseFacility)
})

function textClick() {
    router.push('/home')
}

</script>

<style lang='less' scoped></style>
