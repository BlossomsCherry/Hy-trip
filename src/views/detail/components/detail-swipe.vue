<template>
    <div class="swipe">
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" lazy-render>
            <van-swipe-item v-for="(item, index) in swipeData" :key="index">
                <img :src="item.url" alt="">
            </van-swipe-item>
            <!-- 作用域插槽 -->
            <template #indicator="{ active, total }">
                <div class="custom-indicator">
                    <template v-for="(value, key, index) in swipeGroup" :key="index">
                        <div class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
                            <span class="text">{{ getName(value[0]?.title) }}</span>
                            <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                                {{ getCategoryIndex(swipeData[active]) }} /{{ value.length + 1 }}
                            </span>
                        </div>
                    </template>
                </div>
            </template>
        </van-swipe>
    </div>
</template>

<script setup>
const props = defineProps({
    swipeData: {
        type: Array,
        default: []
    }
})

//对数据进行转换
const swipeGroup = {}
for (const item of props.swipeData) {
    if (swipeGroup[item.enumPictureCategory]) {
        swipeGroup[item.enumPictureCategory].push(item)
    } else {
        swipeGroup[item.enumPictureCategory] = []
    }
}
// console.log(swipeGroup)

//定义转换数据的方法
function getName(name) {
    return name?.replace('【', '')?.replace('】', '')?.replace('：', '')?.replace('1', '')
}

function getCategoryIndex(item) {
    const valueArray = swipeGroup[item?.enumPictureCategory]
    return valueArray.findIndex(data => data === item) + 2
}
</script>

<style lang='less' scoped>
.swipe {
    .my-swipe {
        img {
            width: 100%;
            height: 250px;
        }

        .custom-indicator {
            position: absolute;
            display: flex;
            right: 5px;
            bottom: 5px;
            padding: 2px 5px;
            font-size: 12px;
            border-radius: 4px;
            background: rgba(0, 0, 0, 0.1);
            align-items: center;

            .item {
                margin: 0 5px;
                color: #fff;
            }

            .active {
                padding: 2px 3px;
                border-radius: 3px;
                background-color: #fff;
                color: #000;
            }
        }


    }


}
</style>
