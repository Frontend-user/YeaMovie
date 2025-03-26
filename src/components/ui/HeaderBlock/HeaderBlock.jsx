import './HeaderBlock.scss'
import SearchInput from "../SearchInput/SearchInput.jsx";
import './HeaderBlock.scss'
import headerIcon from '../../../assets/icons/kinomonster-icon.svg'
import {memo, useContext} from "react";
import {RouteContext} from "../../../context/RoutesProvider.jsx";

const HeaderBlock = memo(() => {
    const {changeRoute, searchName, setSearchName} = useContext(RouteContext)
    const handleInputChange = (newValue) => {
        setSearchName(newValue)
    }

    const searchFilms = () => {

    }
    return (
        <div className="header">
            <div className="header__inner">
                <img onClick={() => changeRoute('/')} src={headerIcon} alt="" className="header__logo"/>
                <div className="header__search-wrapper">
                    <SearchInput
                        search={searchFilms}
                        value={searchName} onChange={(v) => handleInputChange(v)}/>
                </div>
            </div>
        </div>
    );
})

export default HeaderBlock;
