import './FilmsTabs.scss'
import UiLoading from "../../ui/UILoading/UiLoading.jsx";
import FilmList from "../../ui/FilmList/FilmList.jsx";
import React, {memo,  useMemo} from "react";
import {filmsApi} from "../../../api/filmsApi.js";

const FilmsTabs = memo(({filmCategories}) => {
    console.log('FilmsTabs')
    const findSelectedCategoryId = useMemo(() => {
        return filmCategories.findIndex((item) => item.selected) + 1
    }, [filmCategories])
    const [filmsList, error, filmsListLoading] =  filmsApi.getTabsFilms(
        findSelectedCategoryId
    )

    return (
        <div>
            {
                filmsListLoading ?
                    <UiLoading/> :
                    <FilmList list={filmsList}/>
            }
        </div>
    );
});

export default FilmsTabs;
