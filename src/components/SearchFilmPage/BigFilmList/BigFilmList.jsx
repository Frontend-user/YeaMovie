import React, {useMemo} from 'react';
import './BigFilmList.scss'
import BigFilmCard from "../../ui/BigFilmCard/BigFilmCard.jsx";

const BigFilmList = ({list}) => {
    const formatGenre = (genres) => {
        let result = ''
        genres.forEach((item, idx) => {
            result += item.name
            if (!(idx + 1 >= genres.length)) {
                result += ', '
            }
        })
        return result
    }
    return (
        <div className="big-film-list">
            <div className="big-film-list__cards-wrap">
                {list.map((film) => (
                    <BigFilmCard
                        id={film.id}
                        key={film.id}
                        image={film.poster.url}
                        name={film.name}
                        ratingKp={film.rating.kp}
                        ratingImdb={film.rating.imdb}
                        description={film.description}
                        genre={formatGenre(film.genres)}
                        country={film.countries[0].name}
                        year={film.year}
                        film={film}
                    />
                ))}

            </div>
        </div>
    );
};

export default BigFilmList;