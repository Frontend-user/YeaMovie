import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import './SearchFilmPage.scss'
import HeaderBlock from "../../components/ui/HeaderBlock/HeaderBlock.jsx";
import BigFilmList from "../../components/SearchFilmPage/BigFilmList/BigFilmList.jsx";
import FooterBlock from "../../components/ui/FooterBlock/FooterBlock.jsx";
import UiButton from "../../components/ui/UiButton/UiButton.jsx";
import {filmsApi} from "../../api/filmsApi.js";
import {RouteContext} from "../../context/RoutesProvider.jsx";
import {debounce} from "../../helpers/helpers.js";
import UiLoading from "../../components/ui/UILoading/UiLoading.jsx";
import NoResult from "../../components/ui/NoResult/NoResult.jsx";

const SearchFilmPage = () => {
    const {searchName} = useContext(RouteContext)
    const [films, setFilms] = useState([])
    const [isLoading, setLoading] = useState(true)
    const {changeRoute} = useContext(RouteContext)
    const getFilmsBySearchName = useCallback(async (searchName) => {
        setLoading(true)
        const [data, error, isLoading] = await filmsApi.getFilmsBySearchName({
            page: 1,
            limit: 6,
            query: searchName,
        })
        setFilms(data)
        setLoading(isLoading)
    }, [])

    const debouncedGetFilmsBySearchName = useMemo(() =>
        debounce(getFilmsBySearchName, 1000), [getFilmsBySearchName])

    useEffect(() => {
        debouncedGetFilmsBySearchName(searchName)
    }, [searchName]);


    return (
        <div className="search-film-page">
            <HeaderBlock/>
            <div className="search-film-page__wrapper">
                <div className="search-film-page__routes">
                    <UiButton onClick={() => changeRoute('/')} type="arrow-left" text="Назад"/>
                </div>
                <div className="search-film-page__title">Результаты поиска</div>
                {isLoading ? (
                    <UiLoading/>
                ) : !isLoading && !films.length ? <NoResult/> : (
                    <BigFilmList list={films}/>
                )}
            </div>
            <FooterBlock/>
        </div>
    );
};

export default SearchFilmPage;