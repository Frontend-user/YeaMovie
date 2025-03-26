import React, {useCallback} from 'react';
import HeaderBlock from "../../components/ui/HeaderBlock/HeaderBlock.jsx";
import './MainPage.scss'
import PosterFilm from "../../components/ui/PosterFilm/PosterFilm.jsx";
import posterImage from '../../assets/images/promo-image.png'
import CategorySelect from "../../components/ui/CategorySelect/CategorySelect.jsx";
import UiButton from "../../components/ui/UiButton/UiButton.jsx";
import FooterBlock from "../../components/ui/FooterBlock/FooterBlock.jsx";
import SelectGroup from "../../components/MainPage/SelectGroup/SelectGroup.jsx";
import {useSelectData} from "../../hooks/useSelectData.js";
import FilmsSelect from "../../components/MainPage/FilmsSelect/FilmsSelect.jsx";
import FilmsTabs from "../../components/MainPage/FilmsTabs/FilmsTabs.jsx";

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

        const sortToggle = () => {
            setFilters(pr => ({...pr, sortType: pr.sortType === 1 ? -1 : 1}));
        }
        const changeFilter = (updatedField) => {
            setFilters(pr => ({...pr, ...updatedField}));
        }

        const prevPage = useCallback(() => {
            setFilters(pr => ({...pr, page: pr.page - 1}));
        }, [])
        const nextPage = useCallback(() => {
            setFilters(pr => ({...pr, page: pr.page + 1}));
        }, [])

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
                            <FilmsTabs filmCategories={filmCategories}/>
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
                            <FilmsSelect filters={filters} nextPage={nextPage} prevPage={prevPage}/>
                        </div>
                    </div>
                </div>
                <FooterBlock/>
            </div>
        );
    }
;

export default MainPage;