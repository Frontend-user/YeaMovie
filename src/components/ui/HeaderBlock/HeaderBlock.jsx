import './HeaderBlock.scss'
import SearchInput from "../SearchInput/SearchInput.jsx";
import './HeaderBlock.scss'
import headerIcon from '../../../assets/icons/kinomonster-icon.svg'

const HeaderBlock = () => {

    return (
        <div className="header">
            <div className="header__inner">
                <img src={headerIcon} alt="" className="header__logo"/>
                <div className="header__search-wrapper">
                    <SearchInput/>
                </div>
            </div>
        </div>
    );
};

export default HeaderBlock;
