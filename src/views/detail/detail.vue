<template>
    <div class="detail">
        <tab-control
            class="tabs"
            :title-item="['描述', '设施', '房东', '评论', '须知', '周边']"
            v-if="showTabControl"
            @item-click="itemClick"
            ref="tabControlRef"
        ></tab-control>

        <nav-bar
            title="房屋详情"
            :isShowRight="false"
            LeftText="旅途"
            @textClick="textClick"
        ></nav-bar>

        <!-- 详情模块 -->
        <div class="main" v-if="mainPart" v-memo="[mainPart]">
            <!-- 轮播图 -->
            <detail-swipe :swipeData="topModule.housePicture.housePics"></detail-swipe>

            <!-- 详情模块 -->
            <detail-info :ref="getSelectionRef" :topModule="topModule"></detail-info>

            <!-- 房屋设施 -->
            <detail-facility
                :ref="getSelectionRef"
                :houseFacility="dynamicModule.facilityModule.houseFacility"
            ></detail-facility>

            <!-- 房东介绍 -->
            <detail-landlord
                :ref="getSelectionRef"
                :landlord-module="dynamicModule.landlordModule"
            ></detail-landlord>

            <!-- 房客点评 -->
            <detail-comment
                :ref="getSelectionRef"
                :comment-module="dynamicModule.commentModule"
            ></detail-comment>

            <!-- 预定须知 -->
            <detail-notice
                :ref="getSelectionRef"
                :rules-module="dynamicModule.rulesModule"
            ></detail-notice>

            <!-- 位置周边 -->
            <detail-map
                :ref="getSelectionRef"
                :position-module="dynamicModule.positionModule"
            ></detail-map>

            <!-- 价格须知 -->
            <detail-price-intro
                :introduction-module="mainPart.introductionModule"
            ></detail-price-intro>
        </div>

        <!-- 底部模块 -->
        <div class="footer">
            <img src="@/assets/img/detail/icon_ensure.png" alt="" />
            <div class="text">弘源旅途，永无止境！</div>
        </div>
    </div>
</template>

<script setup>
    import { ref, computed, watch } from 'vue'
    import navBar from '@/components/nav-bar/nav-bar.vue'
    import tabControl from '@/components/tab-control/tabControl.vue'
    import detailSwipe from './components/detail-swipe.vue'
    import detailInfo from './components/detail-info.vue'
    import detailFacility from './components/detail-facility.vue'
    import detailLandlord from './components/detail-landlord.vue'
    import detailComment from './components/detail-comment.vue'
    import detailNotice from './components/detail-notice.vue'
    import detailMap from './components/detail-map.vue'
    import detailPriceIntro from './components/detail-price-intro.vue'
    import { useRouter, useRoute } from 'vue-router'
    import { getDetailInfos } from '@/services'
    import useScroll from '@/hooks/useScroll'

    const router = useRouter()
    const route = useRoute()
    const houseId = route.params.id

    //发送网络请求获取数据
    const detailInfos = ref({})
    const mainPart = computed(() => detailInfos.value?.mainPart)
    const topModule = computed(() => mainPart.value?.topModule)
    const dynamicModule = computed(() => mainPart.value?.dynamicModule)

    getDetailInfos(houseId).then(res => {
        // console.log(res)
        detailInfos.value = res.data
        // console.log(dynamicModule.value.facilityModule.houseFacility)
    })

    function textClick() {
        router.push('/home')
    }

    //tabControl相关操作
    const { scrollTop } = useScroll()

    const showTabControl = computed(() => {
        return scrollTop.value > 300
    })
    const sectionEls = []
    const getSelectionRef = value => {
        // console.log(value.$el)
        sectionEls.push(value?.$el)
    }
    console.log(sectionEls)

    let isClick = false
    let currentInstance = -1
    function itemClick(index) {
        let instance = sectionEls[index].offsetTop
        if (index !== 0) {
            instance = instance - 51
        }

        isClick = true
        currentInstance = instance

        window.scrollTo({
            //$el :可以拿到组件的根元素
            top: instance,
            behavior: 'smooth'
        })
    }

    //页面滚动，滚动时匹配对应的tabControl的索引
    const tabControlRef = ref()
    watch(scrollTop, newValue => {
        //滚动到对应位置后修改
        if (newValue === currentInstance) {
            isClick = false
        }
        //如果点击了就不执行滚动的事件
        if (isClick) return
        // 1.获取所有的区域的offsetTops
        const values = sectionEls.map(el => el.offsetTop)
        // console.log(values)

        // 2.根据newValue去匹配想要索引
        let index = values.length - 1
        for (let i = 0; i < values.length; i++) {
            if (values[i] > newValue) {
                index = i - 1
                break
            }
        }
        // console.log(index)
        //判断组件挂载没有
        if (tabControlRef.value) tabControlRef.value?.show(index)
    })
</script>

<style lang="less" scoped>
    .tabs {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        z-index: 99;
    }

    .footer {
        display: flex;
        height: 120px;
        background-color: #fff;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            width: 123px;
        }

        .text {
            margin-top: 12px;
            font-size: 12px;
            color: #7688a7;
        }
    }
</style>
