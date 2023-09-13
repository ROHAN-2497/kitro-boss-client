import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
    
    return (
        <div className="pt-8">
        {title &&<Cover img={img} title={"our menu"}></Cover>}
      <div className="grid md:grid-cols-2 mb-20" >
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
