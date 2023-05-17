<template>
    <div class="notice">
        <detail-section title="预定须知">
            <template v-for="(item, index) in rulesModule.orderRules" :key="index">
                <div class="notice-inner">
                    <div class="item">
                        <div class="title">{{ item.title }}</div>
                        <div class="date">{{ item.introduction }}</div>
                    </div>
                </div>
            </template>
        </detail-section>
    </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';
defineProps({
    rulesModule: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang='less' scoped>
.notice-inner {
    font-size: 12px;

    .item {
        display: flex;
        margin: 15px 0;

        .title {
            width: 80px;
            color: #666;
        }
    }
}
</style>
