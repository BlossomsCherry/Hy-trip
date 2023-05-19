import { onUnmounted, onMounted, ref } from 'vue'
import { throttle } from 'underscore'

//方法一：传入回调函数
// //监听window的滚动
// export default function useScroll(reachBottomBack) {
//     function scrollListener() {
//         //页面高度
//         const clientHeight = document.documentElement.clientHeight
//         //window滚动距离
//         const scrollTop = document.documentElement.scrollTop
//         const scrollHeight = document.documentElement.scrollHeight
//         if (clientHeight + scrollTop >= scrollHeight) {
//             //判断有无 reachBottomBack()
//             if (reachBottomBack) reachBottomBack()
//         }
//     }

//     //挂载后添加监听
//     onMounted(() => {
//         window.addEventListener('scroll', scrollListener)
//     })
//     //当离开页面时，移除监听
//     onUnmounted(() => {
//         window.addEventListener('scroll', scrollListener)
//     })
// }

//方法二：返回变量
//监听window的滚动
export default function useScroll(elRef) {
    let el = window

    const isReachBottom = ref(false)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    const clientHeight = ref(0)

    //节流 throttle
    const scrollListener = throttle(() => {
        //页面高度
        if (el === window) {
            clientHeight.value = document.documentElement.clientHeight
            //window滚动距离
            scrollTop.value = document.documentElement.scrollTop
            scrollHeight.value = document.documentElement.scrollHeight
        } else {
            clientHeight.value = el.clientHeight
            scrollTop.value = el.scrollTop
            scrollHeight.value = el.scrollHeight
        }
        if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
            isReachBottom.value = true
        }
    }, 100)
    //挂载后添加监听
    onMounted(() => {
        if (elRef) {
            el = elRef.value
        }
        el.addEventListener('scroll', scrollListener)
    })
    //当离开页面时，移除监听
    onUnmounted(() => {
        el.addEventListener('scroll', scrollListener)
    })

    return { isReachBottom, scrollTop, scrollHeight, clientHeight }
}
