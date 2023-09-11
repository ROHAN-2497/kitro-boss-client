
const Menu = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div>
            <img src={image} alt="" />
            <div>
                <h2>{name}--------</h2>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default Menu;