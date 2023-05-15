<template>
    <div class="order">
        <nav-bar title="订单列表" @text-click="textClick"></nav-bar>
        <van-tabs title-active-color="#ff9854">
            <van-tab title="全部订单">内容 1</van-tab>
            <van-tab title="近期订单">内容 2</van-tab>
            <van-tab title="待支付">内容 2</van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import navBar from '@/components/nav-bar/nav-bar.vue';

const router = useRouter()
function textClick() {
    router.push('/favor')
}
</script>

<style lang="less" scoped>
.order {
    :deep(.van-tab--active) {
        font-weight: 400;
    }
}
</style>
