import './SearchInput.scss'
import searchIcon from '../../../assets/icons/search-icon.svg'
import {useContext} from "react";
import {RouteContext} from "../../../context/RoutesProvider.jsx";

const SearchInput = ({onChange, value, search}) => {
    const {changeRoute} = useContext(RouteContext)
    return (

        <div className="search-input">
            <input
                className="search-input__field"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Поиск..."/>
            <img
                className="search-input__icon"
                onClick={() => changeRoute('/search')}
                src={searchIcon} alt=""/>
        </div>
    );
};

export default SearchInput;
