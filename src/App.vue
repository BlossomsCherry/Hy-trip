<template>
    <div class="app">
        <router-view></router-view>
        <!-- !route.meta.hideTabBar:  根据条件隐藏tab-bar -->
        <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
        <loading></loading>
    </div>
</template>

<script setup>
import tabBar from '@/components/tab-bar/tab-bar.vue'
import { useRoute } from 'vue-router'
import loading from './components/loading/loading.vue';

const route = useRoute() //useRoute()总是拿到当前活跃路由对象
</script>

<style scoped></style>
