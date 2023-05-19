<template>
    <div class="content">
        <h2 class="title">热门精选</h2>
        <div class="list">
            <template v-for="(item, index) in houseList" :key="item.data.houseId">
                <house-item-v9
                    @click="itemClick(item)"
                    v-if="item.discoveryContentType === 9"
                    :item-data="item.data"
                >
                </house-item-v9>
                <house-item-v3
                    @click="itemClick(item)"
                    v-else-if="item.discoveryContentType === 3"
                    :item-data="item.data"
                >
                </house-item-v3>
            </template>
        </div>
    </div>
</template>

<script setup>
    import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue'
    import houseItemV3 from '@/components/house-item-v3/house-item-v3.vue'
    import useHomeStore from '@/store/moudles/home'
    import { useRouter } from 'vue-router'
    import { storeToRefs } from 'pinia'

    const homeStore = useHomeStore()
    const { houseList } = storeToRefs(homeStore)
    const router = useRouter()

    function itemClick(item) {
        //跳转到detail页面
        router.push('/detail/' + item.data.houseId)
    }
</script>

<style lang="less" scoped>
    .content {
        padding: 10px;
        margin-bottom: 40px;

        h2 {
            padding-left: 5px;
        }
        .list {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>
