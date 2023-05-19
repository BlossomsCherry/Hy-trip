<template>
    <div class="categories">
        <template v-for="(item, index) in categories" :key="item.id">
            <div class="item" @click="itemClick(index)">
                <img :src="item.pictureUrl" alt="" />
                <span>{{ item.title }}</span>
                <div :class="{ active: currentIndex === index }"></div>
            </div>
        </template>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import useHomeStore from '@/store/moudles/home'
    import { storeToRefs } from 'pinia'

    const homeStore = useHomeStore()
    const { categories } = storeToRefs(homeStore)
    const currentIndex = ref(0)

    function itemClick(index) {
        currentIndex.value = index
    }
</script>

<style lang="less" scoped>
    .categories {
        display: flex;
        padding: 0 10px;
        margin: 10px 0;
        height: 50px;
        background-color: #fff;
        align-items: center;
        overflow: auto;
        box-sizing: border-box;

        //隐藏滚动条
        &::-webkit-scrollbar {
            display: none;
        }

        .item {
            position: relative;
            display: flex;
            flex-shrink: 0;
            padding: 0 12px;
            width: 52px;
            font-size: 12px;
            color: #646566;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &:first-child {
                padding-left: 5px;
            }

            img {
                width: 32px;
                height: 32px;
            }

            .active {
                position: absolute;
                bottom: -2px;
                width: 64%;
                height: 3px;
                background-color: var(--primary-color);
                border-radius: 2px;
            }
        }
    }
</style>
