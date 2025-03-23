import React from 'react';
import './UiLoading.scss'

const UiLoading = ({text = "Загрузка"}) => {
    return (
        <div className="ui-loading">
            <div className="ui-loading__title loader">{text} </div>

        </div>
    );
};

export default UiLoading;