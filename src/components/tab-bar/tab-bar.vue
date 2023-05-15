<template>
    <div class="tab-bar">
        <van-tabbar v-model="currentIndex" active-color="#ff9854">
            <template v-for="(item, index) in tabBarData">
                <van-tabbar-item :to="item.path" icon="home-o">
                    <span>{{ item.text }}</span>
                    <!-- 具名插槽 -->
                    <template #icon>
                        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="" />
                        <img v-else :src="getAssetURL(item.imageActive)" alt="" />
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import tabBarData from '@/assets/data/tabbar'
import { getAssetURL } from '@/utils/load_assets'


const currentIndex = ref(0)
const route = useRoute()
//监听路由改变时，对应的currentIndex索引与路由一致
watch(route, (newValue) => {
    // console.log(newValue.path);
    const index = tabBarData.findIndex(item => item.path === newValue.path)
    //不满足测试条件findIndex 会返回-1

    if (index === -1) return
    currentIndex.value = index
})
</script>

<style scoped>
/* 找到类，对类中的属性重写 */
/* ::v-deep 找到子组件的类，让子组件的类也可以生效 */
.tab-bar ::v-deep(.van-tabbar-item__icon) {
    font-size: 26px;
}

.tab-bar img {
    height: 26px;
}
</style>
