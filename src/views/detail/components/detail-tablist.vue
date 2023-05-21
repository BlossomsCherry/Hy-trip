<template>
    <div class="tablist">
        <div class="chat">
            <img src="@/assets/img/detail/icon_chat.png" alt="" />
            <span class="text">聊天</span>
        </div>
        <div class="price">
            <span class="final">￥{{ pricePart.priceModule?.product.finalPrice }}</span>
            <span class="unit">/晚</span>
            <span class="old">{{ pricePart.priceModule?.product.productPrice }}</span>
        </div>
        <div class="order">
            <img src="@/assets/img/detail/icon_order.png" alt="" />
            <span class="text">预定当前房源</span>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        pricePart: {
            type: Object,
            default: () => ({})
        }
    })
</script>

<style lang="less" scoped>
    .tablist {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        height: 60px;
        background-color: #fff;
        justify-content: space-between;
        align-items: center;
        z-index: 999;
        .chat {
            display: flex;
            padding: 0 13px;
            border-right: 1px solid #ccc;
            flex-direction: column;
            align-items: center;

            img {
                width: 17px;
                margin-bottom: 6px;
            }
            .text {
                font-size: 12px;
            }
        }
        .price {
            flex: 1;
            padding-left: 15px;
            font-size: 12px;
            color: #666;
            .final {
                font-size: 18px;
                color: var(--primary-color);
            }
            .unit {
                padding: 0 5px;
            }
            .old {
                text-decoration: line-through;
            }
        }
        .order {
            display: flex;
            width: 150px;
            height: 100%;
            color: #fff;
            background-image: var(--theme-liner-gradient);
            align-items: center;
            justify-content: center;
            img {
                width: 14px;
                height: 17px;
            }
            .text {
                font-size: 18px;
            }
        }
    }
</style>
