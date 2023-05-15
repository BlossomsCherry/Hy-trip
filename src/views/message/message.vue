<template>
    <div class="message">
        <nav-bar title="消息中心" @text-click="textClick"> </nav-bar>
        <div class="content">
            <img src="@/assets/img/message/icon_message.png" alt="">
            <div class="text">暂无聊天消息</div>
        </div>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import navBar from '@/components/nav-bar/nav-bar.vue';

const router = useRouter()
function textClick() {
    router.push('/order')
}
</script>

<style lang="less" scoped>
.message {
    .content {
        display: flex;
        margin-top: 80px;
        flex-direction: column;

        .text {
            text-align: center;
        }
    }
}
</style>
