import './BigFilmCard.scss'
import CharsList from "../CharsList/CharsList.jsx";
import UiButton from "../UiButton/UiButton.jsx";
import {useState} from "react";

const BigFilmCard = ({
                         image,
                         name,
                         ratingKp,
                         ratingImdb,
                         description,
                         genre,
                         country,
                         year,
                         film
                     }) => {
    const [chars,setChars] = useState([
        {'Жанр:': genre},
        {'Страна:': country},
        {'Год:': year},
        // {'Жанр:': genre},
        // {'Страна:': country},
    ])
    return (
        <div className="big-film-card">
            <div className="big-film-card__inner">

            <div className="big-film-card__image-wrap">
                <img className="big-film-card__image" src={image} alt=""/>
            </div>
            <div className="big-film-card__info">
                <div className="big-film-card__header">
                    <div className="big-film-card__name">{name}</div>
                    <div className="big-film-card__ratings-wrap">
                        <div className="big-film-card__rating-kp">Кинопоиск {ratingKp}/10</div>
                        <div className="big-film-card__rating-imdb">IMDB {ratingImdb}/10</div>
                    </div>
                </div>
                <div className="big-film-card__description">{description}</div>
                <div className="big-film-card__chars-wrap">
                <CharsList list={chars}/>
                </div>
                <div className="big-film-card__buttons-wrap">
                    <UiButton text="Смотреть"/>
                    <UiButton type="second" text="В избранное"/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BigFilmCard;
