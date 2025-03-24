import {useState} from "react";

export function useSelectData() {
    const [filmCategories, setFilmCategories] = useState([
        {
            id: 1,
            name: 'Популярные фильмы',
            selected: true
        },
        {
            id: 2,
            name: 'Популярные сериалы',
            selected: false
        },
        {
            id: 3,
            name: 'Подборка фильмов',
            selected: false
        }
    ])
    const [genres, setGenres] = useState([
        {
            id: 1,
            name: 'драма',
            selected: false
        },
        {
            id: 2,
            name: 'комедия',
            selected: true
        },
        {
            id: 3,
            name: 'мелодрама',
            selected: false
        }, {
            id: 4,
            name: 'ужасы',
            selected: false
        },

    ])
    const [countries, setCountries] = useState([
        {
            id: 1,
            name: 'Россия',
            selected: true
        },
        {
            id: 2,
            name: 'США',
            selected: false
        },
        {
            id: 3,
            name: 'Франция',
            selected: false
        }, {
            id: 4,
            name: 'Великобритания',
            selected: false
        },

    ])
    const [years, setYears] = useState([
        {
            id: 1,
            name: 2020,
            selected: false
        },
        {
            id: 2,
            name: 2021,
            selected: false
        },
        {
            id: 3,
            name: 2022,
            selected: false
        },
        {
            id: 4,
            name: 2023,
            selected: false
        },
        {
            id: 5,
            name: 2024,
            selected: true
        },
        {
            id: 6,
            name: 2025,
            selected: false
        },

    ])
    const [rating, setRating] = useState([
        {
            id: 1,
            name: 6,
            selected: false
        },
        {
            id: 2,
            name: 7,
            selected: true
        },
        {
            id: 3,
            name: 8,
            selected: false
        }, {
            id: 4,
            name: 9,
            selected: false
        },

    ])
    const [filmTypes, setFilmTypes] = useState([
        {
            id: 1,
            name: 'Фильмы',
            selected: true
        },
        {
            id: 2,
            name: 'Сериалы',
            selected: false
        },
        {
            id: 3,
            name: 'Мультики',
            selected: false
        },
        {
            id: 4,
            name: 'Аниме',
            selected: false
        },

    ])

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

    const [testItem, setTestItem] = useState({
        'first.sfdsdf': '1',
        'sec.fsdfdssdf': '2',
    })
    const [filters, setFilters] = useState({
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
        testItem, setTestItem
    }
}