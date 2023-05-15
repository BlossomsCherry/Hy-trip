<template>
    <div class="item">
        <div class="item-inner">
            <div class="cover">
                <img :src="itemData?.image?.url" alt="">
            </div>
            <div class="info">
                <div class="location">
                    <img src="@/assets/img/home/location.png" alt="">
                    <span>{{ itemData.location }}</span>
                </div>
                <div class="name">{{ itemData.houseName }}</div>
                <div class="summary">{{ itemData.summaryText }}</div>
                <div class="price">
                    <div class="finalPrice">¥{{ itemData?.finalPrice }}</div>
                    <div class="product-price">¥{{ itemData?.productPrice }}</div>
                    <div class="priceTipBadge">{{ itemData?.priceTipBadge?.text }}</div>
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

// const startColor = itemData.priceTipBadge.gradient.startColor
// const endColor = itemData.priceTipBadge.gradient.endColor
</script>

<style lang="less" scoped>
.item {
    width: 50%;

    .item-inner {
        position: relative;
        margin: 5px;
        height: 259px;
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
            color: #000;

            .location {
                display: flex;
                color: #666;
                font-size: 12px;
                align-items: center;

                img {
                    width: 12px;
                }
            }

            .summary {
                color: #666;
                font-size: 12px;
            }

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
                margin-top: 5px;
                align-items: center;

                .finalPrice {
                    color: #ff9645;
                }

                .product-price {
                    margin: 0 7px;
                    color: #666;
                    font-size: 12px;
                    text-decoration: line-through;
                }

                .priceTipBadge {
                    display: flex;
                    padding: 0 6px;
                    color: #fff;
                    font-size: 12px;
                    background-image: linear-gradient(270deg, #f66, #ff9f9f);
                    border-radius: 8px;
                    align-items: center;
                }
            }
        }
    }
}
</style>
