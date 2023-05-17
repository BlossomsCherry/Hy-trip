<template>
    <div class="section">
        <div class="header">
            <h2 class="title">{{ title }}</h2>
        </div>
        <div class="content">
            <slot>
                <div class="facility">我是内容</div>
            </slot>
        </div>
        <div class="footer">
            <slot>
                <span class="more"> {{ moreText }} <van-icon name="arrow" /></span>
            </slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
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
        border-bottom: 1px solid #eee;
    }

    .content {
        margin: 10px 0;
        background-color: #f7f9fb;

        .facility {}
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
