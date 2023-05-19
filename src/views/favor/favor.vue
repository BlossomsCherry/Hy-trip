<template>
    <div class="favor">
        <nav-bar LeftText="旅途" @textClick="textClick"></nav-bar>
        <div class="tabs">
            <template v-for="(item, index) in tabData">
                <div :class="{ item, active: currentIndex === index }" @click="activeClick(index)">
                    {{ item }}
                </div>
            </template>
        </div>
        <van-tabs title-active-color="#ff9854">
            <van-tab title="房屋">内容 1</van-tab>
            <van-tab title="房东">
                <div class="content">
                    <img src="@/assets/img/favor/empty_favorite.44731802.png" alt="" />
                    <div class="name">暂无收藏</div>
                    <div class="desp">
                        点击
                        <img src="@/assets/img/favor/favor.png" alt="" />
                        即可收藏对应的房东
                    </div>
                    <div class="btn">
                        <button @click="btnClick">随便去逛逛</button>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import navBar from '@/components/nav-bar/nav-bar.vue'

    const tabData = ['我的收藏', '浏览历史']
    const router = useRouter()
    function textClick() {
        router.push('/home')
    }
    const currentIndex = ref(0)
    function activeClick(index) {
        currentIndex.value = index
    }

    function btnClick() {
        router.push('/home')
    }
</script>

<style lang="less" scoped>
    .favor {
        position: relative;

        :deep(.van-tab--active) {
            font-weight: 400;
        }

        .tabs {
            position: absolute;
            top: 6px;
            left: 134px;
            display: flex;
            border: 1px solid var(--primary-color);
            border-radius: 2px;
            align-items: center;
            justify-content: center;
            z-index: 99;

            .active {
                padding: 8px;
                background-color: var(--primary-color);
                color: #fff !important;
            }

            .item {
                padding: 8px;
                color: var(--primary-color);
            }
        }

        .content {
            display: flex;
            text-align: center;
            flex-direction: column;

            .name {
                font-size: 18px;
            }

            .desp {
                display: flex;
                margin: 7px auto 36px;
                font-size: 14px;
                color: #666;
                justify-content: center;
                align-items: center;

                img {
                    margin: 0 5px;
                    width: 12px;
                }
            }

            .btn {
                button {
                    width: 146px;
                    height: 40px;
                    border: 0;
                    border-radius: 20px;
                    color: #fff;
                    font-size: 16px;
                    background-color: var(--primary-color);
                }
            }
        }
    }
</style>
