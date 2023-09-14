const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="mb-20">
      <div className="card my-10 h-full card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body  flex items-center mb-10">
          <p className="absolute top-0 right-0 mr-10 mt-5 px-4 py-2 bg-slate-900 text-white">{price}</p>
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline border-0 border-b-4 text-orange-700 hover:text-orange-500">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
