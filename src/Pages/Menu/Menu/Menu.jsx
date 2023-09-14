import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import menuimg from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzasImg from "../../../assets/menu/pizza-bg.jpg";
import saladsImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Components/hook/useMenu/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === 'dessert');
  const pizzas = menu.filter((item) => item.category === 'pizza');
  const salads = menu.filter((item) => item.category === 'salad');
  const soups = menu.filter((item) => item.category === 'soup');
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
      {/* pizzas menu items */}
      <MenuCategory
      items={pizzas}
      title='pizza'
      img={pizzasImg}
      ></MenuCategory>
      {/* salads menu items */}
      <MenuCategory
      items={salads}
      title='salad'
      img={saladsImg}
      ></MenuCategory>
      {/* soups menu items */}
      <MenuCategory
      items={soups}
      title='soup'
      img={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
