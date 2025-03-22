import './FilmList.scss'
import FilmCard from "../FilmCard/FilmCard.jsx";

const FilmList = ({list}) => {
    return ( 
        <div className="film-list">
            {list.map(film => (
                <FilmCard key={film.id} film={film}/>
            ))}
        </div>
    );
};

export default FilmList;
