<template>
    <div class="search-box">
        <!-- 位置信息 -->
        <div class="item location">
            <div class="city" @click="cityClick">
                {{ currentCity.cityName }}
            </div>
            <div class="position" @click="positionClick">
                <span>我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="" />
            </div>
        </div>

        <!-- 日期范围 -->
        <div class="item data-range">
            <div class="start">
                <span class="text">入住</span>
                <span class="time" @click="timeClick"> {{ startDateStr }} </span>
            </div>
            <div class="stay">
                <span class="text">共{{ stayDay }}晚</span>
            </div>
            <div class="end">
                <span class="text">离店</span>
                <span class="time" @click="timeClick">{{ endDateStr }}</span>
            </div>
        </div>
        <van-calendar v-model:show="show" @confirm="onConfirm" :round="false" color="#ff9854" type="range" />

        <div class="item price-counter">
            <div class="price">价格不限</div>
            <div class="counter">人数不限</div>
        </div>

        <div class="keyword item">
            <span>关键字/位置/民宿名</span>
        </div>

        <!-- 热门建议 -->
        <div class="item hot-suggest">
            <template v-for="(item, index) in hotSuggests" :key="index">
                <div class="item" :style="{ color: item.tagText.color, background: item.tagText.background.color }">{{
                    item.tagText.text }}
                </div>
            </template>
        </div>

        <!-- 搜索按钮 -->
        <div class=" item search-btn">
            <button @click="searchBtnClick">开始搜索</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import useCityStore from "@/store/moudles/city"
import useMainStore from "@/store/moudles/main"
import { storeToRefs } from "pinia"
import dayjs from 'dayjs'

// 定义props
defineProps({
    hotSuggests: {
        type: Object,
        default: () => { }
    }
})

const show = ref(false)
const router = useRouter()
// 位置/城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)
//获取位置点击
function positionClick() {
    //获取位置信息
    navigator.geolocation.getCurrentPosition(
        (res) => {
            console.log("获取位置成功", res)
        },
        (err) => {
            console.log("获取位置失败", err)
        },
        {
            //设置超时时间
            timeout: 10000,
        }
    );
}

function cityClick() {
    console.log("city")
    //跳转到city页面
    router.push("/city")
}


//默认入住时间
// const time = new Date()
// const startDate = ref(`${time.getMonth() + 1}月${time.getDate()}日`)
// const endDate = ref(`${time.getMonth() + 1}月${time.getDate() + 1}日`)

const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)

const startDateStr = computed(() => dayjs(startDate.value).format('MM月DD日'))
const endDateStr = computed(() => dayjs(endDate.value).format('MM月DD日'))
const stayDay = ref(1)
//显示日历
function timeClick() {
    show.value = true
}
//选择入住时间
function onConfirm(value) {
    console.log(value.toLocaleString())
    //value[0]：入住时间   value[1]: 离开时间
    mainStore.startDate = value[0]
    mainStore.endDate = value[1]

    //时间差
    console.log(value[1] - value[0])
    stayDay.value = dayjs(value[1]).diff(value[0], 'day')
    //隐藏日历
    show.value = false
}


//开始搜索
function searchBtnClick() {
    router.push({
        path: '/search',
        //传递数据
        query: {
            startDate: startDate.value,
            endDate: endDate.value,
            currentCity: currentCity.value.cityName
        }
    })
}

</script>

<style lang="less" scoped>
.search-box {
    --van-calendar-popup-height: 100%;

    .item {
        padding: 0 20px;
        color: #999;
    }

    .location {
        display: flex;
        height: 44px;
        justify-content: space-between;
        align-items: center;

        .city {
            flex: 1;
            color: #000;
            font-size: 15px;
        }

        .position {
            display: flex;
            width: 74px;
            font-size: 12px;
            color: #666;
            justify-content: space-around;
            align-items: center;

            img {
                width: 18px;
                margin-left: 8px;
            }
        }
    }

    .data-range {
        display: flex;
        height: 44px;
        // text-align: center;
        justify-content: space-between;
        align-items: center;

        .time {
            font-size: 15px;
            color: #000;
        }

        .text {
            display: block;
            margin-bottom: 2px;
            font-size: 12px;
        }
    }

    .price-counter {
        display: flex;
        height: 44px;
        justify-content: space-between;
        align-items: center;


    }

    .keyword {
        height: 44px;
        line-height: 44px;
    }

    .hot-suggest {
        display: flex;
        margin: 10px 0;
        flex-wrap: wrap;

        .item {
            display: flex;
            margin: 3px;
            padding: 4px 8px;
            height: 22px;
            border-radius: 10px;
            background-color: #f1f3f5;
            box-sizing: border-box;
            font-size: 12px;
            align-items: center;
        }
    }

    .search-btn {
        display: flex;
        height: 38px;
        justify-content: center;

        button {
            flex: 1;
            margin-right: 50px;
            color: #fff;
            background-image: var(--theme-liner-gradient);
            font-size: 18px;
            border: 0;
            border-radius: 20px;
        }
    }
}
</style>
