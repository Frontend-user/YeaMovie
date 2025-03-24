import React, {useContext, useEffect, useMemo, useState} from 'react';
import HeaderBlock from "../../components/ui/HeaderBlock/HeaderBlock.jsx";
import ImagesGrid from "../../components/AboutPage/ImagesGrid/ImagesGrid.jsx";
import FilmDetails from "../../components/AboutPage/FilmDetails/FilmDetails.jsx";
import './AboutPage.scss'
import UiButton from "../../components/ui/UiButton/UiButton.jsx";
import FooterBlock from "../../components/ui/FooterBlock/FooterBlock.jsx";
import {RouteContext} from "../../context/RoutesProvider.jsx";
import {filmsApi} from "../../api/filmsApi.js";
import UiLoading from "../../components/ui/UILoading/UiLoading.jsx";

const AboutPage = ({filmId}) => {
    const {changeRoute} = useContext(RouteContext)
    const film2 = {
        "id": 6706155,
        "externalId": {
            "kpHD": "5cc7f56192f245ee909229a0d1bd7502",
            "tmdb": 1248954
        },
        "name": "Руки Вверх!",
        "alternativeName": null,
        "enName": null,
        "type": "movie",
        "typeNumber": 1,
        "year": 2024,
        "description": "Из провинциального мальчишки, мечтающего впечатлить девушку робкими песнями о любви, Сергей Жуков становится одним из самых востребованных артистов страны и голосом целого поколения.",
        "shortDescription": "Провинциальный музыкант-самоучка становится кумиром поколения. Байопик о легендарной поп-группе",
        "slogan": null,
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
        "persons": [
            {
                "id": 6342413,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6342413.jpg",
                "name": "Влад Прохоров",
                "enName": null,
                "description": "Сергей Жуков в молодости",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 5872898,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5872898.jpg",
                "name": "Илья Русь",
                "enName": null,
                "description": "Алексей Потехин в молодости",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 2810219,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2810219.jpg",
                "name": "Сергей Жуков",
                "enName": null,
                "description": "Сергей Жуков",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 7077047,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7077047.jpg",
                "name": "Алексей Потехин",
                "enName": null,
                "description": "Алексей Потехин",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 1561010,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1561010.jpg",
                "name": "Артём Осипов",
                "enName": null,
                "description": "Дядя Марат",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 571651,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_571651.jpg",
                "name": "Фёдор Лавров",
                "enName": null,
                "description": "Антон Шалаев",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 3523156,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3523156.jpg",
                "name": "Валентина Ляпина",
                "enName": null,
                "description": "Света",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 5780934,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5780934.jpg",
                "name": "Энджел Жуков",
                "enName": null,
                "description": "Сергей Жуков в юности",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 10138598,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10138598.jpg",
                "name": "Регина Бурд",
                "enName": null,
                "description": "Регина",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 6487381,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6487381.jpg",
                "name": "Анастасия Кувшинова",
                "enName": null,
                "description": "Регина в молодости",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 277363,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_277363.jpg",
                "name": "Григорий Багров",
                "enName": null,
                "description": "Врач",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 1557535,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1557535.jpg",
                "name": "Александр Обласов",
                "enName": null,
                "description": "Дмитрий",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 7143226,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7143226.jpg",
                "name": "Андрей Гнып",
                "enName": null,
                "description": "охранник",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 7049458,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7049458.jpg",
                "name": "Валерий Борисов",
                "enName": null,
                "description": "бандит",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 6507510,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6507510.jpg",
                "name": "Наталия Поборцева",
                "enName": null,
                "description": "Ирина",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 5459545,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5459545.jpg",
                "name": "Зарина Бахтиева",
                "enName": null,
                "description": "журналистка",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 7173709,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7173709.jpg",
                "name": "Евгений Ковалюк",
                "enName": null,
                "description": "Евгений",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 2797949,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2797949.jpg",
                "name": "Анжелика Легостаева",
                "enName": null,
                "description": "журналистка",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 6879125,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6879125.jpg",
                "name": "Санора Кирсанова",
                "enName": null,
                "description": null,
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 4164506,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4164506.jpg",
                "name": "Михаил Коновалов",
                "enName": null,
                "description": "пациент психиатрической больницы",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 10120008,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10120008.jpg",
                "name": "Анастасия Светличная",
                "enName": null,
                "description": "танцовщица",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 7195847,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7195847.jpg",
                "name": "Георгий Шиханов",
                "enName": null,
                "description": null,
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 10228035,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10228035.jpg",
                "name": "Владислав Видяев",
                "enName": null,
                "description": "продавец аудиокассет",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 10215027,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10215027.jpg",
                "name": "Анатолий Шевелёв",
                "enName": null,
                "description": "ведущий фестиваля",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 10241847,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10241847.jpg",
                "name": "Александер Васаби",
                "enName": null,
                "description": "ведущий музыкального канала",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 6581279,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6581279.jpg",
                "name": "Анна Баркалова",
                "enName": null,
                "description": "медсестра",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 10257067,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10257067.jpg",
                "name": "Ольга Саврасова",
                "enName": null,
                "description": "журналистка",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 5811109,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5811109.jpg",
                "name": "Анна Чмир",
                "enName": null,
                "description": "журналистка",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 3918595,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3918595.jpg",
                "name": "Василий Копейкин",
                "enName": null,
                "description": "Макс",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 4542432,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4542432.jpg",
                "name": "Геннадий Грезнев",
                "enName": null,
                "description": "отец малыша",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 7058308,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_7058308.jpg",
                "name": "Максим Васильев",
                "enName": null,
                "description": "бандит",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 6624997,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6624997.jpg",
                "name": "Роман Мелдерс",
                "enName": null,
                "description": "младший брат Сергея Жукова",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 10259727,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10259727.jpg",
                "name": "Диана Визгалина",
                "enName": null,
                "description": "девушка Сергея Жукова в молодости",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 251207,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_251207.jpg",
                "name": "Леонид Ярмольник",
                "enName": null,
                "description": "главврач",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 10268727,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10268727.jpg",
                "name": "Артём Косыгин",
                "enName": null,
                "description": "ординатор",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 10268741,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10268741.jpg",
                "name": "Максим Сафронов",
                "enName": null,
                "description": "участник музыкальной группы",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 4555758,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4555758.jpg",
                "name": "Эмилия Клюнк",
                "enName": null,
                "description": "фанатка с персиками",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 10298062,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10298062.jpg",
                "name": "Мария Демяхина",
                "enName": null,
                "description": "Фанатка",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 6267337,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6267337.jpg",
                "name": "Никита Мучкаев",
                "enName": null,
                "description": "помощник Игоря Матвиенко",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 10295947,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10295947.jpg",
                "name": "Екатерина Сурова",
                "enName": null,
                "description": "Девушка из группы 'Вася'",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 3806785,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3806785.jpg",
                "name": "Анастасия Пучкина",
                "enName": null,
                "description": null,
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 10309413,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10309413.jpg",
                "name": "Дмитрий Потиханов",
                "enName": null,
                "description": "Малыш",
                "profession": "актеры",
                "enProfession": "actor"
            },
            {
                "id": 2810219,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2810219.jpg",
                "name": "Сергей Жуков",
                "enName": null,
                "description": null,
                "profession": "композиторы",
                "enProfession": "composer"
            },
            {
                "id": 3890119,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3890119.jpg",
                "name": "Виктор Зудин",
                "enName": null,
                "description": null,
                "profession": "художники",
                "enProfession": "designer"
            },
            {
                "id": 6961241,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6961241.jpg",
                "name": "Татьяна Чистопольская",
                "enName": null,
                "description": null,
                "profession": "художники",
                "enProfession": "designer"
            },
            {
                "id": 5389719,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_5389719.jpg",
                "name": "Евгения Рублина",
                "enName": null,
                "description": null,
                "profession": "художники",
                "enProfession": "designer"
            },
            {
                "id": 6413512,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_6413512.jpg",
                "name": "Ани Дваладзе",
                "enName": null,
                "description": null,
                "profession": "художники",
                "enProfession": "designer"
            },
            {
                "id": 10247092,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10247092.jpg",
                "name": "Анастасия Литвина",
                "enName": null,
                "description": null,
                "profession": "художники",
                "enProfession": "designer"
            },
            {
                "id": 2336330,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2336330.jpg",
                "name": "Аскар Узабаев",
                "enName": "Askar Uzabayev",
                "description": null,
                "profession": "режиссеры",
                "enProfession": "director"
            },
            {
                "id": 2343036,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2343036.jpg",
                "name": "Максим Мироненко",
                "enName": "Maksim Mironenko",
                "description": null,
                "profession": "монтажеры",
                "enProfession": "editor"
            },
            {
                "id": 2395703,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2395703.jpg",
                "name": "Кирилл Абрамов",
                "enName": null,
                "description": null,
                "profession": "монтажеры",
                "enProfession": "editor"
            },
            {
                "id": 4367478,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_4367478.jpg",
                "name": "Александр Дмитриев",
                "enName": null,
                "description": null,
                "profession": "операторы",
                "enProfession": "operator"
            },
            {
                "id": 2936313,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2936313.jpg",
                "name": "Анна Рожецкая",
                "enName": null,
                "description": null,
                "profession": "операторы",
                "enProfession": "operator"
            },
            {
                "id": 1525448,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1525448.jpg",
                "name": "Тимур Вайнштейн",
                "enName": null,
                "description": null,
                "profession": "продюсеры",
                "enProfession": "producer"
            },
            {
                "id": 2280003,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2280003.jpg",
                "name": "Михаил Погосов",
                "enName": null,
                "description": null,
                "profession": "продюсеры",
                "enProfession": "producer"
            },
            {
                "id": 3930813,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_3930813.jpg",
                "name": "Евгений Мишиев",
                "enName": null,
                "description": null,
                "profession": "продюсеры",
                "enProfession": "producer"
            },
            {
                "id": 2810219,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2810219.jpg",
                "name": "Сергей Жуков",
                "enName": null,
                "description": null,
                "profession": "продюсеры",
                "enProfession": "producer"
            },
            {
                "id": 1557243,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_1557243.jpg",
                "name": "Сергей Калужанов",
                "enName": null,
                "description": null,
                "profession": "сценаристы",
                "enProfession": "writer"
            },
            {
                "id": 2280003,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2280003.jpg",
                "name": "Михаил Погосов",
                "enName": null,
                "description": null,
                "profession": "сценаристы",
                "enProfession": "writer"
            },
            {
                "id": 2810219,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_2810219.jpg",
                "name": "Сергей Жуков",
                "enName": null,
                "description": null,
                "profession": "сценаристы",
                "enProfession": "writer"
            },
            {
                "id": 10272840,
                "photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_10272840.jpg",
                "name": "Клавдия Гольц",
                "enName": null,
                "description": null,
                "profession": "сценаристы",
                "enProfession": "writer"
            }
        ],
        "premiere": {
            "world": null,
            "russia": "2024-10-10T00:00:00.000Z",
            "digital": "2024-11-28T00:00:00.000Z",
            "cinema": null,
            "bluray": null,
            "dvd": null
        },
        "top10": null,
        "top250": null,
        "isSeries": false,
        "audience": [
            {
                "count": 2603879,
                "country": "Россия"
            }
        ],
        "ticketsOnSale": false,
        "lists": [
            "popular-films",
            "box-russia-dollar",
            "hd"
        ],
        "createdAt": "2024-12-11T20:51:21.502Z",
        "updatedAt": "2025-03-20T01:00:03.999Z",
        "watchability": {
            "items": [
                {
                    "name": "PREMIER",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig"
                    },
                    "url": "https://premier.one/show/242523?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed"
                },
                {
                    "name": "START",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/1a632675-0d99-4268-bd5e-d5f3dd800174/orig"
                    },
                    "url": "https://start.ru/watch/ruki-vverh-2024?utm_source=kinopoisk&utm_medium=feed_watch&utm_campaign=ruki-vverh-2024"
                },
                {
                    "name": "Иви",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig"
                    },
                    "url": "https://www.ivi.ru/watch/ruki-vverh?utm_source=yandex&utm_medium=wizard"
                },
                {
                    "name": "Okko",
                    "logo": {
                        "url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
                    },
                    "url": "https://okko.tv/movie/ruki-vverkh-1029384756?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
                }
            ]
        },
        "budget": {
            "currency": "₽",
            "value": 390000000
        },
        "fees": {
            "russia": {
                "value": 11049319,
                "currency": "$"
            }
        },
        "networks": {
            "items": [
                {
                    "name": "START",
                    "logo": null
                }
            ]
        },
        "isTmdbChecked": true,
        "studioParsed": true,
        "keywordsParsed": true
    }
    const [isLoading, setIsLoading] = useState(true)
    const [film, setFilm] = useState({})
    useEffect(() => {
        const getFilm = async () => {
            console.log(filmId, 'filmId')
            const [data, error, isLoading] = await filmsApi.getFilmById(filmId)
            setFilm(data)
            setIsLoading(isLoading)
            console.log('FILM LOADED')
        }
        getFilm()
// setFilm(film2)
//         setIsLoading(false)
    }, [filmId]);
    const formatGenre = useMemo(() => {
        if (isLoading) return
        if (!film.genres) return ''
        let result = ''
        film.genres.forEach((item, idx) => {
            result += item.name
            if (!(idx + 1 >= film.genres.length)) {
                result += ', '
            }
        })
        return result
    }, [film])
    return (
        <div className="about-page">
            <HeaderBlock/>
            <div className="about-page__wrapper">
                <div className="about-page__routes">
                    <UiButton onClick={() => changeRoute('/')} type="arrow-left" text="Главная"/>
                    <UiButton onClick={() => changeRoute('/')} type="arrow-left" text="Назад"/>
                </div>
                {isLoading ?
                    (<UiLoading/>)
                    : (<FilmDetails
                            image={film.poster.url}
                            name={film.name}
                            ratingKp={film.rating.kp}
                            ratingImdb={film.rating.imdb}
                            description={film.description}
                            genre={formatGenre}
                            country={film.countries[0].name}
                            year={film.year}
                            watchLinks={film?.watchability?.items}
                            film={film}/>
                    )
                }

                <div className="about-page__button-wrap">
                    <UiButton type="value" text="Кадры из фильма"/>
                </div>
                <div className="about-page__arrow-button-wrap">
                    <UiButton type="arrow-right" text="Смотреть все"/>
                </div>
                <ImagesGrid list={film?.persons?.length ? film.persons.map(item => (item.photo)).slice(0, 6) : []}/>
            </div>
            <FooterBlock/>

        </div>
    );
};

export default AboutPage;