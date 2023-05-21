<template>
    <div class="dropdown">
        <van-dropdown-menu v-if="allConditions.length">
            <!-- 位置 -->
            <van-dropdown-item title="位置">
                <side-bar :subGroups="subGroups"></side-bar>

                <div class="bottom">
                    <div class="left">清空</div>
                    <div class="right">查看房屋(220)套</div>
                </div>
            </van-dropdown-item>

            <!-- 欢迎度排序 -->
            <van-dropdown-item v-model="value2" :options="mapOption2" />

            <!-- 筛选 -->
            <van-dropdown-item title="筛选">
                <side-bar :subGroups="subGroups3">
                    <p class="list-content">正在开发中....</p>
                </side-bar>

                <div class="bottom">
                    <div class="left">清空</div>
                    <div class="right">查看房屋(220)套</div>
                </div>
            </van-dropdown-item>
        </van-dropdown-menu>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import sideBar from '@/components/side-bar/side-bar.vue'
    defineProps({
        allConditions: {
            type: Array,
            default: []
        },
        subGroups: {
            type: Array,
            default: []
        },
        mapOption2: {
            type: Array,
            default: []
        },
        subGroups3: {
            type: Array,
            default: []
        }
    })

    //默认值
    const value2 = ref(0)
</script>

<style lang="less" scoped>
    /deep/ .van-dropdown-item__content {
        overflow: hidden;
    }
    .list-content {
        margin: 20px 0;
    }
    .bottom {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        height: 60px;
        background-color: #fff;
        font-size: 15px;
        align-items: center;
        z-index: 100;
        .left {
            display: flex;
            margin: 0 20px;
            width: 85px;
            height: 40px;
            border-radius: 20px;
            color: #dadada;
            background-color: #f3f4f6;
            justify-content: center;
            align-items: center;
        }
        .right {
            display: flex;
            width: 240px;
            height: 40px;
            border-radius: 20px;
            color: #fff;
            background-color: var(--primary-color);
            justify-content: center;
            align-items: center;
        }
    }
</style>
