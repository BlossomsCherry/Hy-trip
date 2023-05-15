<template>
    <div class=" content">
        <h2 class="title">热门精选</h2>
        <div class="list">
            <template v-for="(item, index) in houseList" :key="item.data.houseId">
                <house-item-v9 v-if="item.discoveryContentType === 9" :item-data="item.data"> </house-item-v9>
                <house-item-v3 v-if="item.discoveryContentType === 3" :item-data="item.data"></house-item-v3>
            </template>
        </div>
    </div>
</template>

<script setup>
import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue'
import houseItemV3 from '@/components/house-item-v3/house-item-v3.vue'
import useHomeStore from '@/store/moudles/home'
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)

</script>

<style lang="less" scoped>
.content {
    padding: 8px;

    .list {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
