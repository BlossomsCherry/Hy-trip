import { defineStore } from 'pinia'
import { getAllConditions } from '@/services'

const useSearchStore = defineStore('search', {
    state: () => ({
        searchData: {},
        allConditions: [] // 添加 allConditions 属性
    }),
    actions: {
        async fetchAllConditions() {
            const res = await getAllConditions()
            this.allConditions = res.data.data.allConditions // 更新 allConditions 值
        }
    }
})

export default useSearchStore
