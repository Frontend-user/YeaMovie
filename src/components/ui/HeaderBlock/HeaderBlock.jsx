import './HeaderBlock.scss'
import SearchInput from "../SearchInput/SearchInput.jsx";
import './HeaderBlock.scss'
import headerIcon from '../../../assets/icons/kinomonster-icon.svg'
import {useContext} from "react";
import {RouteContext} from "../../../context/RoutesProvider.jsx";

const HeaderBlock = () => {
const {changeRoute} = useContext(RouteContext)
    return (
        <div className="header">
            <div className="header__inner">
                <img onClick={()=> changeRoute('/')} src={headerIcon} alt="" className="header__logo"/>
                <div className="header__search-wrapper">
                    <SearchInput/>
                </div>
            </div>
        </div>
    );
};

export default HeaderBlock;
