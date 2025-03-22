import './FooterBlock.scss'
import footerIcon from '../../../assets/icons/kinomonster-icon.svg'

const FooterBlock = () => {
    return (
        <div className="footer">
        <div className="footer__inner">
            <img src={footerIcon} alt="" className="footer__logo"/>
            <div className="footer__navs">
                <div className="footer__nav">   Главная</div>
                <div className="footer__nav">Популярные фильмы</div>
                <div className="footer__nav">Популярные сериалы</div>
            </div>
        </div>
        </div>
    );
};

export default FooterBlock;
