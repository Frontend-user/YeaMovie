import './NoResult.scss'

const NoResult = ({text = "По данному запросу ничего не нашли"}) => {
    return (
        <div className="no-result">
            {text}
        </div>
    );
};

export default NoResult;
