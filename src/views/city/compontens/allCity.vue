<template>
    <div class="allCity">
        <div class="list-index">
            <template v-for="(item, index) in currenGroup?.cities" :key="index">
                <div :class="{ active: index === currentIndex }" @click="indexClick">{{ item.group }}</div>
            </template>
        </div>
        <template v-for="(item, index) in currenGroup?.cities" :key="index">
            <div class="item">{{ item.group }}</div>
            <template v-for="value in item.cities" :key="value.cityId">
                <div class="list">
                    <span @click="listClick(value)">{{ value.cityName }}</span>
                </div>
            </template>
        </template>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import useCityStore from '@/store/moudles/city'

//父子组件通信
defineProps({
    currenGroup: {
        type: Object,
        default: () => { }
    }
})

//监听城市点击
const router = useRouter()
const cityStore = useCityStore()
function listClick(value) {
    //选中当前城市
    console.log(value)
    cityStore.currentCity = value
    //返回上一级
    router.back()
}

const currentIndex = 0
function indexClick() {
    console.log(1)
}
</script>

<style lang="less" scoped>
.allCity {
    .list-index {
        position: absolute;
        top: 200px;
        right: 0;
        padding: 0 6px 0 16px;
        text-align: center;
        font-size: 12px;
        z-index: 9;

        .active {
            color: var(--primary-color);
        }
    }

    .item {
        height: 32px;
        padding: 0 16px;
        line-height: 32px;
    }

    .list {
        display: flex;
        position: relative;
        height: 44px;
        padding: 10px 16px;
        justify-content: start;
        align-items: center;
        font-size: 14px;
        box-sizing: border-box;

        span {
            flex: 1;
            padding: 10px 0;
            border-bottom: 1px solid #f2f2f2;
        }

    }


}
</style>
