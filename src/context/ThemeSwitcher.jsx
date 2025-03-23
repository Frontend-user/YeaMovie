// Компонент ThemeSwitcher
import {useContext} from "react";
import {ThemeContext} from "./ThemeProvider.jsx";

export function ThemeSwitcher() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Текущая тема: {theme}</h1>
            <button onClick={toggleTheme}>Сменить тему</button>
        </div>
    );
}
