import { defineStore } from 'pinia'
import { getCityAll } from '@/services'

const useCityStore = defineStore('city', {
    state: () => ({
        cities: [],
        currentCity: {
            cityName: '成都'
        }
    }),
    getters: {},
    actions: {
        //发起网络请求
        async fetchAllCitiesData() {
            const res = await getCityAll()
            this.cities = res.data
        }
    }
})

export default useCityStore
