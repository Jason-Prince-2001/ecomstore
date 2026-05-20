
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from '../redux/slices/cartSlice'

import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

function Cart() {

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  )

  const dispatch = useDispatch()

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className='min-h-screen bg-gray-100 p-10'>

      <h1 className='text-5xl font-bold mb-10'>
        Shopping Cart
      </h1>

      <div className='grid lg:grid-cols-3 gap-10'>

        <div className='lg:col-span-2'>

          {cartItems.map((item) => (

            <div
              key={item.id}
              className='bg-white p-5 rounded-2xl shadow-lg mb-5 flex justify-between items-center'
            >

              <div className='flex items-center gap-5'>

                <img
                  src={item.image}
                  alt=''
                  className='w-28 h-28 object-cover rounded-xl'
                />

                <div>

                  <h1 className='text-2xl font-bold'>
                    {item.name}
                  </h1>

                  <p className='text-gray-500 mt-2'>
                    ₹{item.price}
                  </p>

                </div>

              </div>

              <div className='flex items-center gap-3'>

                <button
                  onClick={() =>
                    dispatch(decreaseQty(item.id))
                  }
                  className='bg-black text-white px-4 py-2 rounded'
                >
                  -
                </button>

                <span className='text-xl font-bold'>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    dispatch(increaseQty(item.id))
                  }
                  className='bg-black text-white px-4 py-2 rounded'
                >
                  +
                </button>

              </div>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
                className='bg-red-500 text-white px-5 py-3 rounded-xl'
              >
                Remove
              </button>

            </div>

          ))}

        </div>

        <div className='bg-white p-8 rounded-2xl shadow-lg h-fit'>

          <h1 className='text-3xl font-bold mb-5'>
            Order Summary
          </h1>

          <div className='flex justify-between mb-4'>
            <span>Total</span>

            <span className='font-bold'>
              ₹{total}
            </span>
          </div>

          <Link to='/checkout'>

            <button className='bg-black text-white w-full py-4 rounded-xl mt-5'>
              Proceed To Checkout
            </button>

          </Link>

        </div>

      </div>

    </div>
  )
}

export default Cart