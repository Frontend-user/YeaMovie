import './SearchInput.scss'
import searchIcon from '../../../assets/icons/search-icon.svg'

const SearchInput = () => {
    return (
        <div className="search-input">
            <input
                className="search-input__field"
                type="text"
                placeholder="Поиск..."/>
            <img
                className="search-input__icon"
                src={searchIcon} alt=""/>
        </div>
    );
};

export default SearchInput;
