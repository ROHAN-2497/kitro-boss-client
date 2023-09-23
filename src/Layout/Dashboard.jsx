import {
  FaCalendar,
  FaCartPlus,
  FaHome,
  FaWallet,
  FaShoppingBag,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full ">
          {/* Sidebar content here */}
          <li>
            <NavLink to="/dashboard/home">
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/reservation'>
              <FaCalendar></FaCalendar>reservation
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/history'>
              {" "}
              <FaWallet></FaWallet>payment history
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/mycart'>
              {" "}
              <FaCartPlus></FaCartPlus> My Cart
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu"> Menu</NavLink>
          </li>
          <li>
            <NavLink to="/shop">
              <FaShoppingBag></FaShoppingBag>Shop
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
