import React, {useEffect, useState} from 'react';
import HeaderBlock from "../../components/ui/HeaderBlock/HeaderBlock.jsx";
import './MainPage.scss'
import PosterFilm from "../../components/ui/PosterFilm/PosterFilm.jsx";
import posterImage from '../../assets/images/promo-image.png'
import CategorySelect from "../../components/ui/CategorySelect/CategorySelect.jsx";
import UiButton from "../../components/ui/UiButton/UiButton.jsx";
import FilmList from "../../components/ui/FilmList/FilmList.jsx";
import FooterBlock from "../../components/ui/FooterBlock/FooterBlock.jsx";
import {filmsApi} from "../../api/filmsApi.js";
import SelectGroup from "../../components/MainPage/SelectGroup/SelectGroup.jsx";
import {useSelectData} from "../../hooks/useSelectData.js";
import UiLoading from "../../components/ui/UILoading/UiLoading.jsx";
import UiPaginate from "../../components/ui/UiPaginate/UiPaginate.jsx";

const {title, filmName, description, buttonText} = {
    title: 'УЖЕ В КИНО',
    filmName: 'Чужой: Ромул (2024)',
    description: 'Исследуя заброшенную космическую станцию,' +
        ' группа колонизаторов сталкивается с самой ужасающей формой жизни во Вселенной.',
    buttonText: 'Смотреть'
}


const MainPage = ({}) => {
        const {
            filmCategories, setFilmCategories,
            filters, setFilters,
            selectItem,
        } = useSelectData();
        const [filmsList, setFilmsList] = useState([])

        const [filmsListLoading, setFilmsListLoading] = useState(true)
        const [filtersFilmListLoading, setFiltersFilmListLoading] = useState(true)
        const [filtersFilmList, setFiltersFilmList] = useState([])
        const [paginateInfo, setPaginateInfo] = useState({
            total: 0,
            limit: 8,
            page: 1,
            pages: 0,
        })
        useEffect(() => {
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

            // getData()
        }, [filmCategories]);

        useEffect(() => {
                const get = async () => {
                    // setFiltersFilmListLoading(true)
                    const [data, error, isLoading, paginateInfo] = await filmsApi.getFilmsByFilters({
                        page: 1,
                        limit: 4,
                        ...filters
                    })
                    setFiltersFilmList(data)
                    setPaginateInfo(paginateInfo)
                    setFiltersFilmListLoading(isLoading)
                }

                get()
            }, [filters]
        )
        const sortToggle = () => {
            setFilters(pr => ({...pr, sortType: pr.sortType === 1 ? -1 : 1}));
        }
        const changeFilter = (updatedField) => {
            setFilters(pr => ({...pr, ...updatedField}));
        }

        function prevPage() {
            setFilters(pr => ({...pr, page: pr.page - 1}));

        }

        function nextPage() {
            console.log('PREVE')
            setFilters(pr => ({...pr, page: pr.page + 1}));

        }

        return (
            <div className="main-page">
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
                                    <UiLoading/> :
                                    <FilmList list={filmsList}/>
                            }
                        </div>
                    </div>

                    <div className="main-page__film-category-wrapper">
                        <div className="main-page__category-filter-wrapper">
                            <UiButton type="value" text="Фильмы по категориям"/>

                        </div>
                        <div className="main-page__selects-wrapper">
                            <SelectGroup sortToggle={sortToggle} filters={filters} changeFilter={(v) => changeFilter(v)}/>
                        </div>
                        <div className="main-page__ui-button-arrow-right-wrap">
                            <UiButton text='Смотреть все' type="arrow-right"/>
                        </div>
                        <div className="main-page__film-list-wrapper">
                            {filtersFilmListLoading ?
                                <>
                                    <UiLoading/>
                                </>
                                :
                                <>
                                    <FilmList list={filtersFilmList}/>
                                    <UiPaginate
                                        onClick
                                        total={paginateInfo.total}
                                        page={paginateInfo.page}
                                        pages={paginateInfo.pages}
                                        limit={paginateInfo.limit}
                                        prevPage={prevPage}
                                        nextPage={nextPage}

                                    />
                                </>
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