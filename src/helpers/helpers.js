import {useCallback, useRef} from "react";
export const formatGenre = (genres) => {
    let result = ''
    genres.forEach((item, idx) => {
        result += item.name
        if (!(idx + 1 >= genres.length)) {
            result += ', '
        }
    })
    return result
}
export function formatRequestParams(options) {
    if (options === {}) return ''
    let result = '?'
    let entries = Object.entries(options)
    if (!entries.length) return ''
    for (let i = 0; i < entries.length; i++) {
        const [key, value] = entries[i]
        if (i + 1 === entries.length) {
            result += `${key}=${value}`
        } else {
            result += `${key}=${value}&`

        }
    }
    return result
}

export function useDebouncedCallback(fn, delay) {
    const timer = useRef(null)
    return useCallback((...args) => {
        clearTimeout(timer.current)

        timer.current = setTimeout(() => {
            clearTimeout(timer.current)
            fn.apply(this, args)
        }, delay)
    },[fn,delay])
}

export function defineTabsFilmsParams(id) {
    let params = {}
    if (id === 1) {
        params = {
            page: 1,
            limit: 8,
            isSeries: false,
            'audience.count': '100000-6666666'
        }
    } else if (id === 2) {
        params = {
            page: 1,
            limit: 8,
            isSeries: true,
            'rating.imdb': '7-10'
        }
    } else {
        params = {
            page: 1,
            limit: 8,
            isSeries: false,
            'rating.imdb': '8-10',
            'premiere.country': '!Россия',
            'audience.count': '10000-6666666'
        }
    }
    return params
}