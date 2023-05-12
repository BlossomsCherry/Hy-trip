<template>
    <div class="tab-bar">
        <template v-for="(item, index) in tabbarData">
            <div class="tab-bar-item" :class="{ active: index === currentIndex }" @click="itemClick(index, item)">
                <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="" />
                <img v-else :src="getAssetURL(item.imageActive)" alt="" />
                <span class="text">{{ item.text }}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
    import tabbarData from '@/assets/data/tabbar'
    import { getAssetURL } from '@/utils/load_assets'
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const currentIndex = ref(0)
    const router = useRouter()
    function itemClick(index, item) {
        currentIndex.value = index
        router.push(item.path)
    }
</script>

<style scoped>
    .tab-bar {
        display: flex;
        position: fixed; /* 固定定位 */
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px;
        border-top: 1px solid #f3f3f3;
        justify-content: space-between;
    }

    .active {
        color: var(--primary-color);
    }
    .tab-bar-item {
        flex: 1;
        display: flex;
        flex-direction: column; /* 更改主轴方向 */
        justify-content: center;
        align-items: center;
    }
    .text {
        margin-top: 2px;
        font-size: 12px;
    }
    img {
        width: 36px;
    }
</style>
