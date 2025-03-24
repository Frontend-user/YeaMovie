import './UiSelect.scss'
import {memo, useEffect, useRef, useState} from "react";
import selectIcon from '../../../assets/icons/select-down-icon.svg'
import {useOnClickOutside} from "../../../hooks/useOnClickOutside.js";

const UiSelect = memo(function UiSelect({list, select, className}) {
    const [isOpen, toggle] = useState(false)
    const uiSelect = useRef(null)
    const selectItem = (item) => {
        select(item)
        toggle()
    }
    useOnClickOutside(uiSelect, toggle)
    return (
        <div ref={uiSelect} className={`${className} ui-select ${isOpen ? 'ui-select__is-open' : ''}`}>
            <div className={`ui-select__inner ${isOpen ? 'ui-select__inner-is-open' : ''}`}>
                <div className="ui-select__show-field"
                     onClick={() => toggle(pr => !pr)}
                >{list.find(_ => _.selected).name}
                    <img src={selectIcon} alt="" className="ui-select__icon"/></div>
                {isOpen
                    ?
                    <div className="ui-select__drop-down">
                        {list.map(item => (
                            <div className="ui-select__option" onClick={() => selectItem(item.id)}
                                 key={item.id}>{item.name}</div>
                        ))}
                    </div> : <div></div>
                }
            </div>
        </div>
    );
})


export default UiSelect;
