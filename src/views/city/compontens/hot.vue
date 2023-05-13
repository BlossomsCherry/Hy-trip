<template>
    <div class="hot">
        <template v-for="item in currenGroup?.hotCities" :key="item.cityId">
            <div class="item" @click="itemClick(item)">{{ item.cityName }}</div>
        </template>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import useCityStore from '@/store/moudles/city'

defineProps({
    currenGroup: {
        type: Object,
        default: () => { }
    }
})


//监听城市点击
const router = useRouter()
const cityStore = useCityStore()
function itemClick(item) {
    //选中当前城市
    console.log(item);
    cityStore.currentCity = item

    //返回上一级
    router.back()
}
</script>

<style lang="less" scoped> .hot {
     display: flex;
     padding: 10px 20px 10px 10px;
     justify-content: space-around;
     flex-wrap: wrap;

     .item {
         display: flex;
         margin: 6px;
         width: 70px;
         height: 28px;
         border-radius: 20px;
         background-color: #fff4ec;
         font-size: 12px;
         justify-content: center;
         align-items: center;
     }
 }
</style>

