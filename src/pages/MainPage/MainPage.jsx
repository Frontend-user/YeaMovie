import React, {useEffect, useState} from 'react';
import HeaderBlock from "../../components/ui/HeaderBlock/HeaderBlock.jsx";
import './MainPage.scss'
import PosterFilm from "../../components/ui/PosterFilm/PosterFilm.jsx";
import posterImage from '../../assets/images/promo-image.png'
import CategorySelect from "../../components/ui/CategorySelect/CategorySelect.jsx";
import UiButton from "../../components/ui/UiButton/UiButton.jsx";
import FilmList from "../../components/ui/FilmList/FilmList.jsx";
import FooterBlock from "../../components/ui/FooterBlock/FooterBlock.jsx";
import {filmsApi} from "../../api/filmsApi.js";
import SelectGroup from "../../components/MainPage/SelectGroup/SelectGroup.jsx";
import {useSelectData} from "../../hooks/useSelectData.js";

const {title, filmName, description, buttonText} = {
    title: 'УЖЕ В КИНО',
    filmName: 'Чужой: Ромул (2024)',
    description: 'Исследуя заброшенную космическую станцию,' +
        ' группа колонизаторов сталкивается с самой ужасающей формой жизни во Вселенной.',
    buttonText: 'Смотреть'
}


