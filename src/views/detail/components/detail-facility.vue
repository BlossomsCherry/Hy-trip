<template>
    <div class="facility">
        <detail-section title="房屋设施" moreText="查看全部设施">
            <div class="facility-inner">
                <template v-for="(item, index) in houseFacility.houseFacilitys" :key="index">
                    <!-- some() 方法测试数组中是否至少有一个元素通过了由提供的函数实现的测试。
                            如果在数组中找到一个元素使得提供的函数返回 true，则返回 true；否则返回 false。 -->
                    <!-- 这里也可也用 includes() 函数 -->
                    <div class="item" v-if="houseFacility.facilitySort.some(value => value == index)">
                        <div class="head">
                            <img :src="item.icon" alt="">
                            <div class="group-name">{{ item.groupName }}</div>
                        </div>
                        <div class="list">
                            <template v-for="(itemName, index) in item.facilitys.slice(0, 4)" :key="index">
                                <div class="itcn"><van-icon name="passed" color="rgb(83, 221, 205)" />{{ itemName.name
                                }}
                                </div>
                            </template>
                        </div>
                    </div>
                </template>
            </div>
        </detail-section>
    </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';
const props = defineProps({
    houseFacility: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang='less' scoped>
.facility {

    .facility-inner {
        padding: 7px 0;
        background-color: #f7f9fb;
        border-radius: 8px;

        .item {
            display: flex;
            margin: 25px 0;
            padding: 5px 0;
            font-size: 12px;
            flex-direction: row;

            .head {
                display: flex;
                width: 90px;
                flex-direction: column;
                align-items: center;
                // justify-content: space-between;

                img {
                    width: 20px;
                    padding-bottom: 5px;
                }
            }

            .list {
                display: flex;
                flex: 1;
                flex-wrap: wrap;
                align-items: center;


                .itcn {
                    width: 50%;

                    :deep(.van-icon) {
                        margin-right: 5px;
                    }
                }
            }
        }
    }
}
</style>
