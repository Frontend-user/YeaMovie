import React from 'react';
import HeaderBlock from "../../components/ui/HeaderBlock/HeaderBlock.jsx";
import './MainPage.scss'
import PosterFilm from "../../components/ui/PosterFilm/PosterFilm.jsx";
import posterImage from '../../assets/images/promo-image.png'

const {title, filmName, description, buttonText} = {
    title: 'УЖЕ В КИНО',
    filmName: 'Чужой: Ромул (2024)',
    description: 'Исследуя заброшенную космическую станцию,' +
        ' группа колонизаторов сталкивается с самой ужасающей формой жизни во Вселенной.',
    buttonText: 'Смотреть'
}
const MainPage = () => {
    return (
        <div className="main-page">
            <HeaderBlock/>
            <div className="main-page__wrapper">

            <div className="main-page__poster-wrapper">
                <PosterFilm
                    title={title}
                    name={filmName}
                    description={description}
                    buttonText={buttonText}
                    image={posterImage}
                />
            </div>


            </div>

        </div>
    );
};

export default MainPage;