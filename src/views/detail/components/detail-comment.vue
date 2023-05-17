<template>
    <div class="comment">
        <detail-section title="房客点评" :more-text="moreText">
            <div class="header">
                <div class="left">
                    <div class="score">{{ commentModule.overall }}</div>
                    <div class="line"></div>
                    <div class="info">
                        <div class="title">{{ commentModule.scoreTitle }}</div>
                        <div class="count">{{ commentModule.totalCount }}条评论</div>
                        <div class="star">
                            <van-rate v-model="starValue" allow-half size="12px " color=" rgb(255, 150, 69)" />
                        </div>
                    </div>
                </div>
                <div class="right">
                    <template v-for="(item, index) in commentModule.subScores" :key="index">
                        <div class="item">{{ item }}</div>
                    </template>
                </div>
            </div>
            <div class="tags">
                <template v-for="(item, index) in commentModule.commentTagVo">
                    <div class="item">{{ item.text }}</div>
                </template>
            </div>
            <div class="content">
                <div class="user">
                    <img :src="commentModule.comment.userAvatars" alt="">
                    <div class="profile">
                        <div class="user-name">{{ commentModule.comment.userName }}</div>
                        <div class="date">{{ commentModule.comment.checkInDate }}</div>
                    </div>
                </div>
                <div class="text">{{ commentModule.comment.commentDetail }}</div>
            </div>
        </detail-section>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import detailSection from '@/components/detail-section/detail-section.vue';

const props = defineProps({
    commentModule: {
        type: Object,
        default: () => ({})
    }
})
const totalCount = computed(() => props.commentModule.totalCount)
const moreText = `查看全部${totalCount.value}条评价`
const starValue = computed(() => props.commentModule.overall)
</script>

<style lang='less' scoped>
.comment {


    .header {
        display: flex;

        .left {
            position: relative;
            display: flex;
            font-size: 12px;
            align-items: center;

            .score {
                margin-right: 10px;
                width: 65px;
                font-size: 48px;
                font-weight: 700;
                color: #333;
                z-index: 9;
            }

            .line {
                width: 66px;
                height: 6px;
                background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
                border-radius: 3px;
                position: absolute;
                bottom: 7px;
                // z-index: 5;
            }

            .title {
                color: #333;
            }

            .count {
                color: #999;
            }
        }

        .right {
            display: flex;
            flex: 1;
            font-size: 12px;
            color: #666;
            flex-wrap: wrap;
            justify-content: end;
            align-items: center;

            .item {
                margin-left: 5px;
            }
        }
    }

    .tags {
        display: flex;
        flex-wrap: wrap;

        .item {
            padding: 3px 5px;
            margin-right: 8px;
            margin-top: 5px;
            border-radius: 8px;
            font-size: 12px;
            color: rgb(102, 102, 102);
            background: rgb(245, 245, 245);
        }
    }

    .content {
        margin-top: 10px;
        padding: 10px;
        border-radius: 6px;
        background-color: #f7f9fb;

        .user {
            display: flex;
            align-items: center;

            img {
                width: 32px;
                margin-right: 7px;
                border-radius: 20px;
            }

            .profile {
                .user-name {
                    font-size: 14px;
                }

                .date {
                    font-size: 12px;
                    color: #999;
                }
            }
        }

        .text {
            font-size: 12px;
            line-height: 16px;
            color: #333;
            margin-top: 16px;
        }
    }
}
</style>
