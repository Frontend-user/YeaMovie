import './UiPaginate.scss'
import prevIcon from '../../../assets/icons/slider-prev-icon.svg'
import nextIcon from '../../../assets/icons/slider-next-icon.svg'
const UiPaginate = ({
                        total,
                        pages,
                        limit,
                        prevPage,
                        nextPage,
                        page
                    }) => {
    const handlePrevPage = () => {
        if (page - 1 > 0) {
            prevPage()
        }

    }

    const handleNextPage = () => {
        if (page + 1 <= pages) {
            nextPage()
        }
    }
    return (
        <div className="ui-paginate">
            <div className="ui-paginate__inner">
                {/*prevIcon*/}
                {/*nextIcon*/}
                <button disabled={!(page - 1 > 0)} onClick={() => handlePrevPage()}
                        className="ui-paginate__prev">
                    <img src={prevIcon} alt=""/>
                </button>
                <div className="ui-paginate__value">{page}</div>
                <button  disabled={!(page + 1 <= pages)} onClick={() => handleNextPage()}
                         className="ui-paginate__next"><img src={nextIcon} alt=""/></button>
            </div>
        </div>
    );
};

export default UiPaginate;
