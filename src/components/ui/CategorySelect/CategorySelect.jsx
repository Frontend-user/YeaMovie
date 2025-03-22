import './CategorySelect.scss'

const CategorySelect = ({list, select}) => {
    return (
        <div className="category-select">
            {list.map(item => (
                <div onClick={() => select(item.id)} className={`category-select__item 
                ${item.selected === true ? 'category-select__selected' : ''}`} key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

export default CategorySelect;
