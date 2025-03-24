import {useContext} from 'react'
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import SearchFilmPage from "./pages/SearchFilmPage/SearchFilmPage.jsx";
import {RouteContext} from "./context/RoutesProvider.jsx";

function App() {
    const {page, changeRoute,selectedFilmId} = useContext(RouteContext)
    return (
        <>
            {page === '/'
                ? <MainPage/>
                : page === '/about-page'
                    ? <AboutPage filmId={selectedFilmId}/>
                    : page === '/search'
                        ? <SearchFilmPage/>
                        : <div>NOT FOUNT PAGE
                            <button onClick={() => changeRoute('/')}>GO TO MAINPAGE </button>
                        </div>
            }
        </>
    )
}

export default App
