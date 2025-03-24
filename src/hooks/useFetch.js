import {API_TOKEN, API_TOKEN2, API_URL} from "../helpers/constants.js";
import {formatRequestParams} from "../helpers/helpers.js";


export function useFetch(path, params, needToFormatParams = true) {
    let data = {};
    let error = null;
    let isLoading = true;
    let formattedParams = ''
    let url = ''
    if (needToFormatParams) {
        formattedParams = formatRequestParams(params)
    }
    url = `${API_URL}/${path}${formattedParams}`
    const cb = async () => {
        try {
            const response = await fetch(url, {
                headers: {
                    'X-API-KEY': API_TOKEN2
                },
            })
            const parsedResponse = await response.json()
            let {total, pages, limit, page} = parsedResponse
            const paginateInfo = {
                total, pages, limit, page
            }
            isLoading = false
            if (parsedResponse.docs) {
                data = parsedResponse.docs
            } else {
                data = parsedResponse
            }
            return [data, error, isLoading, paginateInfo]
        } catch (e) {
            error = e.message
            return [data, error, isLoading]

        }
    }
    return cb()
}