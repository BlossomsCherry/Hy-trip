<template>
    <div class="map">
        <detail-section title="位置周边" more-text="查看周边更多信息">
            <div class="baidu" ref="mapRef"> </div>
        </detail-section>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import detailSection from '@/components/detail-section/detail-section.vue'

const props = defineProps({
    positionModule: {
        type: Object,
        default: () => ({})
    }
})
const mapRef = ref()
onMounted(() => {
    const map = new BMapGL.Map(mapRef.value)          // 创建地图实例 
    const point = new BMapGL.Point(props.positionModule.longitude, props.positionModule.latitude)  // 创建点坐标 
    map.centerAndZoom(point, 15)                 // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true)
    map.setHeading(64.5);   //设置地图旋转角度
    map.setTilt(73);       //设置地图的倾斜角度
})
</script>

<style lang='less' scoped>
.baidu {
    height: 250px;
}
</style>