const MainPage = ({}) => {
        const {
            filmCategories, setFilmCategories,
            filters, setFilters,
            selectItem,
        } = useSelectData();
        const [filmsList, setFilmsList] = useState([])

        const [filmsListLoading, setFilmsListLoading] = useState(true)
        const [filtersFilmList, setFiltersFilmList] = useState([])

        useEffect(() => {
            setFilmsList([
                {
                    "id": 6793358,
                    "name": "Субстанция. Идеал",
                    "alternativeName": "Grafted",
                    "enName": null,
                    "type": "movie",
                    "typeNumber": 1,
                    "year": 2024,
                    "description": "Получив стипендию престижного университета, китаянка Вэй переезжает в Новую Зеландию и селится у тёти, чья дочь учится на том же факультете. Девушка комплексует из-за родимого пятна на лице, поэтому мечтает продолжить работу погибшего отца, пытавшегося создать революционное средство для борьбы с несовершенствами кожи. Это заинтересовывает университетского преподавателя, которому срочно нужен проект для продления финансирования — так Вэй получает доступ в лабораторию. Тем временем отношения с двоюродной сестрой и новыми сокурсницами становятся всё хуже.",
                    "shortDescription": null,
                    "status": null,
                    "rating": {
                        "kp": 5.119,
                        "imdb": 5.6,
                        "filmCritics": 6.6,
                        "russianFilmCritics": 66.6667,
                        "await": null
                    },
                    "votes": {
                        "kp": 2230,
                        "imdb": 1960,
                        "filmCritics": 30,
                        "russianFilmCritics": 3,
                        "await": 0
                    },
                    "movieLength": 96,
                    "totalSeriesLength": null,
                    "seriesLength": null,
                    "ratingMpaa": null,
                    "ageRating": 18,
                    "poster": {
                        "url": "https://image.openmoviedb.com/kinopoisk-images/9784475/0e9cf7c4-ae0d-4990-bec1-65203946f183/orig",
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/9784475/0e9cf7c4-ae0d-4990-bec1-65203946f183/x1000"
                    },
                    "genres": [
                        {
                            "name": "ужасы"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Новая Зеландия"
                        }
                    ],
                    "top10": null,
                    "top250": null,
                    "isSeries": false,
                    "ticketsOnSale": false,
                    "backdrop": {
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a00000194cb8ff6cf01f44e7cf7d25fa5ae/x1000",
                        "url": "https://image.openmoviedb.com/kinopoisk-ott-images/1531675/2a00000194cb8ff6cf01f44e7cf7d25fa5ae/orig"
                    }
                },
                {
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
                },
                {
                    "id": 6591869,
                    "name": "Астрал. Могильный ритуал",
                    "alternativeName": "Sengkolo: Malam satu suro",
                    "enName": null,
                    "type": "movie",
                    "typeNumber": 1,
                    "year": 2024,
                    "description": "Ибрагим — специалист в похоронном деле. Ему часто приходится сталкиваться со странными и пугающими заказами, но он никогда не отказывается от работы. Однажды в деревне при таинственных обстоятельствах умирает богатая семья, а местные жители наперебой твердят, что главы семейства прокляты, ибо занимались черной магией.",
                    "shortDescription": null,
                    "status": null,
                    "rating": {
                        "kp": 0,
                        "imdb": 6.1,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "votes": {
                        "kp": 811,
                        "imdb": 43,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "movieLength": 100,
                    "totalSeriesLength": null,
                    "seriesLength": null,
                    "ratingMpaa": null,
                    "ageRating": 18,
                    "genres": [
                        {
                            "name": "ужасы"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Индонезия"
                        }
                    ],
                    "top10": null,
                    "top250": null,
                    "isSeries": false,
                    "ticketsOnSale": false,
                    "poster": {
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4483445/7462bd4e-0502-4a45-934f-26e62edbc6ce/x1000",
                        "url": "https://image.openmoviedb.com/kinopoisk-images/4483445/7462bd4e-0502-4a45-934f-26e62edbc6ce/orig"
                    },
                    "backdrop": {
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a000001959013e76b87158a78b8784ce367/x1000",
                        "url": "https://image.openmoviedb.com/kinopoisk-ott-images/1672343/2a000001959013e76b87158a78b8784ce367/orig"
                    }
                },
                {
                    "id": 6563026,
                    "name": "Питомец Юрского периода. Возвращение домой",
                    "alternativeName": "The Adventures of Jurassic Pet: Return to the Wild",
                    "enName": null,
                    "type": "movie",
                    "typeNumber": 1,
                    "year": 2024,
                    "description": "Волшебный портал в страну динозавров забрасывает в наш мир динозаврика Спайка, чем спешат воспользоваться корыстные киношники. Они планируют использовать Спайка в своих целях, стремясь получить славу и богатство. Но, к счастью, об этом узнают юные Итан и Мэдисон. Брату с сестрой предстоит вернуть Спайка домой и защитить тайный портал от посягательств злодеев.",
                    "shortDescription": "Брат с сестрой спасают динозавра от корыстных киношников. Семейная комедия о путешествиях во времени",
                    "status": null,
                    "rating": {
                        "kp": 6.928,
                        "imdb": 5.4,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": null
                    },
                    "votes": {
                        "kp": 6114,
                        "imdb": 48,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "movieLength": 90,
                    "totalSeriesLength": null,
                    "seriesLength": null,
                    "ratingMpaa": null,
                    "ageRating": 6,
                    "poster": {
                        "url": "https://image.openmoviedb.com/kinopoisk-images/10900341/0d609827-9bb8-4cda-9c85-057a33722f57/orig",
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10900341/0d609827-9bb8-4cda-9c85-057a33722f57/x1000"
                    },
                    "genres": [
                        {
                            "name": "приключения"
                        },
                        {
                            "name": "семейный"
                        },
                        {
                            "name": "фантастика"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        }
                    ],
                    "top10": null,
                    "top250": null,
                    "isSeries": false,
                    "ticketsOnSale": false,
                    "backdrop": {
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a000001951ee4c6a019557a4021e2528362/x1000",
                        "url": "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a000001951ee4c6a019557a4021e2528362/orig"
                    }
                },
                {
                    "id": 6456150,
                    "name": "Рэкетир. Новые времена",
                    "alternativeName": "Рэкетир III",
                    "enName": null,
                    "type": "movie",
                    "typeNumber": 1,
                    "year": 2024,
                    "description": "Большой бизнес, рейдерство, продажные чиновники и силовики — времена новые, а люди те же. Отсидев срок за убийство заклятого врага, Cаян выходит из тюрьмы. На воле его уже ждет сын убитого, давший слово уничтожить Cаяна.",
                    "shortDescription": null,
                    "status": null,
                    "rating": {
                        "kp": 7.017,
                        "imdb": 6.9,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": null
                    },
                    "votes": {
                        "kp": 4929,
                        "imdb": 9,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "movieLength": 90,
                    "totalSeriesLength": null,
                    "seriesLength": null,
                    "ratingMpaa": null,
                    "ageRating": 18,
                    "poster": {
                        "url": "https://image.openmoviedb.com/kinopoisk-images/10703959/7f5ae5f2-c1a8-47c0-bb50-6904dea30bb8/orig",
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10703959/7f5ae5f2-c1a8-47c0-bb50-6904dea30bb8/x1000"
                    },
                    "genres": [
                        {
                            "name": "криминал"
                        },
                        {
                            "name": "драма"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Казахстан"
                        }
                    ],
                    "top10": null,
                    "top250": null,
                    "isSeries": false,
                    "ticketsOnSale": false,
                    "backdrop": {
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a00000194ef7d9cad34fe668d8db141d367/x1000",
                        "url": "https://image.openmoviedb.com/kinopoisk-ott-images/223007/2a00000194ef7d9cad34fe668d8db141d367/orig"
                    }
                },
                {
                    "id": 6429304,
                    "name": "Маша и Медведь: Парк чудес",
                    "alternativeName": null,
                    "enName": null,
                    "type": "cartoon",
                    "typeNumber": 3,
                    "year": 2024,
                    "description": "Маша, Даша и Медведь отправляются в Парк Чудес, где их ждут захватывающие аттракционы. Даша очень хочет попасть на шоу, поэтому нацелена на победу во всех квестах парка, Маша хочет просто повеселиться, а Мишка настроен испытать свой «умный» фотоаппарат.",
                    "shortDescription": "Мишка, Маша и Даша участвуют в шоу и заводят друзей-клоунов. Веселая суматоха — теперь в парке аттракционов",
                    "status": null,
                    "rating": {
                        "kp": 8.413,
                        "imdb": 0,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": null
                    },
                    "votes": {
                        "kp": 75304,
                        "imdb": 0,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "movieLength": 23,
                    "totalSeriesLength": null,
                    "seriesLength": null,
                    "ratingMpaa": null,
                    "ageRating": 0,
                    "poster": {
                        "url": "https://image.openmoviedb.com/kinopoisk-images/10812607/f046f2dc-9768-494c-bae1-d40163175513/orig",
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10812607/f046f2dc-9768-494c-bae1-d40163175513/x1000"
                    },
                    "genres": [
                        {
                            "name": "мультфильм"
                        },
                        {
                            "name": "короткометражка"
                        },
                        {
                            "name": "детский"
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
                    "ticketsOnSale": false,
                    "backdrop": {
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a00000193b0986ca5436831a16d58e47844/x1000",
                        "url": "https://image.openmoviedb.com/kinopoisk-ott-images/374297/2a00000193b0986ca5436831a16d58e47844/orig"
                    }
                },
                {
                    "id": 6429450,
                    "name": "Триумф",
                    "alternativeName": null,
                    "enName": null,
                    "type": "movie",
                    "typeNumber": 1,
                    "year": 2024,
                    "description": "История тренера по вольной борьбе Дмитрия Коркина и его воспитанников, покоривших Олимпийские игры.",
                    "shortDescription": null,
                    "status": null,
                    "rating": {
                        "kp": 0,
                        "imdb": 6.7,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "votes": {
                        "kp": 254,
                        "imdb": 8,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "movieLength": 113,
                    "totalSeriesLength": null,
                    "seriesLength": null,
                    "ratingMpaa": null,
                    "ageRating": 12,
                    "poster": {
                        "url": "https://image.openmoviedb.com/kinopoisk-images/1898899/4eafe00f-1048-4aa7-a742-fff1abf48d6d/orig",
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1898899/4eafe00f-1048-4aa7-a742-fff1abf48d6d/x1000"
                    },
                    "genres": [
                        {
                            "name": "спорт"
                        },
                        {
                            "name": "драма"
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
                    "ticketsOnSale": false,
                    "backdrop": {
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/2419418/2a0000019305febc8d4613e619cd7b012f11/x1000",
                        "url": "https://image.openmoviedb.com/kinopoisk-ott-images/2419418/2a0000019305febc8d4613e619cd7b012f11/orig"
                    }
                },
                {
                    "id": 6426292,
                    "name": "Двоечницы и школьный призрак",
                    "alternativeName": "Ameba sonyeodeulgwa hakgyogoedam: gaegyoginyeomil",
                    "enName": null,
                    "type": "movie",
                    "typeNumber": 1,
                    "year": 2024,
                    "description": "Не блещущая оценками старшеклассница Чи-ён случайно посмотрела кассету 1998 года, где её предшественницы играют в школе в прятки с призраком. Девушка выясняет, что все они получили высший балл на экзамене, а также, что раз она видела запись, теперь ей нужно сыграть с призраком или он будет её преследовать. Поделившись с подругами-двоечницами, Чи-ён и подумать не могла, что они специально посмотрят проклятую кассету, чтобы вынудить её играть и всем получить шанс сдать экзамен.",
                    "shortDescription": null,
                    "status": null,
                    "rating": {
                        "kp": 0,
                        "imdb": 7.3,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "votes": {
                        "kp": 18,
                        "imdb": 40,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "movieLength": 90,
                    "totalSeriesLength": null,
                    "seriesLength": null,
                    "ratingMpaa": null,
                    "ageRating": null,
                    "poster": {
                        "url": "https://image.openmoviedb.com/kinopoisk-images/4716873/173281e2-cf82-4a2e-ad44-6f6c9413a0a9/orig",
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4716873/173281e2-cf82-4a2e-ad44-6f6c9413a0a9/x1000"
                    },
                    "genres": [
                        {
                            "name": "ужасы"
                        },
                        {
                            "name": "комедия"
                        }
                    ],
                    "countries": [
                        {
                            "name": "Корея Южная"
                        }
                    ],
                    "top10": null,
                    "top250": null,
                    "isSeries": false,
                    "ticketsOnSale": false
                },
                {
                    "id": 320,
                    "name": "25-й час",
                    "alternativeName": "25th Hour",
                    "enName": null,
                    "type": "movie",
                    "typeNumber": 1,
                    "year": 2002,
                    "description": "В фильме описывается последний день свободной жизни молодого бруклинца Монти Брогана (Эдвард Нортон), осужденного на семь лет тюрьмы за торговлю наркотиками. Оставшиеся 24 часа он проводит в компании своих родных, друзей, деловых партнеров и любимой девушки Натурель.\n\nМонти, мечтавший в свое время стать пожарным, но в итоге ступивший на роковую стезю наркодилера, прощается с прошлым и пытается переосмыслить свою жизнь...",
                    "shortDescription": "Наркоторговец проводит с друзьями последние сутки перед тюрьмой. Драма Спайка Ли по книге Дэвида Бениоффа",
                    "status": null,
                    "rating": {
                        "kp": 7.546,
                        "imdb": 7.6,
                        "filmCritics": 7.3,
                        "russianFilmCritics": 0,
                        "await": null
                    },
                    "votes": {
                        "kp": 45500,
                        "imdb": 186898,
                        "filmCritics": 175,
                        "russianFilmCritics": 2,
                        "await": 0
                    },
                    "movieLength": 135,
                    "totalSeriesLength": null,
                    "seriesLength": null,
                    "ratingMpaa": "r",
                    "ageRating": 18,
                    "poster": {
                        "url": "https://image.openmoviedb.com/kinopoisk-images/1773646/36278095-3e97-47ba-8cdb-b07466598be8/orig",
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1773646/36278095-3e97-47ba-8cdb-b07466598be8/x1000"
                    },
                    "backdrop": {
                        "url": "https://image.openmoviedb.com/kinopoisk-ott-images/2385704/2a0000017704d26b1d7a9f85249286868c71/orig",
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/2385704/2a0000017704d26b1d7a9f85249286868c71/x1000"
                    },
                    "genres": [
                        {
                            "name": "драма"
                        }
                    ],
                    "countries": [
                        {
                            "name": "США"
                        }
                    ],
                    "top10": null,
                    "top250": null,
                    "isSeries": false,
                    "ticketsOnSale": false,
                    "logo": {
                        "url": null,
                        "previewUrl": null
                    }
                },
                {
                    "id": 6416664,
                    "name": "Заклятие. Новое поколение",
                    "alternativeName": "Tu Sangre",
                    "enName": null,
                    "type": "movie",
                    "typeNumber": 1,
                    "year": 2024,
                    "description": "В надежде понять, что случилось с ее пропавшей матерью, Софи решается провести спиритический сеанс. Явившийся ей призрак матери подсказывает, что разгадку ее трагической смерти надо искать в закрытой школе для девочек, где она работала. Девушка отправляется в интернат и обнаруживает, что в этом заклятом месте не только пропадают люди, но и обитают призраки. Софи понимает, что поступление сюда было роковой ошибкой, но желание найти ответы оказывается сильнее страха за свою жизнь.",
                    "shortDescription": "Старшеклассница приезжает в школу-интернат, чтобы раскрыть тайну смерти матери. Мистический хоррор из Испании",
                    "status": null,
                    "rating": {
                        "kp": 4.449,
                        "imdb": 4.7,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": null
                    },
                    "votes": {
                        "kp": 5205,
                        "imdb": 56,
                        "filmCritics": 0,
                        "russianFilmCritics": 0,
                        "await": 0
                    },
                    "movieLength": 81,
                    "totalSeriesLength": null,
                    "seriesLength": null,
                    "ratingMpaa": null,
                    "ageRating": 18,
                    "countries": [
                        {
                            "name": "Испания"
                        }
                    ],
                    "top10": null,
                    "top250": null,
                    "isSeries": false,
                    "ticketsOnSale": false,
                    "genres": [
                        {
                            "name": "ужасы"
                        }
                    ],
                    "poster": {
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4486362/da87aa54-013d-4228-99d6-0792b39b1b30/x1000",
                        "url": "https://image.openmoviedb.com/kinopoisk-images/4486362/da87aa54-013d-4228-99d6-0792b39b1b30/orig"
                    },
                    "backdrop": {
                        "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a00000194eee786ec0672a9e68a7c72c2ac/x1000",
                        "url": "https://image.openmoviedb.com/kinopoisk-ott-images/200035/2a00000194eee786ec0672a9e68a7c72c2ac/orig"
                    }
                }
            ])
            return

            async function getData() {
                setFilmsListLoading(true)
                const findSelectedCategoryId = filmCategories.findIndex((item) => item.selected) + 1
                if (findSelectedCategoryId === 1) {
                    const [data, error, isLoading] = await filmsApi.getPopularFilms()
                    setFilmsList(data)
                    setFilmsListLoading(isLoading)
                } else if (findSelectedCategoryId === 2) {
                    const [data, error, isLoading] = await filmsApi.getPopularSerials()
                    setFilmsList(data)
                    setFilmsListLoading(isLoading)
                } else if (findSelectedCategoryId === 3) {
                    const [data, error, isLoading] = await filmsApi.getRandomFilms()
                    setFilmsList(data)
                    setFilmsListLoading(isLoading)
                }
            }

            getData()
        }, []);

        // useEffect(() => {
        // console.log('MAINPAGE', filters)
        // const get = async () => {
        //     setFilmsListLoading(true)
        //     const [data, error, isLoading] = await filmsApi.getFilmsByFilters({page: 1, limit: 4})
        //     console.log(data, 'DATA')
        //     console.log(error, 'error')
        //     console.log(isLoading, 'isLoading')
        //     setFilmsListLoading(isLoading)
        //     setFiltersFilmList(data)
        // }
        // get()
        // }, [filters])

        const changeFilter = (updatedField) => {
            setFilters(pr => ({...pr, ...updatedField}));
        }
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
                            {
                                // filmsListLoading  ?
                                //     <div>Загрузка фильмов...</div> :
                                <FilmList list={filmsList}/>
                            }
                        </div>
                    </div>

                    <div className="main-page__film-category-wrapper">
                        <div className="main-page__category-filter-wrapper">
                            <CategorySelect list={[{id: 1, name: 'Фильмы по категориям'}]}/>

                        </div>
                        <div className="main-page__selects-wrapper">
                            <SelectGroup filters={filters} changeFilter={(v) => changeFilter(v)}/>
                        </div>
                        <div className="main-page__ui-button-arrow-right-wrap">
                            <UiButton text='Смотреть все' type="arrow-right"/>
                        </div>
                        <div className="main-page__film-list-wrapper">
                            {filmsListLoading ?
                                <div>Загрузка...</div> :
                                <FilmList list={filtersFilmList}/>
                            }
                        </div>
                    </div>
                </div>
                <FooterBlock/>
            </div>
        );
    }
;

export default MainPage;