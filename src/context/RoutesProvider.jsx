import React, {createContext,  useEffect, useState} from 'react';

export const RouteContext = createContext()
const RoutesProvider = ({children}) => {
    const [route, setRoute] = useState(window.location.pathname)
    const [page, setPage] = useState('/')
    const [searchName, setSearchName] = useState('')
    const [selectedFilmId, setSelectedFilmId] = useState(1)
    const navigate = (newRoute) => {
        window.history.pushState({}, "", newRoute);
    };
    const changeRoute = (route) => {
        const arr = route.split('/')
        if (arr[1] === 'about-page') {
            setPage(`/${arr[1]}`)
            const id = +arr[2]
            setSelectedFilmId(id)
        } else {
            setPage(route)
        }
        navigate(route)
        setRoute(route)
    }
    useEffect(() => {
        changeRoute(window.location.pathname)
    },)
    return (
        <RouteContext.Provider value={{
                searchName, setSearchName,
            route, setRoute, page, setPage, selectedFilmId,
            changeRoute
        }}>
            {children}
        </RouteContext.Provider>
    );
};

export default RoutesProvider;