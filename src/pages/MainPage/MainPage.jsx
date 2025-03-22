import React, {useState} from 'react';
import HeaderBlock from "../../components/ui/HeaderBlock/HeaderBlock.jsx";
import './MainPage.scss'
import PosterFilm from "../../components/ui/PosterFilm/PosterFilm.jsx";
import posterImage from '../../assets/images/promo-image.png'
import CategorySelect from "../../components/ui/CategorySelect/CategorySelect.jsx";
import UiButton from "../../components/ui/UiButton/UiButton.jsx";
import FilmList from "../../components/ui/FilmList/FilmList.jsx";
import filmCardImage from '../../assets/images/film-card-img.png'
import FooterBlock from "../../components/ui/FooterBlock/FooterBlock.jsx";
import UiSelect from "../../components/ui/UiSelect/UiSelect.jsx";
import UiSort from "../../components/ui/UiSort/UiSort.jsx";

const {title, filmName, description, buttonText} = {
    title: 'УЖЕ В КИНО',
    filmName: 'Чужой: Ромул (2024)',
    description: 'Исследуя заброшенную космическую станцию,' +
        ' группа колонизаторов сталкивается с самой ужасающей формой жизни во Вселенной.',
    buttonText: 'Смотреть'
}

const filmsList = [
    {
        id: 1,
        name: 'Побег из Шоушенка',
        year: 1994,
        grade: 9,
        image: filmCardImage
    },
    {
        id: 2,
        name: 'Побег из Шоушенка',
        year: 1994,
        grade: 9,
        image: filmCardImage
    },
    {
        id: 3,
        name: 'Побег из Шоушенка',
        year: 1994,
        grade: 9,
        image: filmCardImage
    },
    {
        id: 4,
        name: 'Побег из Шоушенка',
        year: 1994,
        grade: 9,
        image: filmCardImage
    },
    {
        id: 5,
        name: 'Побег из Шоушенка',
        year: 1994,
        grade: 9,
        image: filmCardImage
    },
    {
        id: 6,
        name: 'Побег из Шоушенка',
        year: 1994,
        grade: 9,
        image: filmCardImage
    },
    {
        id: 7,
        name: 'Побег из Шоушенка',
        year: 1994,
        grade: 9,
        image: filmCardImage
    },
    {
        id: 8,
        name: 'Побег из Шоушенка',
        year: 1994,
        grade: 9,
        image: filmCardImage
    },
]

const MainPage = () => {
    const [filmCategories, setFilmCategories] = useState([
        {
            id: 1,
            name: 'Популярные фильмы',
            selected: true
        },
        {
            id: 2,
            name: 'Популярные сериалы',
            selected: false
        },
        {
            id: 3,
            name: 'Подборка фильмов',
            selected: false
        }
    ])
    const [selectList, setSelectList] = useState([
        {
            id: 1,
            selected: true,
            name: 'Ужасы'
        },
        {
            id: 2,
            selected: false,
            name: 'Ужасы2'
        },
        {
            id: 3,
            selected: false,
            name: 'Ужасы3'
        },
    ])
    const selectItem = (id, selectList, setSelectList) => {
        const list = [...selectList]
        list.forEach((_) => {
            if (_.id === id) {
                _.selected = true
            } else {
                _.selected = false

            }
        })

        setSelectList(list)
    }
    // const handleSelect =  (id,)=>{
    //     selectItem(id,selectList,setSelectList)
    // }
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

                <div className="main-page__film-list-wrapper">
                    <div className="main-page__category-select-wrap">
                        <CategorySelect select={(id) => selectItem(id, filmCategories, setFilmCategories)}
                                        list={filmCategories}/>
                    </div>
                    <div className="main-page__ui-button-arrow-right-wrap">
                        <UiButton text='Смотреть все' type="arrow-right"/>
                    </div>
                    <div className="main-page__film-list-wrapper">
                        <FilmList list={filmsList}/>
                    </div>
                </div>

                <div className="main-page__film-category-wrapper">
                    <div className="main-page__category-filter-wrapper">
                        <CategorySelect list={[{id: 1, name: 'Фильмы по категориям'}]}/>

                    </div>
                    <div className="main-page__selects-wrapper">

                        <UiSelect className="main-page__ui-select"
                                  select={(id) => selectItem(id, selectList, setSelectList)} list={selectList}/>
                        {/*<UiSelect className="main-page__ui-select" select={selectItem} list={selectList}/>*/}
                        {/*<UiSelect className="main-page__ui-select" select={selectItem} list={selectList}/>*/}
                        {/*<UiSelect className="main-page__ui-select" select={selectItem} list={selectList}/>*/}
                        {/*<UiSelect className="main-page__ui-select" select={selectItem} list={selectList}/>*/}
                        <UiSort className="main-page__sort-wrap "/>
                    </div>
                    <div className="main-page__ui-button-arrow-right-wrap">
                        <UiButton text='Смотреть все' type="arrow-right"/>
                    </div>
                    <div className="main-page__film-list-wrapper">
                        <FilmList list={filmsList.slice(0, 4)}/>
                    </div>
                </div>
            </div>
            <FooterBlock/>
        </div>
    );
};

export default MainPage;