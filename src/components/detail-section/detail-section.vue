<template>
    <div class="section">
        <div class="header">
            <h2 class="title">{{ title }}</h2>
        </div>
        <div class="content">
            <slot>
                <h3>我是默认内容</h3>
            </slot>
        </div>
        <div class="footer" v-if="moreText.length">
            <span class="more"> {{ moreText }} <van-icon name="arrow" /></span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    moreText: {
        type: String,
        default: ''
    }
})
</script>

<style lang='less' scoped>
.section {
    margin-top: 15px;
    padding: 16px;
    background-color: #fff;

    .header {
        padding-bottom: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid #eee;
    }

    .content {
        // padding: 10px 0;
        border-radius: 5px;

    }

    .footer {
        display: flex;
        height: 44px;
        justify-content: end;
        align-items: center;

        .more {
            color: var(--primary-color);
            font-size: 14px;
            font-weight: 700;
        }
    }

}
</style>
