import {API_TOKEN, API_TOKEN2, API_URL} from "../helpers/constants.js";
import {formatRequestParams} from "../helpers/helpers.js";


export function useFetch(path, params) {
    let data = {};
    let error = null;
    let isLoading = true;
    const formattedParams = formatRequestParams(params)
    const url = `${API_URL}/${path}${formattedParams}`
    const cb = async () => {
        try {
            const response = await fetch(url, {
                headers: {
                    'X-API-KEY': API_TOKEN
                },
            })
            const data = await response.json()
            isLoading = false
            console.log(data.docs, 'data')
            return [data.docs, error, isLoading]
        } catch (e) {
            error = e.message
            return [data, error, isLoading]

        }
    }
    return cb()
}