import {useContext} from 'react'
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import SearchFilmPage from "./pages/SearchFilmPage/SearchFilmPage.jsx";
import {RouteContext} from "./context/RoutesProvider.jsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";


function App() {
    const {page, selectedFilmId} = useContext(RouteContext)
    const pages = {
        '/': <MainPage/>,
        '/about-page': <AboutPage filmId={selectedFilmId}/>,
        '/search': <SearchFilmPage/>
    };
    return (
        <>
            {pages[page] ?? <NotFoundPage/>}
        </>
    )
}

export default App
