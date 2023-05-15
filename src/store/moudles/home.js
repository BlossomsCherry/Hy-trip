import { defineStore } from 'pinia'
import { getHotSuggest, getCategories, getHouseList } from '@/services'

const useHomeStore = defineStore('home', {
    state: () => ({
        hotSuggests: [],
        categories: [],

        //分页数据传递参数
        currentPage: 1,
        houseList: []
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHotSuggest()
            this.hotSuggests = res.data
            return 'HotSuggestData网络请求完成!'
        },
        async fetchHomeCategories() {
            const res = await getCategories()
            this.categories = res.data
            return 'getCategories网络请求完成!'
        },
        async fetchHouseList() {
            const res = await getHouseList(this.currentPage)
            this.houseList.push(...res.data)
            this.currentPage++
        }
    }
})
export default useHomeStore
