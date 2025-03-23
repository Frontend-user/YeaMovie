import {useEffect, useState} from 'react'
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import TestPage from "./components/TestPage/TestPage.jsx";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
    const apiUrl = "https://api.kinopoisk.dev/v1.4"
    const token = 'AZ211ST-KDQ4F97-N7W6X1J-BB7ESSH'
    const [count, setCount] = useState(0)
    useEffect(() => {
        // fetch(`${apiUrl}/movie`, {
        //     headers: {
        //         'X-API-KEY': token
        //     }
        // })
        //     .then(r => r.json())
        //     .then(r => {
        //         console.log(r, 'rr')
        //     })
    }, []);
    return (
        <>
            <AboutPage/>
            {/*<MainPage/>*/}
            {/*<TestPage/>*/}
        </>
    )
}

export default App
