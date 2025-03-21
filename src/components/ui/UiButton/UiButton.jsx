import './UiButton.scss'

const UiButton = ({text}) => {
    return (
        <button className="ui-button" disabled>
            {text}
        </button>
    );
};

export default UiButton;
