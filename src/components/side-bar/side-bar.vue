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

            <div class="content" v-if="!subGroups[active].subGroups.length">
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

            <!-- 二级列表 -->
            <template v-if="subGroups[active].subGroups.length">
                <div class="sub-side">
                    <div class="sub-menu">
                        <van-sidebar v-model="active">
                            <template
                                v-for="(item, index) in subGroups[active]?.subGroups"
                                :key="index"
                            >
                                <van-sidebar-item :title="item.label" />
                            </template>
                        </van-sidebar>
                    </div>
                    <div class="sub-content">
                        <template
                            v-for="(value, index) in subGroups[active]?.subGroups[active]?.items"
                            :key="index"
                        >
                            <div
                                class="item"
                                :class="{ active: currentIndex === index }"
                                @click="activeClick(index)"
                            >
                                <div class="name">{{ value.label }}</div>
                            </div>
                        </template>
                    </div>
                </div>
            </template>
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

    //二级列表
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
        .sub-side {
            --van-sidebar-background: #fff;
            display: flex;
            flex: 1;
            overflow: hidden;

            .sub-menu {
                height: calc(@popupHeight - 100px);
                overflow-y: auto;
            }
            .sub-content {
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
                    padding: 20px 12px;
                }
            }
        }
    }
</style>
