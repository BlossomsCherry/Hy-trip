import axios from 'axios'
import { baseURL, TIMEOUT } from './config'
import useMainStore from '@/store/moudles/main'

const mainStore = useMainStore()
class HYRequest {
    constructor(baseURL) {
        this.instance = axios.create({
            baseURL,
            timeout: TIMEOUT
        })

        //请求拦截器
        this.instance.interceptors.request.use(
            config => {
                mainStore.isLoading = true
                return config
            },
            err => {
                return err
            }
        )

        //响应拦截器
        this.instance.interceptors.response.use(
            res => {
                mainStore.isLoading = false
                return res
            },
            err => {
                mainStore.isLoading = false
                return err
            }
        )
    }

    request(config) {
        // mainStore.isLoading = true
        return new Promise((resolve, reject) => {
            this.instance
                .request(config)
                .then(res => {
                    resolve(res.data)
                    // mainStore.isLoading = false
                })
                .catch(err => {
                    console.log('request err:', err)
                    reject(err)
                    // mainStore.isLoading = false
                })
        })
    }

    get(config) {
        return this.request({ ...config, method: 'get' })
    }

    post(config) {
        return this.request({ ...config, method: 'post' })
    }
}

export default new HYRequest(baseURL)
