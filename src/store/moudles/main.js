import { ref } from 'vue'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'

const time = new Date()
const startDate = ref(dayjs(time).format())
const endDate = ref(dayjs(time).format())

const useMainStore = defineStore('main', {
    state: () => ({
        token: '',

        startDate: startDate.value,
        endDate: endDate.value,

        isLoading: true
    }),
    actions: {}
})

export default useMainStore
