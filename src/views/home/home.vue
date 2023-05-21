<template>
    <div class="home" ref="homeRef">
        <!-- 标题 -->
        <home-nav-bar></home-nav-bar>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="" />
        </div>
        <!-- 热门推荐 -->
        <home-search-box :hotSuggests="hotSuggests"></home-search-box>
        <home-categories></home-categories>

        <!-- 搜索框 -->
        <div class="top" v-if="isShow">
            <search-bar @click="searchClick" text="关键字/位置/民宿">
                <template #icon>
                    <div class="right">
                        <i class="icon"></i>
                    </div>
                </template>
            </search-bar>
        </div>

        <!-- 列表展示 -->
        <home-content></home-content>
    </div>
</template>
<script>
    export default {
        name: 'home'
    }
</script>
<script setup>
    import { onUnmounted, onMounted, watch, ref, computed, onActivated } from 'vue'
    import { useRouter } from 'vue-router'
    import homeNavBar from './components/home-nav-bar.vue'
    import homeSearchBox from './components/home-search-box.vue'
    import searchBar from '@/components/search-bar/search-bar.vue'
    import useMainStore from '@/store/moudles/main'
    import { storeToRefs } from 'pinia'
    import useHomeStore from '@/store/moudles/home'
    import HYRequest from '@/services/request/index'
    import homeCategories from './components/home-categories.vue'
    import homeContent from './components/home-content.vue'
    import useScroll from '@/hooks/useScroll'

    //发送网络请求
    //1. 热门建议
    // const hotSuggests = ref([])
    // HYRequest.get({
    //     url: "/home/hotSuggests",
    // }).then((res) => {
    //     console.log(res.data)
    //     hotSuggests.value = res.data
    // })

    const router = useRouter()
    const homeStore = useHomeStore()
    //发送网络请求
    homeStore.fetchHotSuggestData()
    homeStore.fetchHomeCategories()
    homeStore.fetchHouseList()
    //对象解构
    const { hotSuggests } = storeToRefs(homeStore)

    // //监听window的滚动
    // function scrollListener() {
    //     //页面高度
    //     const clientHeight = document.documentElement.clientHeight
    //     //window滚动距离
    //     const scrollTop = document.documentElement.scrollTop
    //     const scrollHeight = document.documentElement.scrollHeight
    //     // console.log(clientHeight, scrollTop, scrollHeight)

    //     if (clientHeight + scrollTop >= scrollHeight) {
    //         homeStore.fetchHouseList()
    //     }
    // }

    // //挂载后添加监听
    // onMounted(() => {
    //     window.addEventListener('scroll', scrollListener)
    // })
    // //当离开页面时，移除监听
    // onUnmounted(() => {
    //     window.addEventListener('scroll', scrollListener)
    // })

    // useScroll(() => {
    //     homeStore.fetchHouseList()
    // })

    const homeRef = ref()
    const { isReachBottom, scrollTop } = useScroll(homeRef)
    watch(isReachBottom, newValue => {
        if (newValue) {
            homeStore.fetchHouseList().then(() => {
                //数据请求完后修改 isReachBottom
                isReachBottom.value = false
            })
        }
    })

    //搜索框显示
    // const isShow = ref(false)
    // watch(scrollTop, (newValue) => {
    //     isShow.value = newValue > 500
    // })

    //定义的可响应式数据，依赖另一个可响应式数据，那么可以使用计算属性(computed)
    const isShow = computed(() => {
        return scrollTop.value > 500
    })

    function searchClick() {
        router.push('/search')
    }
    //跳转回home时，保留原来位置
    onActivated(() => {
        homeRef.value?.scrollTo({
            top: scrollTop.value
        })
    })
</script>

<style lang="less" scoped>
    .home {
        height: 100vh;
        overflow-y: auto;

        .banner {
            img {
                width: 100%;
            }
        }
        .top {
            position: fixed;
            padding: 16px 16px 10px 16px;
            width: 93%;
            top: 0;
            color: black;
            background-color: #fff;
            z-index: 99;
            .right {
                padding-right: 10px;

                .icon {
                    display: block;
                    width: 24px;
                    height: 24px;
                    background-image: url('@/assets/img/home/home-sprite.png');
                    background-position: -29px 41px;
                    background-size: 207px 192px;
                }
            }
        }
    }
</style>
