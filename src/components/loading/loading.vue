<template>
    <div class="loading" v-if="mainStore.isLoading" @click="loadingClick">
        <div class="bg">
            <img src="@/assets/img/home/full-screen-loading.gif" alt="">
        </div>
    </div>
</template>

<script setup>
import useMainStore from '@/store/moudles/main';

const mainStore = useMainStore()
function loadingClick() {
    mainStore.isLoading = false
}
</script>

<style lang="less" scoped>
.loading {
    position: fixed;
    display: flex;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.2);
    justify-content: center;
    align-items: center;
    z-index: 999;

    .bg {
        display: flex;
        width: 104px;
        height: 104px;
        background: url('@/assets/img/home/loading-bg.png') 0 5px / 100% 100%;
        justify-content: center;
        align-items: center;

        img {
            width: 70px;
        }
    }

}
</style>
