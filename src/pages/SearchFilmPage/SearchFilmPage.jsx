import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import './SearchFilmPage.scss'
import HeaderBlock from "../../components/ui/HeaderBlock/HeaderBlock.jsx";
import BigFilmCard from "../../components/ui/BigFilmCard/BigFilmCard.jsx";
import BigFilmList from "../../components/SearchFilmPage/BigFilmList/BigFilmList.jsx";
import FooterBlock from "../../components/ui/FooterBlock/FooterBlock.jsx";
import UiButton from "../../components/ui/UiButton/UiButton.jsx";
import {filmsApi} from "../../api/filmsApi.js";
import {RouteContext} from "../../context/RoutesProvider.jsx";
import {debounce} from "../../helpers/helpers.js";

const film = {
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
}
const list3 = [
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
        "id": 5377804,
        "name": "Руки Вверх!",
        "alternativeName": "",
        "enName": "",
        "type": "movie",
        "year": 2024,
        "description": "Из провинциального мальчишки, мечтающего впечатлить девушку робкими песнями о любви, Сергей Жуков становится одним из самых востребованных артистов страны и голосом целого поколения.",
        "shortDescription": "Провинциальный музыкант-самоучка становится кумиром поколения. Байопик о легендарной поп-группе",
        "movieLength": 100,
        "isSeries": false,
        "ticketsOnSale": false,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": null,
        "ageRating": 18,
        "top10": null,
        "top250": null,
        "typeNumber": 1,
        "status": null,
        "names": [
            {
                "name": "Руки вверх",
                "language": "RU",
                "type": "Russian title on kinopoisk"
            }
        ],
        "externalId": {
            "kpHD": "b248f958b8aa46ec8539682f54bc773d",
            "tmdb": 1248954
        },
        "logo": null,
        "poster": {
            "url": "https://image.openmoviedb.com/kinopoisk-images/4486362/9f7fb99b-619d-4fba-a7be-b2daf266ad0b/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/4486362/9f7fb99b-619d-4fba-a7be-b2daf266ad0b/x1000"
        },
        "backdrop": {
            "url": "https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a00000191ef28797dbb94ab1e38bae2ceb6/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a00000191ef28797dbb94ab1e38bae2ceb6/x1000"
        },
        "rating": {
            "kp": 7.623,
            "imdb": 5,
            "filmCritics": 0,
            "russianFilmCritics": 71.4286,
            "await": null
        },
        "votes": {
            "kp": 349237,
            "imdb": 110,
            "filmCritics": 0,
            "russianFilmCritics": 7,
            "await": 0
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
        "releaseYears": []
    },
    {
        "id": 6706155,
        "name": "Руки Вверх!",
        "alternativeName": "",
        "enName": "",
        "type": "movie",
        "year": 2024,
        "description": "Из провинциального мальчишки, мечтающего впечатлить девушку робкими песнями о любви, Сергей Жуков становится одним из самых востребованных артистов страны и голосом целого поколения.",
        "shortDescription": "Провинциальный музыкант-самоучка становится кумиром поколения. Байопик о легендарной поп-группе",
        "movieLength": 100,
        "isSeries": false,
        "ticketsOnSale": false,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": null,
        "ageRating": 18,
        "top10": null,
        "top250": null,
        "typeNumber": 1,
        "status": null,
        "names": [],
        "externalId": {
            "kpHD": "5cc7f56192f245ee909229a0d1bd7502",
            "tmdb": 1248954
        },
        "logo": null,
        "poster": {
            "url": "https://image.openmoviedb.com/kinopoisk-images/10671298/e20865f8-159b-4e95-9bb7-1997884321f1/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10671298/e20865f8-159b-4e95-9bb7-1997884321f1/x1000"
        },
        "backdrop": {
            "url": "https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a00000193b551b063a791d538ae4b178728/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/1648503/2a00000193b551b063a791d538ae4b178728/x1000"
        },
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
        "releaseYears": []
    },
    {
        "id": 42141,
        "name": "Руки вверх!",
        "alternativeName": "",
        "enName": "",
        "type": "movie",
        "year": 1981,
        "description": "Злодей Шито-Крыто задумал превратить всех детей в лентяев, двоечников и проходимцев, чтобы с их помощью завоевать весь мир. Но лоботрясы и озорники вовремя спохватились — и операция под кодовым названием «Братцы-тунеядцы» с треском провалилась.",
        "shortDescription": "Злодей намерен покорить мир, превратив людей в бездельников. Семейная комедия с блестящим актерским составом",
        "movieLength": 67,
        "isSeries": false,
        "ticketsOnSale": false,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": null,
        "ageRating": 6,
        "top10": null,
        "top250": null,
        "typeNumber": 1,
        "status": null,
        "names": [
            {
                "name": "Руки вверх!"
            },
            {
                "name": "Ruki Vverkh!",
                "language": "RU",
                "type": "Translit"
            }
        ],
        "externalId": {
            "kpHD": "4c69821251a30af18e74f4ed343f537d",
            "imdb": "tt0084612",
            "tmdb": 470326
        },
        "logo": {
            "url": null,
            "previewUrl": null
        },
        "poster": {
            "url": "https://image.openmoviedb.com/kinopoisk-images/1704946/b48a469d-8ed8-4dec-884e-cec2568af8d2/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1704946/b48a469d-8ed8-4dec-884e-cec2568af8d2/x1000"
        },
        "backdrop": {
            "url": "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a00000163b2cb01200e4289a9dc3eeed241/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-ott-images/212840/2a00000163b2cb01200e4289a9dc3eeed241/x1000"
        },
        "rating": {
            "kp": 6.216,
            "imdb": 5.7,
            "filmCritics": 0,
            "russianFilmCritics": 0,
            "await": null
        },
        "votes": {
            "kp": 1219,
            "imdb": 52,
            "filmCritics": 0,
            "russianFilmCritics": 0,
            "await": 0
        },
        "genres": [
            {
                "name": "комедия"
            },
            {
                "name": "семейный"
            }
        ],
        "countries": [
            {
                "name": "СССР"
            }
        ],
        "releaseYears": []
    },
    {
        "id": 8942,
        "name": "Руки вверх, или Грабители-неудачники",
        "alternativeName": "The Curse of Inferno",
        "enName": "",
        "type": "movie",
        "year": 1996,
        "description": "Двое незадачливых грабителей банков после очередного ограбления так запутались в погонях, скрывании от полиции и шерифа, и выяснении отношений между собой, что решили вернуть деньги в банк...",
        "shortDescription": "",
        "movieLength": 83,
        "isSeries": false,
        "ticketsOnSale": false,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": "r",
        "ageRating": 16,
        "top10": null,
        "top250": null,
        "typeNumber": 1,
        "status": null,
        "names": [
            {
                "name": "Руки вверх, или Грабители-неудачники"
            },
            {
                "name": "The Curse of Inferno"
            }
        ],
        "externalId": {
            "kpHD": null,
            "tmdb": 92943
        },
        "logo": {
            "url": null
        },
        "poster": {
            "url": "https://image.openmoviedb.com/kinopoisk-images/1946459/3e20796f-3d10-4eec-8df2-adbb78750249/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1946459/3e20796f-3d10-4eec-8df2-adbb78750249/x1000"
        },
        "backdrop": {
            "url": null,
            "previewUrl": null
        },
        "rating": {
            "kp": 5.737,
            "imdb": 4.2,
            "filmCritics": 0,
            "russianFilmCritics": 0,
            "await": null
        },
        "votes": {
            "kp": 115,
            "imdb": 578,
            "filmCritics": 0,
            "russianFilmCritics": 0,
            "await": 0
        },
        "genres": [
            {
                "name": "криминал"
            },
            {
                "name": "комедия"
            }
        ],
        "countries": [
            {
                "name": "США"
            }
        ],
        "releaseYears": []
    },
    {
        "id": 3056,
        "name": "Руки вверх",
        "alternativeName": "Rece do góry",
        "enName": "",
        "type": "movie",
        "year": 1981,
        "description": "",
        "shortDescription": "",
        "movieLength": 76,
        "isSeries": false,
        "ticketsOnSale": false,
        "totalSeriesLength": null,
        "seriesLength": null,
        "ratingMpaa": null,
        "ageRating": null,
        "top10": null,
        "top250": null,
        "typeNumber": 1,
        "status": null,
        "names": [
            {
                "name": "Руки вверх"
            },
            {
                "name": "Rece do góry"
            },
            {
                "name": "Haut les mains !",
                "language": "FR",
                "type": "TV"
            },
            {
                "name": "Psila ta heria!",
                "language": "GR",
                "type": null
            },
            {
                "name": "Mani in alto!",
                "language": "IT",
                "type": null
            }
        ],
        "externalId": {
            "imdb": "tt0062181",
            "tmdb": 154399,
            "kpHD": null
        },
        "logo": {
            "url": null
        },
        "poster": {
            "url": "https://image.openmoviedb.com/kinopoisk-images/1629390/cda51770-dc71-4def-8858-505452ddfc84/orig",
            "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1629390/cda51770-dc71-4def-8858-505452ddfc84/x1000"
        },
        "backdrop": {
            "url": null,
            "previewUrl": null
        },
        "rating": {
            "kp": 6,
            "imdb": 6.5,
            "filmCritics": 0,
            "russianFilmCritics": 0,
            "await": null
        },
        "votes": {
            "kp": 110,
            "imdb": 462,
            "filmCritics": 0,
            "russianFilmCritics": 0,
            "await": 0
        },
        "genres": [
            {
                "name": "драма"
            }
        ],
        "countries": [
            {
                "name": "Польша"
            }
        ],
        "releaseYears": []
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
]
const SearchFilmPage = () => {

    // const [data, error, isLoading] = await filmsApi.getFilmsByFilters({page: 1, limit: 4})
    const {searchName} = useContext(RouteContext)
    const [films, setFilms] = useState([])
    const [isLoading, setLoading] = useState(true)
    const getFilmsBySearchName = useCallback(async (searchName) => {
        setLoading(true)
        const [data, error, isLoading] = await filmsApi.getFilmsBySearchName({
            page: 1,
            limit: 6,
            query: searchName,
        })
        setFilms(data)
        setLoading(isLoading)
    }, [])

    const debouncedGetFilmsBySearchName = useMemo(() =>
        debounce(getFilmsBySearchName, 1000), [getFilmsBySearchName])
    const {changeRoute} = useContext(RouteContext)
    useEffect(() => {
        // if (searchName) {
        //     console.log(searchName, 'SEARCG WATCHER')
        debouncedGetFilmsBySearchName(searchName)
        // }
    }, [searchName]);


    return (
        <div className="search-film-page">
            <HeaderBlock/>
            <div className="search-film-page__wrapper">
                <div className="search-film-page__routes">
                    <UiButton onClick={() => changeRoute('/')} type="arrow-left" text="Назад"/>
                </div>
                <div className="search-film-page__title">Результаты поиска</div>
                {isLoading ? (
                    <div>Загрузка фильмов...</div>
                ) : (
                    <BigFilmList list={films}/>
                )}
            </div>
            <FooterBlock/>
        </div>
    );
};

export default SearchFilmPage;