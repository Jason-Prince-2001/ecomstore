// src/pages/AdminDashboard.jsx

import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux'

function AdminDashboard() {

  const products = useSelector(
    (state) => state.products.products
  )

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  )

  const revenue = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className='flex bg-gray-100 min-h-screen'>

      <Sidebar />

      <div className='ml-[250px] w-full p-10'>

        <h1 className='text-5xl font-bold mb-10'>
          Admin Dashboard
        </h1>

        <div className='grid md:grid-cols-3 gap-6'>

          <div className='bg-blue-500 text-white p-10 rounded-2xl shadow-lg'>
            <h1 className='text-2xl font-bold'>
              Total Products
            </h1>

            <p className='text-5xl mt-5'>
              {products.length}
            </p>
          </div>

          <div className='bg-green-500 text-white p-10 rounded-2xl shadow-lg'>
            <h1 className='text-2xl font-bold'>
              Orders
            </h1>

            <p className='text-5xl mt-5'>
              {cartItems.length}
            </p>
          </div>

          <div className='bg-black text-white p-10 rounded-2xl shadow-lg'>
            <h1 className='text-2xl font-bold'>
              Revenue
            </h1>

            <p className='text-5xl mt-5'>
              ₹{revenue}
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default AdminDashboard