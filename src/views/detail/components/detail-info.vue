<template>
    <div class="house">
        <div class="name">{{ topModule.houseName }}</div>
        <div class="tagText">
            <template v-for="(item, index) in topModule.houseTags" :Key="item.tagCode">
                <div class="item" v-if="item.tagText"
                    :style="{ color: item.tagText?.color, backgroundColor: item.tagText?.background.color }">
                    {{ item.tagText?.text }}</div>
            </template>
        </div>
        <div class="comment extra">
            <div class="left">
                <div class="score">{{ topModule.commentBrief.overall }}</div>
                <div class="title">{{ topModule.commentBrief.scoreTitle }}</div>
                <div class="brief">"{{ topModule.commentBrief.commentBrief }}"</div>
            </div>
            <div class="right">
                <div class="totalCount">{{ topModule.commentBrief.totalCount }}条评论 <van-icon name="arrow" /></div>
            </div>
        </div>
        <div class="position extra">
            <div class="address">{{ topModule.nearByPosition.address }}</div>
            <div class="map">地图·周边 <van-icon name="arrow" /></div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    topModule: {
        type: Object,
        default: () => { }
    }
})
</script>

<style lang='less' scoped>
.house {
    padding: 16px;
    background-color: #fff;

    .name {
        color: #333;
        font-size: 20px;
        font-weight: 800;
    }

    .tagText {
        display: flex;
        margin: 10px 0;
        font-size: 12px;
        justify-content: start;

        .item {
            padding: 1px 3px;
            margin-right: 4px;
        }
    }

    .extra {
        display: flex;
        margin: 12px 0;
        padding: 8px 12px;
        border-radius: 6px;
        background-color: #f5f7fa;
        justify-content: space-between;
        align-items: center;
    }

    .comment {
        .left {
            display: flex;
            align-items: end;

            .score {
                font-size: 18px;
                font-weight: 700;
                color: #333;

            }

            .title {
                padding: 0 3px;
                font-size: 12px;
                font-weight: 800;
                color: #333;
            }

            .brief {
                font-size: 12px;
                color: #666;
            }
        }

        .right {
            font-size: 12px;
            color: var(--primary-color);
        }
    }

    .position {
        .address {
            font-size: 14px;
            font-weight: 700;
            color: #333;
        }

        .map {
            font-size: 12px;
            color: var(--primary-color);
        }
    }
}
</style>
