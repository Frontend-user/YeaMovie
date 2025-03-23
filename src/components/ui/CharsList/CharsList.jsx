import './CharsList.scss'
import {useEffect} from "react";

const CharsList = ({list}) => {
    useEffect(() => {
    }, [list]);
    return (
        <div className="chars-list">
            <div className="chars-list__inner">

                {list.map(obj => {
                    const [[label, value]] = Object.entries(obj)
                    return (<div className="chars-list__item" key={label}>
                        <div className="chars-list__labels">
                            <div className="chars-list__label">{label}</div>
                        </div>
                        <div className="chars-list__values">
                            <div className="chars-list__value">{value}</div>
                        </div>
                    </div>)
                })}


            </div>
        </div>
    )
        ;
};

export default CharsList;
