<template>
    <div class="dropdown">
        <van-dropdown-menu v-if="allConditions.length">
            <!-- 位置 -->
            <van-dropdown-item title="位置">
                <side-bar :subGroups="subGroups"></side-bar>
            </van-dropdown-item>

            <!-- 欢迎度排序 -->
            <van-dropdown-item v-model="value2" :options="mapOption2" />

            <!-- 筛选 -->
            <van-dropdown-item title="筛选">
                <side-bar :subGroups="subGroups3">
                    <p class="list-content">正在开发中....</p>
                </side-bar>
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
</style>
