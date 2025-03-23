import React, {useMemo} from 'react';
import './SearchFilmPage.scss'
import HeaderBlock from "../../components/ui/HeaderBlock/HeaderBlock.jsx";
import BigFilmCard from "../../components/ui/BigFilmCard/BigFilmCard.jsx";
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
const SearchFilmPage = () => {
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
        <div className="search-film-page">
            <HeaderBlock/>
            <div className="search-film-page__wrapper">

            <BigFilmCard
                image={film.poster.url}
                name={film.name}
                ratingKp={film.rating.kp}
                ratingImdb={film.rating.imdb}
                description={film.description}
                genre={formatGenre}
                country={film.countries[0].name}
                year={film.year}
                film={film}
            />
            </div>
        </div>
    );
};

export default SearchFilmPage;