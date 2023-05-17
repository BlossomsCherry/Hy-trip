<template>
    <div class="landlord">
        <detail-section title="房东介绍" more-text="查看房东主页">
            <div class="intro">
                <div class="top">
                    <img :src="landlordModule.topScroll" alt="">
                </div>
                <div class="header">
                    <div class="left">
                        <img :src="landlordModule.hotelLogo" alt="">
                        <div class="tags">
                            <div class="name">{{ landlordModule.hotelName }}</div>
                            <div class="tag-item">
                                <template v-for="(item, index) in landlordModule.hotelTags" :key="index">
                                    <div class="tag">{{ item.tagText.text }}</div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="contact">联系房东</div>
                    </div>
                </div>
                <div class="bottom">
                    <template v-for="(item, index) in landlordModule.hotelSummary" :key="index">
                        <div class="item">
                            <div class="title">{{ item.title }}</div>
                            <div class="score">{{ item.introduction }}</div>
                            <div class="tip">{{ item.tip }}</div>
                        </div>
                    </template>
                </div>
            </div>
        </detail-section>
    </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';

defineProps({
    landlordModule: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang='less' scoped>
.landlord {
    .intro {
        background-color: #fff;

        .top {
            img {
                width: 100%;
                border-radius: 3px;
            }
        }

        .header {
            display: flex;
            margin-top: 10px;
            justify-content: space-between;
            align-items: center;

            .left {
                display: flex;
                align-items: center;

                img {
                    width: 54px;
                }

                .tags {
                    display: flex;
                    flex-direction: column;

                    .name {
                        font-size: 16px;
                        font-weight: 800;
                    }

                    .tag-item {
                        display: flex;
                        font-size: 12px;
                        color: rgb(155, 155, 155);

                        .tag {
                            padding-right: 4px;
                            margin-right: 4px;
                            border-right: 1px solid;

                        }
                    }
                }
            }

            .right {
                padding: 0 12px;
                height: 24px;
                line-height: 24px;
                color: #fff;
                font-size: 12px;
                border-radius: 4px;
                background-image: var(--theme-liner-gradient);
            }
        }

        .bottom {
            display: flex;
            margin: 50px 10px 10px;
            justify-content: space-between;

            .item {
                display: flex;
                font-size: 12px;
                color: #999;
                flex-direction: column;

                .score {
                    margin: 7px 0;
                    font-size: 18px;
                    font-weight: 800;
                    color: #333;
                }

                .tip {
                    color: #666;
                }
            }
        }
    }
}
</style>
