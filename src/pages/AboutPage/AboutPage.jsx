import React, {useMemo, useState} from 'react';
import HeaderBlock from "../../components/ui/HeaderBlock/HeaderBlock.jsx";
import ImagesGrid from "../../components/AboutPage/ImagesGrid/ImagesGrid.jsx";
import FilmDetails from "../../components/AboutPage/FilmDetails/FilmDetails.jsx";
import './AboutPage.scss'
import UiButton from "../../components/ui/UiButton/UiButton.jsx";
import FooterBlock from "../../components/ui/FooterBlock/FooterBlock.jsx";

const AboutPage = () => {

    const film = {
        "id": 6706155,
        "name": "Руки Вверх!",
        "alternativeName": null,
        "enName": null,
        "type": "movie",
        "typeNumber": 1,
        "year": 2024,
        "description": "Из провинциального мальчишки, мечтающего впечатлить девушку робкими песнями о любви, Сергей Жуков становится одним из самых востребованных артистов страны и голосом целого поколения.",
        "shortDescription": "Провинциальный музыкант-самоучка становится кумиром поколения. Байопик о легендарной поп-группе",
        "status": null,
        "rating": {
            "kp": 7.51,
            "imdb": 5.5,
            "filmCritics": 0,
            "russianFilmCritics": 0,
            "await": null
        },
        "votes": {
            "kp": 143707,
            "imdb": 239,
            "filmCritics": 0,
            "russianFilmCritics": 0,
            "await": 0
        },
        "movieLength": 100,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": null,
        "ageRating": 18,
        "poster": {
            "url": "https://image.openmoviedb.com/kinopoisk-images/10671298/e20865f8-159b-4e95-9bb7-1997884321f1/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10671298/e20865f8-159b-4e95-9bb7-1997884321f1/x1000"
        },
        "backdrop": {
            "url": "https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a00000193b551b063a791d538ae4b178728/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a00000193b551b063a791d538ae4b178728/x1000"
        },
        "genres": [
            {
                "name": "музыка"
            },
            {
                "name": "биография"
            }
        ],
        "countries": [
            {
                "name": "Россия"
            }
        ],
        "top10": null,
        "top250": null,
        "isSeries": false,
        "ticketsOnSale": false
    }

    const formatGenre = useMemo(() => {
        let result = ''
        film.genres.forEach((item, idx) => {
            result += item.name
            if (!(idx + 1 >= film.genres.length)) {
                result += ', '
            }
        })
        return result
    }, [])
    return (
        <div className="about-page">
            <HeaderBlock/>
            <div className="about-page__wrapper">
                <div className="about-page__routes">
                    <UiButton type="arrow-left" text="Главная"/>
                    <UiButton type="arrow-left" text="Назад"/>
                </div>
                <FilmDetails
                    image={film.poster.url}
                    name={film.name}
                    ratingKp={film.rating.kp}
                    ratingImdb={film.rating.imdb}
                    description={film.description}
                    genre={formatGenre}
                    country={film.countries[0].name}
                    year={film.year}
                    film={film}/>

                <div className="about-page__button-wrap">
                    <UiButton type="value" text="Кадры из фильма"/>
                </div>
                <div className="about-page__arrow-button-wrap">
                    <UiButton type="arrow-right" text="Смотреть все"/>
                </div>
                <ImagesGrid list={[film.poster.url, film.poster.url, film.poster.url,
                    film.poster.url, film.poster.url, film.poster.url]}/>
            </div>
            <FooterBlock/>

        </div>
    );
};

export default AboutPage;