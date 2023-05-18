<template>
    <div class="tab-control">
        <template v-for="(item, index) in titleItem">
            <div :class="{ item, active: index === currentIndex }" @click="itemClick(index)">
                <span>{{ item }}</span>
                <div class="tab"></div>
            </div>
        </template>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        titleItem: {
            type: Array,
            default: []
        }
    })
    const currentIndex = ref(0)

    const emits = defineEmits(['itemClick'])

    function itemClick(index) {
        currentIndex.value = index
        emits('itemClick', index)
    }
</script>

<style lang="less" scoped>
    .tab-control {
        position: relative;
        display: flex;
        padding: 15px 0;
        height: 21px;
        background-color: #fff;
        justify-content: space-around;

        .item {
            width: 40px;
            text-align: center;
        }

        .active {
            color: var(--primary-color);

            .tab {
                margin-top: 6px;
                border-bottom: 3px solid var(--primary-color);
                border-radius: 2px;
            }
        }

        // .tab {
        //     position: absolute;
        //     left: 16px;
        //     top: 36px;
        //     width: 38px;
        //     height: 3px;
        //     border-radius: 5px;
        //     background-color: var(--primary-color);
        // }
    }
</style>
