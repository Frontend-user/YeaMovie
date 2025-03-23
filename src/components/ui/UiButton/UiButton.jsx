import './UiButton.scss'
import {useContext} from "react";
import {RouteContext} from "../../../context/RoutesProvider.jsx";

const UiButton = ({onClick, text, type = "default"}) => {
    return (
        <button
            onClick={onClick}
            className={`ui-button ui-button__${type}`} >
            {text}
        </button>
    );
};

export default UiButton;
