import React, {useContext, useEffect, useMemo, useState} from 'react';
import HeaderBlock from "../../components/ui/HeaderBlock/HeaderBlock.jsx";
import ImagesGrid from "../../components/AboutPage/ImagesGrid/ImagesGrid.jsx";
import FilmDetails from "../../components/AboutPage/FilmDetails/FilmDetails.jsx";
import './AboutPage.scss'
import UiButton from "../../components/ui/UiButton/UiButton.jsx";
import FooterBlock from "../../components/ui/FooterBlock/FooterBlock.jsx";
import {RouteContext} from "../../context/RoutesProvider.jsx";
import {filmsApi} from "../../api/filmsApi.js";
import UiLoading from "../../components/ui/UILoading/UiLoading.jsx";

const AboutPage = ({filmId}) => {
    const {changeRoute} = useContext(RouteContext)
    const [isLoading, setIsLoading] = useState(true)
    const [film, setFilm] = useState({})
    useEffect(() => {
        const getFilm = async () => {
            const [data, error, isLoading] = await filmsApi.getFilmById(filmId)
            setFilm(data)
            setIsLoading(isLoading)
        }
        getFilm()
    }, [filmId]);
    const formatGenre = useMemo(() => {
        if (isLoading) return
        if (!film.genres) return ''
        let result = ''
        film.genres.forEach((item, idx) => {
            result += item.name
            if (!(idx + 1 >= film.genres.length)) {
                result += ', '
            }
        })
        return result
    }, [film])
    return (
        <div className="about-page">
            <HeaderBlock/>
            <div className="about-page__wrapper">
                <div className="about-page__routes">
                    <UiButton onClick={() => changeRoute('/')} type="arrow-left" text="Главная"/>
                    <UiButton onClick={() => changeRoute('/')} type="arrow-left" text="Назад"/>
                </div>
                {isLoading ?
                    (<UiLoading/>)
                    : (<FilmDetails
                            image={film.poster.url}
                            name={film.name}
                            ratingKp={film.rating.kp}
                            ratingImdb={film.rating.imdb}
                            description={film.description}
                            genre={formatGenre}
                            country={film.countries[0].name}
                            year={film.year}
                            watchLinks={film?.watchability?.items}
                            film={film}/>
                    )
                }

                <div className="about-page__button-wrap">
                    <UiButton type="value" text="Кадры из фильма"/>
                </div>
                <div className="about-page__arrow-button-wrap">
                    <UiButton type="arrow-right" text="Смотреть все"/>
                </div>
                <ImagesGrid list={film?.persons?.length ? film.persons.map(item => (item.photo)).slice(0, 6) : []}/>
            </div>
            <FooterBlock/>

        </div>
    );
};

export default AboutPage;