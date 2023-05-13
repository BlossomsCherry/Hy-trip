import { defineStore } from "pinia";
import { getHotSuggest } from "@/services";

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHotSuggest();
            this.hotSuggests = res.data;
            return "网络请求完成!";
        },
    },
});
export default useHomeStore;
