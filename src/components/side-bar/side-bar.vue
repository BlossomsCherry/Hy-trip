<template>
    <div class="drop-down">
        <div class="side-bar">
            <div class="menu">
                <van-sidebar v-model="active">
                    <template v-for="(item, index) in subGroups" :key="index">
                        <van-sidebar-item :title="item.itemTypeLabel || item.label" />
                    </template>
                </van-sidebar>
            </div>

            <div class="content">
                <slot>
                    <template v-for="(item, index) in subGroups[active].items" :key="index">
                        <div
                            class="item"
                            :class="{ active: currentIndex === index }"
                            @click="activeClick(index)"
                        >
                            <div class="name">{{ item.label }}</div>
                            <span class="percentageUser">{{ item.percentageUser }}</span>
                        </div>
                    </template>
                </slot>
            </div>
        </div>
        <div class="bottom">
            <div class="left">清空</div>
            <div class="right">查看房屋(220)套</div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    defineProps({
        subGroups: {
            type: Array,
            default: []
        }
    })

    const active = ref(0)
    const currentIndex = ref(0)
    function activeClick(index) {
        currentIndex.value = index
    }
</script>

<style lang="less" scoped>
    @popupHeight: 500px;

    .drop-down {
        position: relative;
        height: 500px;
        overflow: hidden;

        .side-bar {
            display: flex;
            .menu {
                overflow-y: auto;
                height: calc(@popupHeight - 100px);
            }
            .content {
                flex: 1;
                height: calc(@popupHeight - 100px);
                overflow-y: auto;
                .active {
                    background-color: #fffcf5;
                    .name {
                        color: var(--primary-color);
                    }
                }
                .item {
                    display: flex;
                    padding: 10px 20px;
                    flex-direction: column;
                    justify-content: center;
                    .name {
                        padding-bottom: 6px;
                        font-size: 14px;
                    }
                    .percentageUser {
                        font-size: 12px;
                        color: #999;
                    }
                }
            }
        }
        .bottom {
            position: absolute;
            left: 0;
            bottom: 42px;
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
    }
</style>
