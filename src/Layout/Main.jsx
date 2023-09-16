import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeadingFooter = location.pathname.includes('login') || 
    location.pathname.includes('signup')
    return (
        <div>
            { noHeadingFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
          { noHeadingFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Main;