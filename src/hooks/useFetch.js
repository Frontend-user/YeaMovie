import {API_TOKEN, API_TOKEN2, API_URL} from "../helpers/constants.js";
import {formatRequestParams} from "../helpers/helpers.js";
import {useEffect, useState} from "react";

export function useFetch(path, params, needToFormatParams = true, dependency) {
    console.log(dependency, 'dep')
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [paginateInfo, setPaginateInfo] = useState({
        total: 0,
        limit: 8,
        page: 1,
        pages: 0,
    })
    useEffect(() => {
        let formattedParams = ''
        let url = ''
        if (needToFormatParams) {
            formattedParams = formatRequestParams(params)
        }
        url = `${API_URL}/${path}${formattedParams}`
        const cb = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url, {
                    headers: {
                        'X-API-KEY': API_TOKEN2
                    },
                })
                const parsedResponse = await response.json()

                let {total, pages, limit, page} = parsedResponse
                const definePaginateInfo = {
                    total, pages, limit, page
                }
                setPaginateInfo(definePaginateInfo)
                if (parsedResponse.docs) {
                    setData(parsedResponse.docs)
                } else {
                    setData(parsedResponse)
                }
            } catch (e) {
                setError(e.message)

            } finally {
                setIsLoading(false)
            }
        }
        cb()
    }, [...dependency]);
    return [data, error, isLoading, paginateInfo]
}
