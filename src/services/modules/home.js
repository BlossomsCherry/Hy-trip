import HYRequest from '../request/index'

export function getHotSuggest() {
    return HYRequest.get({
        url: '/home/hotSuggests'
    })
}

export function getCategories() {
    return HYRequest.get({
        url: '/home/categories'
    })
}

export function getHouseList(currentPage) {
    return HYRequest.get({
        url: '/home/houselist',
        params: {
            page: currentPage
        }
    })
}
