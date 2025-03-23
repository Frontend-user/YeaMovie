import './ImagesGrid.scss'

const ImagesGrid = ({list}) => {
    return (
        <div className="images-grid">
            {list.map((img, index) => (
                <div key={img + index} className="images-grid__img-wrap">
                    <img src={img} alt="" className="images-grid__image"/>
                </div>
            ))}
        </div>
    );
};

export default ImagesGrid;
