import './FilmsSelect.scss'
import UiLoading from "../../ui/UILoading/UiLoading.jsx";
import FilmList from "../../ui/FilmList/FilmList.jsx";
import UiPaginate from "../../ui/UiPaginate/UiPaginate.jsx";
import React, {memo} from "react";
import {filmsApi} from "../../../api/filmsApi.js";

const FilmsSelect = memo(({prevPage, nextPage, filters}) => {
    const [filtersFilmList,
        error,
        filtersFilmListLoading
        ,paginateInfo] = filmsApi.getFilmsByFilters(filters)
    return (
        <div>
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
    );
})

export default FilmsSelect;
