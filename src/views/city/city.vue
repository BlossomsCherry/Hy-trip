<template>
    <div class="city">
        <div class="top">
            <!-- 搜索框 -->
            <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="onClickTab" />

            <!-- tab栏 -->
            <van-tabs v-model:active="tabActive">
                <template v-for="(value, key, index) in cities" :key="key">
                    <van-tab :title="value.title" :name="key"></van-tab>
                </template>
            </van-tabs>
        </div>
        <div class="content">
            <!-- 热门城市数据 -->
            <div class="van-index-anchor">热门</div>
            <hot :currenGroup="currenGroup"></hot>

            <!-- 所有城市 -->
            <all-city :currenGroup="currenGroup"></all-city>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import useCityStore from "@/store/moudles/city";
import { storeToRefs } from "pinia";
import allCity from './compontens/allCity.vue'
import hot from './compontens/hot.vue'
import { getCityAll } from "@/services";

const searchValue = ref();
const router = useRouter();
//搜索框功能
function onClickTab() {
    //返回上一个页面
    router.back();
}

//tab的切换
const tabActive = ref();

/* 这个位置发送网络请求有两个缺点：
            1.如果网络请求过多，那么页面组件中就包含了大量的对于网络请求和数据处理逻辑
            2.如果页面封装了很多的子组件，子组件需要这些数据，我么必须一步一步的传过去（props） */

//网络请求：请求城市数据
// const allCity = ref()
// getCityAll().then(res => {
//     console.log(res)
//     allCity.value = res.data
// })

//从store中获取数据
const cityStore = useCityStore();
cityStore.fetchAllCitiesData();
const { cities } = storeToRefs(cityStore);

// 目的：获取选中标签后的数据
// 1.获取正确的key: 将tabs中绑定的tabActive正确绑定
// 2.根据key从cities中获取数据，默认直接获取的数据不是响应式的，所以必须包裹computed
const currenGroup = computed(() => cities.value[tabActive.value]);


</script>

<style lang="less" scoped>
.city {
    :deep(.van-search__field) {
        padding: 5px 8px 5px 0;
    }

    :deep(.van-tab--active) {
        font-weight: normal;
    }

    :deep(.van-tab) {
        line-height: 50px;
    }

    /* top固定定位 */
    // .top {
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    // }
    // .content {
    //     margin-top: 98px;
    // }


    //局部滚动
    .content {
        height: calc(100vh - 98px);
        overflow-y: auto;

        .van-index-anchor {
            height: 32px;
            padding: 0 16px;
            line-height: 32px;
        }
    }
}
</style>
