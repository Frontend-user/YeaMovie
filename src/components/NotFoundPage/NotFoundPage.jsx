import React, {useContext} from 'react';
import {RouteContext} from "../../context/RoutesProvider.jsx";

const NotFoundPage = () => {
    const {changeRoute} = useContext(RouteContext)
    return (
        <div>
            <h1>Страница не найдена</h1>
            <br/>
            <button onClick={() => changeRoute('/')}>
           <h1>     Вернутся на главную</h1>
            </button>
        </div>
    );
};

export default NotFoundPage;