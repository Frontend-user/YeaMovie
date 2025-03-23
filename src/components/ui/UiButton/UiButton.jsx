import './UiButton.scss'

const UiButton = ({text, type = "default"}) => {
    return (
        <button
            className={`ui-button ui-button__${type}`} disabled>
            {text}
        </button>
    );
};

export default UiButton;
