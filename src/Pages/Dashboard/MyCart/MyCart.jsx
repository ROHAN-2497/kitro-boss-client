import { Helmet } from "react-helmet-async";
import useCart from "../../../Components/hook/useCart/useCart";
import { FaTrash } from "react-icons/fa";

const MyCart = () => {
  const [cart] = useCart();
  // console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        <title>Kitro Boss || My Cart</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] flex justify-evenly">
        <h2 className="text-3xl"> Total Items: {cart.length}</h2>
        <h2 className="text-3xl"> Total Price:${total}</h2>
        <button className="btn btn-warning btn-xs w-[70px] font-medium h-[45px]">
          pay
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="uppercase">
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th> price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>
{item.name}                 
                </td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button className="btn btn-ghost text-white btn-xs w-[50px] h-[50px] bg-red-500"><FaTrash></FaTrash></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
