import HYRequest from "../request/index";

export function getHotSuggest() {
    return HYRequest.get({
        url: "/home/hotSuggests",
    });
}

export default getHotSuggest;
