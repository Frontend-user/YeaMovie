import {useContext, useEffect, useState} from 'react'
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import TestPage from "./components/TestPage/TestPage.jsx";
import SearchFilmPage from "./pages/SearchFilmPage/SearchFilmPage.jsx";
import {ThemeContext, ThemeProvider} from "./context/ThemeProvider.jsx";
import {RouteContext} from "./context/RoutesProvider.jsx";

function App() {
    const {page, changeRoute,selectedFilmId} = useContext(RouteContext)

    useEffect(() => {
        // const arr = route.split('/')
        // if (arr[1] === 'about-page') {
        //     setSelectedFilmId(+arr[2])
        //     setPage('/' +
        //         arr[1])
        // }
        // console.log(selectedFilmId,'selectedFilmId')
    }, []);
    return (
        <>
            {page}
            {page === '/'
                ? <MainPage/>
                : page === '/about-page'
                    ? <AboutPage filmId={selectedFilmId}/>
                    : page === '/search-film-page'
                        ? <SearchFilmPage/>
                        : <div>NOT FOUNT PAGE
                            <button onClick={() => changeRoute('/')}>GO TO MAINPAGE </button>
                        </div>
            }
        </>
    )
}

export default App
