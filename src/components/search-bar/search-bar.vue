<template>
    <div class="search">
        <div class="select-time">
            <div class="item start">
                <div class="name">住</div>
                <div class="date">{{ startDateStr }}</div>
            </div>
            <div class="item end">
                <div class="name">离</div>
                <div class="date">{{ endDateStr }}</div>
            </div>
        </div>
        <div class="content">关键字/位置/民宿</div>
        <div class="right">
            <i class="icon"></i>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import useMainStore from '@/store/moudles/main'
import dayjs from 'dayjs'
import { storeToRefs } from 'pinia'

const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)

const startDateStr = computed(() => dayjs(startDate.value).format('MM.DD'))
const endDateStr = computed(() => dayjs(endDate.value).format('MM.DD'))
</script>

<style lang="less" scoped>
.search {
    display: flex;
    color: #999;
    background-color: #f2f4f6;
    border-radius: 6px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    .select-time {
        display: flex;
        padding: 8px 0 8px 10px;
        border-right: 2px solid #fff;
        font-size: 12px;
        flex-direction: column;
        align-items: center;

        .item {
            display: flex;

            &:nth-child(1) {
                margin-bottom: 2px;
            }

            .date {
                margin: 0 10px 0 3px;
                color: black;
            }
        }
    }

    .content {
        flex: 1;
        padding: 0 5px;
    }

    .right {
        padding-right: 10px;

        .icon {
            display: block;
            width: 24px;
            height: 24px;
            background-image: url('@/assets/img/home/home-sprite.png');
            background-position: -29px 41px;
            background-size: 207px 192px;
        }
    }
}
</style>
