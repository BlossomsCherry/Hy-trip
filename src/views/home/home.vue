<template>
    <div class="home">
        <!-- 标题 -->
        <home-nav-bar></home-nav-bar>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="" />
        </div>
        <div class="location">
            <div class="city">成都</div>
            <div class="position">
                <span>我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import homeNavBar from './components/home-nav-bar.vue'
</script>

<style scoped>
    .banner img {
        width: 100%;
    }
    .location {
        display: flex;
        padding: 0 20px;
        height: 44px;
        justify-content: space-between;
        align-items: center;
    }
    .city {
        flex: 1;
        font-size: 15px;
    }
    .position {
        display: flex;
        width: 74px;
        font-size: 12px;
        color: #666666;
        justify-content: space-around;
        align-items: center;
    }
    .position img {
        width: 18px;
        margin-left: 8px;
    }
</style>
