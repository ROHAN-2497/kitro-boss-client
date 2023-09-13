import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import menuimg from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../Components/hook/useMenu/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === 'dessert');
  const pizzas = menu.filter((item) => item.category === "pizzas");
  const salads = menu.filter((item) => item.category === "salads");
  const soups = menu.filter((item) => item.category === "soups");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Cover img={menuimg} title={"our menu"}></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"Dont miss"}
        heading={"todays offer"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* deserts menu items */}
      <MenuCategory 
      items={desserts}
      title="dessert"
      img={desertImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
