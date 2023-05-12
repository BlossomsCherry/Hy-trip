<template>
    <div class="tab-bar">
        <van-tabbar v-model="currentIndex" active-color="#ff9854" route="true">
            <template v-for="(item, index) in tabbarData">
                <van-tabbar-item :to="item.path" icon="home-o">
                    <span>{{ item.text }}</span>
                    <!-- <template #icon>
                        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="" />
                        <img v-else :src="getAssetURL(item.imageActive)" alt="" />
                    </template> -->
                </van-tabbar-item>
            </template>
        </van-tabbar>
    </div>
</template>

<script setup>
    import tabbarData from '@/assets/data/tabbar'
    import { getAssetURL } from '@/utils/load_assets'
    import { ref } from 'vue'

    const currentIndex = ref(0)
</script>

<style scoped>
    /* .tab-bar { */
    /* 局部定义变量：只针对.tab-bar子元素才生效 */
    /* --van-tabbar-item-icon-size: 26px; */
    /* } */

    /* 找到类，对类中的属性重写 */
    /* ::v-deep 找到子组件的类，让子组件的类也可以生效 */
    .tab-bar ::v-deep(.van-tabbar-item__icon) {
        font-size: 26px;
    }
    .tab-bar img {
        height: 26px;
    }
</style>
