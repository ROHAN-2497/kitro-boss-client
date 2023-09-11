import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Disclaimer from "../Disclaimer/Disclaimer";
import PopularItems from "../PopularItems/PopularItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Disclaimer></Disclaimer>
            <PopularItems></PopularItems>
        </div>
    );
};

export default Home;