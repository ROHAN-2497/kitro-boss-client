import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Disclaimer from "../Disclaimer/Disclaimer";
import Featured from "../Featured/Featured";
import PopularItems from "../PopularItems/PopularItems";
import Testomonials from "../Testomonials/Testomonials";
import ChefRecomends from "./ChefRecomends/ChefRecomends";

const Home = () => {
    return (
        <div>
              <Helmet>
        <title>kitro Boss | Home</title>
      </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Disclaimer></Disclaimer>
            <PopularItems></PopularItems>
            <ChefRecomends></ChefRecomends>
            <Featured></Featured>
            <Testomonials></Testomonials>
        </div>
    );
};

export default Home;