import './FilmCard.scss'
import {useContext} from "react";
import {RouteContext} from "../../../context/RoutesProvider.jsx";

const FilmCard = ({film}) => {
    const {changeRoute} = useContext(RouteContext)
    const handleChangeRoute = () => {
        changeRoute(`/about-page/${film.id}`)
    }
    return (
        <div className="film-card" onClick={handleChangeRoute}>
            <div className="film-card__inner">
                {film?.poster?.url || film?.poster?.previewUrl ? <img
                        src={film?.poster?.url || film?.poster?.previewUrl}
                        alt=""
                        className="film-card__image"/>
                    : <div className="film-card__image"></div>}
                <div className="film-card__name">{film.name || film.alternativeName}</div>
                <div className="film-card__footer">
                    <div className="film-card__year">{film.year && `${film.year} г.` || 'Неизвестно'}</div>
                    {film.rating.imdb ?
                        <div className="film-card__grade">{film.rating.imdb && `${film.rating.imdb}/10` || 'Нету'}</div>
                        : <div></div>}
                </div>
            </div>
        </div>);
};

export default FilmCard;
