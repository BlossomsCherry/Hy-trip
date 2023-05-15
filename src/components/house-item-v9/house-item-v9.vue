<template>
    <div class="item">
        <div class="item-inner">
            <div class="cover">
                <img :src="itemData.image.url" alt="">
            </div>
            <div class="info">
                <div class="summary">{{ itemData.summaryText }}</div>
                <div class="name">{{ itemData.houseName }}</div>

                <div class="price">
                    <van-rate :model-value="Number(itemData.commentScore)" readonly allow-half color="#fff" size="12px"
                        gutter="0" />
                    <div class="newPrice">￥{{ itemData.finalPrice }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
    itemData: {
        type: Object,
        default: () => { }
    }
})
//评分
const value = ref(5)

</script>

<style lang="less" scoped>
.item {
    width: 50%;

    .item-inner {
        position: relative;
        margin: 5px;
        background-color: #fff;
        border-radius: 5px;
        overflow: hidden;

        .cover {
            img {
                width: 100%;
            }
        }

        .info {
            position: absolute;
            padding: 8px 10px;
            bottom: 0;
            color: #fff;

            .name {
                margin: 5px 0;
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            .price {
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>
