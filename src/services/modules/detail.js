import HYRequest from '../request/index'

export function getDetailInfos(houseId) {
    return HYRequest.get({
        url: '/detail/infos',
        params: {
            houseId
        }
    })
}
