import './UiButton.scss'

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
