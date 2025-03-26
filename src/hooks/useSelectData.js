import {useState} from "react";
import {COUNTRIES, FILM_CATEGORIES, FILM_RATINGS, FILM_TYPES, FILM_YEARS, GENRES} from "../helpers/constants.js";

export function useSelectData() {
    const [filmCategories, setFilmCategories] = useState(FILM_CATEGORIES)
    const [genres, setGenres] = useState(GENRES)
    const [countries, setCountries] = useState(COUNTRIES)
    const [years, setYears] = useState(FILM_YEARS)
    const [rating, setRating] = useState(FILM_RATINGS)
    const [filmTypes, setFilmTypes] = useState(FILM_TYPES)

    function selectItem(id, selectList, setSelectList) {
        let selectedName = ''
        const list = [...selectList]
        list.forEach((_) => {
            if (_.id === id) {
                selectedName = _.name
                _.selected = true
            } else {
                _.selected = false

            }
        })

        setSelectList(list)
        return selectedName
    }


    const [filters, setFilters] = useState({
        page: 1,
        limit: 8,
        'genres.name': 'комедия',
        'countries.name': 'Россия',
        'year': 2024,
        'rating.imdb': '7-10',
        typeNumber: 1,
        sortField: 'audience.count',
        sortType: 1
    })

    return {
        genres, setGenres,
        countries, setCountries,
        years, setYears,
        rating, setRating,
        filmTypes, setFilmTypes,
        filmCategories, setFilmCategories,
        filters, setFilters,
        selectItem,
    }
}