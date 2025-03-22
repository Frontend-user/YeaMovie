import './CategorySelect.scss'

const CategorySelect = ({list}) => {
    return (
        <div className="category-select">
            {list.map(item => (
                <div className={`category-select__item 
                ${item.id === 1 ? 'category-select__selected' : ''}`} key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

export default CategorySelect;
