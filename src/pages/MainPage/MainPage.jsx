import React, {useEffect, useMemo, useState} from 'react';
import HeaderBlock from "../../components/ui/HeaderBlock/HeaderBlock.jsx";
import './MainPage.scss'
import PosterFilm from "../../components/ui/PosterFilm/PosterFilm.jsx";
import posterImage from '../../assets/images/promo-image.png'
import CategorySelect from "../../components/ui/CategorySelect/CategorySelect.jsx";
import UiButton from "../../components/ui/UiButton/UiButton.jsx";
import FilmList from "../../components/ui/FilmList/FilmList.jsx";
import filmCardImage from '../../assets/images/film-card-img.png'
import FooterBlock from "../../components/ui/FooterBlock/FooterBlock.jsx";
import UiSelect from "../../components/ui/UiSelect/UiSelect.jsx";
import UiSort from "../../components/ui/UiSort/UiSort.jsx";
import {filmsApi} from "../../api/filmsApi.js";
import {useFetch} from "../../hooks/useFetch.js";
import {API_PATHS} from "../../helpers/constants.js";
import SelectGroup from "../../components/MainPage/SelectGroup/SelectGroup.jsx";
import {useSelectData} from "../../hooks/useSelectData.js";

const {title, filmName, description, buttonText} = {
    title: 'УЖЕ В КИНО',
    filmName: 'Чужой: Ромул (2024)',
    description: 'Исследуя заброшенную космическую станцию,' +
        ' группа колонизаторов сталкивается с самой ужасающей формой жизни во Вселенной.',
    buttonText: 'Смотреть'
}


const MainPage = () => {
    const {
        genres, setGenres,
        countries, setCountries,
        years, setYears,
        rating, setRating,
        filmTypes, setFilmTypes,
        filmCategories, setFilmCategories,
        filters, setFilters,
        selectItem,
        testItem, setTestItem
    }= useSelectData();
        const [filmsList, setFilmsList] = useState([])
        const [filmsListLoading, setFilmsListLoading] = useState(true)
        const [filtersFilmList, setFiltersFilmList] = useState([])

        useEffect(() => {
            return

            async function getData() {
                setFilmsListLoading(true)
                const findSelectedCategoryId = filmCategories.findIndex((item) => item.selected) + 1
                if (findSelectedCategoryId === 1) {
                    const [data, error, isLoading] = await filmsApi.getPopularFilms()
                    setFilmsList(data)
                    setFilmsListLoading(isLoading)
                } else if (findSelectedCategoryId === 2) {
                    const [data, error, isLoading] = await filmsApi.getPopularSerials()
                    setFilmsList(data)
                    setFilmsListLoading(isLoading)
                } else if (findSelectedCategoryId === 3) {
                    const [data, error, isLoading] = await filmsApi.getRandomFilms()
                    setFilmsList(data)
                    setFilmsListLoading(isLoading)
                }
            }

            getData()
        }, []);
        // const filtersString = useMemo(() => JSON.stringify(filters), [filters]);
        // const {['genres.name']: genre, ['countries.name']: country, year, ['rating.imdb']: rating, isSeries} = filters;

        useEffect(() => {
            console.log('MAINPAGE',filters)
        }, [filters])
        // }, [genre,country,year,rating,isSeries])
        // const get = async () => {
        //     console.log(filters, 'filters')
        //     setFilmsListLoading(true)
        //     const [data, error, isLoading] = await filmsApi.getFilmsByFilters(filters)
        //     console.log(data, 'DATA')
        //     console.log(error, 'error')
        //     console.log(isLoading, 'isLoading')
        //     setFilmsListLoading(isLoading)
        //     setFiltersFilmList(data)
        // }
        // get()
        return (
            <div className="main-page">
                <button onClick={(e) => setFilters(pr => ({
                    ...pr,
                    'first.sfdsdf': `${Math.random() * 10}fsd`
                }))}>BYYYYYYYYYYYYYYYY
                </button>
                <HeaderBlock/>
                <div className="main-page__wrapper">

                    <div className="main-page__poster-wrapper">
                        <PosterFilm
                            title={title}
                            name={filmName}
                            description={description}
                            buttonText={buttonText}
                            image={posterImage}
                        />
                    </div>

                    <div className="main-page__film-list-wrapper">
                        <div className="main-page__category-select-wrap">
                            <CategorySelect select={(id) => selectItem(id, filmCategories, setFilmCategories)}
                                            list={filmCategories}/>
                        </div>
                        <div className="main-page__ui-button-arrow-right-wrap">
                            <UiButton text='Смотреть все' type="arrow-right"/>
                        </div>
                        <div className="main-page__film-list-wrapper">
                            {
                                filmsListLoading ?
                                    <div>Загрузка фильмов...</div> :
                                    <FilmList list={filmsList}/>
                            }
                        </div>
                    </div>

                    <div className="main-page__film-category-wrapper">
                        <div className="main-page__category-filter-wrapper">
                            <CategorySelect list={[{id: 1, name: 'Фильмы по категориям'}]}/>

                        </div>
                        <div className="main-page__selects-wrapper">
                            <SelectGroup/>
                        </div>
                        <div className="main-page__ui-button-arrow-right-wrap">
                            <UiButton text='Смотреть все' type="arrow-right"/>
                        </div>
                        {filters["genres.name"]} <br/>
                        {filters.year}<br/>
                        {filters["rating.imdb"]}
                        <div className="main-page__film-list-wrapper">
                            {filmsListLoading ?
                                <div>Загрузка...</div> :
                                <FilmList list={filtersFilmList}/>
                            }
                        </div>
                    </div>
                </div>
                <FooterBlock/>
            </div>
        );
    }
;

export default MainPage;