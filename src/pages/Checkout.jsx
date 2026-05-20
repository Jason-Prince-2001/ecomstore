import { useState } from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import { addOrder } from "../redux/slices/ordersSlice";

function Checkout() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const [paymentMethod, setPaymentMethod] = useState("COD");

  const [showPopup, setShowPopup] = useState(false);

  const handleOrder = () => {

    const currentUser = JSON.parse(
      localStorage.getItem('user')
    );

    const order = {

      id: Date.now(),

      customerName: currentUser?.name,

      customerEmail: currentUser?.email,

      products: cartItems

    };

    dispatch(addOrder(order));

    setShowPopup(true);

    setTimeout(() => {

      setShowPopup(false);

    }, 2500);
  };

  return (

    <div className="min-h-screen bg-gray-100 p-10 relative">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold mb-8 text-center">
          🛒 Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            className="border p-4 rounded-xl outline-none"
            placeholder="First Name"
          />

          <input
            className="border p-4 rounded-xl outline-none"
            placeholder="Last Name"
          />

        </div>

        <input
          className="border p-4 rounded-xl w-full mt-5 outline-none"
          placeholder="Email Address"
        />

        <input
          className="border p-4 rounded-xl w-full mt-5 outline-none"
          placeholder="Phone Number"
        />

        <textarea
          className="border p-4 rounded-xl w-full mt-5 h-32 outline-none"
          placeholder="Shipping Address"
        />

        <select
          className="border p-4 rounded-xl w-full mt-5 outline-none"
          value={paymentMethod}
          onChange={(e) =>
            setPaymentMethod(e.target.value)
          }
        >

          <option value="COD">
            Cash On Delivery
          </option>

          <option value="UPI">
            UPI Payment
          </option>

          <option value="CARD">
            Credit / Debit Card
          </option>

        </select>

        <button
          onClick={handleOrder}
          className="bg-black text-white w-full py-4 rounded-xl mt-8 hover:bg-gray-800 transition"
        >
          Place Order
        </button>

      </div>

      {showPopup && (

        <div className="fixed inset-0 flex items-center justify-center bg-black/40">

          <div className="bg-white p-8 rounded-2xl shadow-xl text-center animate-bounce">

            <h2 className="text-2xl font-bold text-green-600">

              🎉 Order Placed Successfully!

            </h2>

            <p className="text-gray-600 mt-2">

              Thank you for your purchase

            </p>

          </div>

        </div>

      )}

    </div>
  );
}

export default Checkout;