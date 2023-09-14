import Cover from "../../Menu/Cover/Cover";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Components/hook/useMenu/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(category)
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
        <Helmet>
            <title>Kitro Boss | Order Menu</title>
        </Helmet>
      <Cover img={orderCoverImg} title={"our shop"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALADS</Tab>
          <Tab>PIZZAS</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab items={pizzas}></OrderTab>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab items={soups}></OrderTab>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          {" "}
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
