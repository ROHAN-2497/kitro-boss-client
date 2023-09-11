import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Menu from "../../Shared/Menu/Menu";

const PopularItems = () => {
  const { menu, setMenu } = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"form our menu"}
      ></SectionTitle>
      <div>{menu.map(item => <Menu
      key={item._id}
      item={item}
      ></Menu> )
      
      }</div>
    </section>
  );
};

export default PopularItems;
