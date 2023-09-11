const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className="flex  gap-4 my-4 mx-4 ">
            <img style={{borderRadius:' 0px 200px 200px 200px', background: '#D9D9D9'}} className="w-[118px] h-[104px] rounded-full" src={image} alt="" />
            <div>
                <h2 className="text-3xl uppercase">{name}--------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;