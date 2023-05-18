<template>
    <div class="price-intro">
        <detail-section title="价格说明">
            <div class="text">{{ introductionModule.introduction }}</div>
        </detail-section>
    </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';

defineProps({
    introductionModule: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang='less' scoped>
.text {
    font-size: 12px;
    color: #666;
}
</style>
