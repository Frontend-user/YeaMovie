import {useFetch} from "../hooks/useFetch.js";
import {API_PATHS} from "../helpers/constants.js";
import {useEffect} from "react";

export const filmsApi = {
    async getPopularFilms() {
        const [data, error, isLoading] = await useFetch(
            API_PATHS.MOVIE,
            {
                page: 1,
                limit: 8,
                isSeries: false,
                'audience.count': '100000-6666666'
            })
        return [data, error, isLoading]
    },
    async getPopularSerials() {
        const [data, error, isLoading] = await useFetch(
            API_PATHS.MOVIE,
            {
                page: 1,
                limit: 8,
                // typeNumber: 2,
                isSeries: true,
                'rating.imdb': '7-10'
                // 'audience.count': '100-6666666'
            })
        return [data, error, isLoading]
    },
    async getRandomFilms() {
        const [data, error, isLoading] = await useFetch(
            API_PATHS.MOVIE,
            {
                page: 1,
                limit: 8,
                isSeries: false,
                'rating.imdb': '8-10',
                'premiere.country': '!Россия',
                // "fees.world":'10000-6666666',
                // 'releaseYears.start': '2020-2025',
                'audience.count': '10000-6666666'
            })
        return [data, error, isLoading]

    },
    async getFilmsByFilters(filters) {
        const [data, error, isLoading,paginateInfo] = await useFetch(
            API_PATHS.MOVIE,
            {
                page: 1,
                limit: 4,
                ...filters
            }
        )
        return [data, error, isLoading,paginateInfo]
    },
    async getFilmsBySearchName(filters) {
        const [data, error, isLoading] = await useFetch(
            API_PATHS.MOVIE_SEARCH,
            {
                ...filters,
            }
        )
        return [data, error, isLoading]
    },
    async getFilmById(id) {
        const url = `${API_PATHS.MOVIE}/${id}`
        const [data, error, isLoading] =
            await useFetch(url,{},false)
        return [data, error, isLoading]
    }
}