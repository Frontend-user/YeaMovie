import './UiButton.scss'

const UiButton = ({text, type = "default"}) => {
    return (
        <button
            className={`ui-button
             ${type === 'arrow-right' ?
                'ui-button__arrow-right' :
                ''}`} disabled>
            {text}
        </button>
    );
};

export default UiButton;
