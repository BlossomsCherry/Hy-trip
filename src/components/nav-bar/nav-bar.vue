<template>
    <div class="nav-bar">
        <van-nav-bar :title="title" left-arrow>
            <template #left>
                <i @click="textClick" class="icon-left"></i>
                <span @click="textClick">{{ LeftText }}</span>
            </template>
            <template #right v-if="isShowRight">
                <i class="icon-right"></i>
            </template>
        </van-nav-bar>
    </div>
</template>

<script setup>
    defineProps({
        //标题文字
        title: {
            type: String,
            default: ''
        },
        LeftText: {
            type: String,
            default: ''
        },
        isShowRight: {
            type: Boolean,
            default: true
        }
    })

    //绑定事件，并向父组件发出事件
    const emits = defineEmits(['textClick'])
    function textClick() {
        emits('textClick')
    }
</script>

<style lang="less" scoped>
    .nav-bar {
        color: var(--primary-color);

        :deep(.van-nav-bar__title) {
            font-weight: 400;
        }

        span {
            padding-left: 8px;
            font-weight: 500;
        }

        .icon-left {
            width: 8px;
            height: 15px;
            background: url('/src/assets/img/common/icon_nav_back.png') 0 0/100% 100%;
        }

        .icon-right {
            width: 20px;
            height: 15px;
            background: url('@/assets/img/common/icon-right-menu.png') 0 0/100% 100%;
        }
    }
</style>
