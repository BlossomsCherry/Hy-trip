<template>
    <div class="categories">
        <template v-for="(item, index) in categories" :key="item.id">
            <div class="item">
                <img :src="item.pictureUrl" alt="">
                <span>{{ item.title }}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
import useHomeStore from '@/store/moudles/home'
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.categories {
    display: flex;
    padding: 0 20px;
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

        img {
            width: 32px;
            height: 32px;
        }
    }
}
</style>
