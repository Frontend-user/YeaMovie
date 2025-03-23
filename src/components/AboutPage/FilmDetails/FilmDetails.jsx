import './FilmDetails.scss'
import UiButton from "../../ui/UiButton/UiButton.jsx";
import CharsList from "../../ui/CharsList/CharsList.jsx";
import {useEffect, useLayoutEffect, useState} from "react";
import WatchLinks from "../WatchLinks/WatchLinks.jsx";

const FilmDetails =
    ({
         image,
         name,
         ratingKp,
         ratingImdb,
         description,
         genre,
         country,
         year, watchLinks,
         film
     }) => {
        const [chars, setChars] = useState([
            {'Жанр:': genre},
            {'Страна:': country},
            {'Год:': year},
            // {'Жанр:': genre},
            // {'Страна:': country},
        ])

        return (
            <div className="film-details">
                <div className="film-details__inner">
                    <div className="film-details__left">

                        <div className="film-details__img-wrap">
                            <img src={image} alt="" className="film-details__image"/>
                        </div>
                        {watchLinks && watchLinks.length ?
                            (<WatchLinks list={watchLinks}/>)
                            : ''
                        }

                    </div>

                    <div className="film-details__right">
                        <div className="film-details__header">
                            <div className={`film-details__name 
                            ${name.length > 10 ? 'film-details__name_small' : 'film-details__name'}`}>{name}</div>
                            <div>
                                <UiButton className="film-details__button" text="В избранное"/>

                            </div>
                            <div className="film-details__rating-wrap">
                                <div className="film-details__rating-kp">Кинопоиск {`${ratingKp}/10`}</div>
                                <div className="film-details__rating-imdb">IMDB {`${ratingImdb}/10`}</div>
                            </div>
                        </div>
                        <div className="film-details__description">
                            {description}
                        </div>

                        <div className="film-details__info">
                            <div className="film-details__title">О фильме</div>
                            <CharsList list={chars}/>
                            <CharsList list={chars}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default FilmDetails;
