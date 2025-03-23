import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import {ThemeProvider} from "./context/ThemeProvider.jsx";
import RoutesProvider from "./context/RoutesProvider.jsx";

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <RoutesProvider>
        <App/>
    </RoutesProvider>
    // </StrictMode>,
)
