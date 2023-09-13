import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Components/hook/useMenu/useMenu";

const PopularItems = () => {
const [menu] = useMenu();
const popular = menu.filter(item => item.category === 'popular');

  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"form our menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2">
       {
        popular.map(item => <MenuItem
        key={item._id}
        item={item}
        ></MenuItem>)
       }
      </div>
      <button className=" ml-[550px] mt-10 btn btn-outline  border-b-4 text-orange-600">View Full menu</button>
    </section>
  );
};

export default PopularItems;
