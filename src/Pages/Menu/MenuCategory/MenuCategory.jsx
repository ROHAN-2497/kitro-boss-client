import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 mb-10 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
      <button className="btn btn-outline mb-20 border-0 border-b-4 text-orange-700 hover:text-orange-500">
        Order Now
      </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
