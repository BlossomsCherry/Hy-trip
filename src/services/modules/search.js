import HYRequest from '../request'

export function getAllConditions() {
    return HYRequest.get({
        url: '/search/top'
    })
}
