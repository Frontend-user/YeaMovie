import './WatchLinks.scss'

const WatchLinks = ({list}) => {
    return (
        <div className="watch-links">
            <div className="watch-links__title">Смотреть на:</div>
            <div  className="watch-links__items">
                {list.map((item) => (
                    <a key={item.name} href={item.url} target="_blank"
                       className="watch-links__item">
                        <img src={item.logo.url}
                             alt=""/>
                    </a>
                ))}
            </div>
        </div>

    );
};

export default WatchLinks;
