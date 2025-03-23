import './PosterFilm.scss'
import UiButton from "../UiButton/UiButton.jsx";
import {useContext} from "react";
import {RouteContext} from "../../../context/RoutesProvider.jsx";

const PosterFilm = ({title, name, description, buttonText, image}) => {

    return (
        <div className="poster-film">
            <div className="poster-film__inner">
                <div className="poster-film__info">
                    <div className="poster-film__title">{title}</div>
                    <div className="poster-film__name">{name}</div>
                    <div className="poster-film__description">{description}</div>
                    <div className="poster-film__button-wrapper">
                        <UiButton text={buttonText}/>
                    </div>
                </div>
                {/*<div></div>*/}
                <img src={image} alt="" className="poster-film__image"/>
            </div>
        </div>
    );
};

export default PosterFilm;
