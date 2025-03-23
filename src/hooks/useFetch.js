import {API_TOKEN, API_TOKEN2, API_URL} from "../helpers/constants.js";
import {formatRequestParams} from "../helpers/helpers.js";


export function useFetch(path, params, needToFormatParams = true) {
    let data = {};
    let error = null;
    let isLoading = true;
    let formattedParams = ''
    if (needToFormatParams) {
        formattedParams = formatRequestParams(params)
    }
    const url = `${API_URL}/${path}${formattedParams}`
    const cb = async () => {
        try {
            const response = await fetch(url, {
                headers: {
                    'X-API-KEY': API_TOKEN
                },
            })
            const parsedResponse = await response.json()
            isLoading = false
            if (parsedResponse.docs) {
                data = parsedResponse.docs
            } else {
                data = parsedResponse
            }
            return [data, error, isLoading]
        } catch (e) {
            error = e.message
            return [data, error, isLoading]

        }
    }
    return cb()
}