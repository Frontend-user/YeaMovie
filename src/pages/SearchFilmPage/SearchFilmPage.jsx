import React, { useContext, useEffect, useState} from 'react';
import './SearchFilmPage.scss'
import HeaderBlock from "../../components/ui/HeaderBlock/HeaderBlock.jsx";
import BigFilmList from "../../components/SearchFilmPage/BigFilmList/BigFilmList.jsx";
import FooterBlock from "../../components/ui/FooterBlock/FooterBlock.jsx";
import UiButton from "../../components/ui/UiButton/UiButton.jsx";
import {filmsApi} from "../../api/filmsApi.js";
import {RouteContext} from "../../context/RoutesProvider.jsx";
import {useDebouncedCallback,} from "../../helpers/helpers.js";

import UiLoading from "../../components/ui/UILoading/UiLoading.jsx";
import NoResult from "../../components/ui/NoResult/NoResult.jsx";

const SearchFilmPage = () => {
    const {searchName} = useContext(RouteContext)
    const [debouncedSearchName, setDebouncedSearchName] = useState('')
    const {changeRoute} = useContext(RouteContext)
    const [films, error, isLoading] = filmsApi.getFilmsBySearchName(searchName, debouncedSearchName)
    const toggle = useDebouncedCallback(() => setDebouncedSearchName(searchName), 1000)

    useEffect(() => {
        toggle()
    }, [toggle]);

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
                ) : !isLoading && !films.length || error ? <NoResult/> : (
                    <BigFilmList list={films}/>
                )}
            </div>
            <FooterBlock/>
        </div>
    );
};

export default SearchFilmPage;