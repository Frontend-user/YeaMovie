import './UiSelect.scss'
import {useState} from "react";
import selectIcon from '../../../assets/icons/select-down-icon.svg'

const UiSelect = ({list, select, className}) => {
    const [isOpen, toggle] = useState(false)

    const selectItem = (item) => {
        select(item)
        toggle()
    }
    return (
        <div className={`${className} ui-select ${isOpen ? 'ui-select__is-open' : ''}`}>
            <div className={`ui-select__inner ${isOpen ? 'ui-select__inner-is-open' : ''}`}>
                <div className="ui-select__show-field"
                     onClick={() => toggle(pr => !pr)}
                >{list.find(_ => _.selected).name}
                    <img src={selectIcon} alt="" className="ui-select__icon"/></div>
                {isOpen
                    ?
                    <div className="ui-select__drop-down">
                        {list.map(item => (
                            <div className="ui-select__option" onClick={() => selectItem(item)}
                                 key={item.id}>{item.name}</div>
                        ))}
                    </div> : <div></div>
                }
            </div>
        </div>
    );
};

export default UiSelect;
