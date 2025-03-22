import './FilmCard.scss'

const FilmCard = ({film}) => {
    return (<div className="film-card">
        <div className="film-card__inner">
            <img
                src={film.image}
                alt=""
                className="film-card__image"/>
            <div className="film-card__name">{film.name}</div>
            <div className="film-card__footer">
                <div className="film-card__year">{`${film.year}г.`}</div>
                <div className="film-card__grade">{`${film.grade}/10`}</div>

            </div>
        </div>
    </div>);
};

export default FilmCard;
