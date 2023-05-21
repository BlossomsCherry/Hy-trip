<template>
    <div class="search">
        <!-- 搜索栏 -->
        <nav-bar @text-click="textClick"> </nav-bar>
        <search-bar text="搜索博尔塔拉的景点、地标、房源">
            <template #left>
                <div class="city">广州</div>
            </template>
            <template #icon> </template>
        </search-bar>

        <!-- 位置 - 欢迎度排序 - 筛选 -->

        <dropdown-select
            :allConditions="allConditions"
            :subGroups="subGroups"
            :sub-groups3="subGroups3"
            :mapOption2="mapOption2"
        ></dropdown-select>

        <!-- 优惠、多人入住 -->
        <div class="tab-wrapper">
            <div class="tab-select"></div>
        </div>
    </div>
</template>
<script>
    export default { name: 'search' }
</script>
<script setup>
    import { ref, onBeforeMount } from 'vue'
    import { useRouter } from 'vue-router'
    import navBar from '@/components/nav-bar/nav-bar.vue'
    import searchBar from '@/components/search-bar/search-bar.vue'
    import dropdownSelect from '@/components/dropdown-select/dropdown-select.vue'
    import useSearchStore from '@/store/moudles/search'
    import { storeToRefs } from 'pinia'

    //返回
    const router = useRouter()
    function textClick() {
        router.back()
    }

    const searchStore = useSearchStore()
    // 异步获取 allConditions 数据
    const allConditions = ref([])
    const mapOption2 = ref([])
    const subGroups = ref([])
    const subGroups3 = ref([])

    //在挂载之前通过async发送网络请求
    onBeforeMount(async () => {
        await searchStore.fetchAllConditions()
        const { allConditions: allConditionsRef } = storeToRefs(searchStore)
        allConditions.value = allConditionsRef.value
        subGroups.value = allConditions.value[0].subGroups
        subGroups3.value = allConditions.value[2].subGroups

        // 欢迎度排序
        mapOption2.value = allConditions.value[1]?.items.map((item, index) => ({
            text: item.label,
            value: index
        }))

        console.log(mapOption2.value)
        console.log(subGroups.value)
    })

    //位置
</script>

<style lang="less" scoped>
    .search {
        .search[data-v-f25a95ca] {
            position: absolute;
            top: 6px;
            left: 40px;
            width: 80%;
            height: 35px;
            font-size: 12px;
            z-index: 99;
        }
        .city {
            display: flex;
            padding: 0 10px;
            height: 100%;
            font-size: 14px;
            border-right: 1px solid #fff;
            align-items: center;
        }
        .dropdown {
            .menu {
                display: flex;
                .van-sidebar {
                    overflow-y: auto;
                }
                .content {
                    flex: 1;
                    overflow-y: auto;
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
        }
    }
</style>
