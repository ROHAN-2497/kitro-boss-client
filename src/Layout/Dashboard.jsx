import {
  FaCalendar,
  FaCartPlus,
  FaHome,
  FaWallet,
  FaShoppingBag,
  FaUtensils,
  FaBook,
  FaUsers,
  FaFolderMinus,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Components/hook/useCart/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  const isAdmin = true;
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
        <ul className="menu p-4 w-80  uppercase">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaUtensils></FaUtensils> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  {" "}
                  <FaWallet></FaWallet>MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  {" "}
                  <FaBook></FaBook> MANAGE bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  {" "}
                 <FaUsers></FaUsers> all users
                 
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  {" "}
                  <FaWallet></FaWallet>payment history
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  {" "}
                  <FaCartPlus></FaCartPlus> My Cart
                  <span className="badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu"> <FaFolderMinus></FaFolderMinus> Menu</NavLink>
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
