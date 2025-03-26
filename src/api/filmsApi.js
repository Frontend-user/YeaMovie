import {useFetch} from "../hooks/useFetch.js";
import {API_PATHS} from "../helpers/constants.js";
import {defineTabsFilmsParams} from "../helpers/helpers.js";

export const filmsApi = {

    getTabsFilms(findSelectedCategoryId) {
        const params = defineTabsFilmsParams(findSelectedCategoryId)
        const [filmsList, error, filmsListLoading] = useFetch(
            API_PATHS.MOVIE, params, true, [findSelectedCategoryId])
        return [filmsList, error, filmsListLoading]
    },
     getFilmsByFilters(filters) {
        const [filtersFilmList,
            error,
            filtersFilmListLoading
            , paginateInfo] = useFetch(API_PATHS.MOVIE,
            filters, true, [filters])
        return [filtersFilmList,
            error,
            filtersFilmListLoading
            , paginateInfo]
    },
     getFilmsBySearchName(searchName,debouncedSearchName) {
        const [data, error, isLoading] =  useFetch(
            API_PATHS.MOVIE_SEARCH,
            {
                page: 1,
                limit: 6,
                query: searchName,
            },
            true, [debouncedSearchName])
        return [data, error, isLoading]
    },
     getFilmById(id) {
        const url = `${API_PATHS.MOVIE}/${id}`
        const [data, error, isLoading] =
             useFetch(url, {}, false,[id])
        return [data, error, isLoading]
    }
}