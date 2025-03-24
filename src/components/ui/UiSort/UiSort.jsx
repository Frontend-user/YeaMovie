import './UiSort.scss'
import sortIcon from '../../../assets/icons/sort-icon.svg'

const UiSort = ({onClick,className}) => {
    return (
        <div onClick={onClick} className={`${className} ui-sort`}>
            <img
                className="ui-sort__image"
                src={sortIcon} alt=""/>
        </div>
    );
};

export default UiSort;
