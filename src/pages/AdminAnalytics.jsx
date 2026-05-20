import Sidebar from '../components/Sidebar'

import { useSelector } from 'react-redux'

function AdminAnalytics() {

  const orders = useSelector(
    (state) => state.orders.orders
  )

  const users = useSelector(
    (state) => state.users.users
  )

  // TOTAL ORDERS
  const totalOrders = orders.length

  // TOTAL CUSTOMERS
  const totalCustomers = users.length

  // TOTAL REVENUE
  const totalRevenue = orders.reduce(

    (acc, order) =>

      acc +

      order.products.reduce(

        (sum, product) =>

          sum + product.price * product.quantity,

        0

      ),

    0

  )

  // TOTAL PRODUCTS SOLD
  const totalProductsSold = orders.reduce(

    (acc, order) =>

      acc + order.products.length,

    0

  )

  return (

    <div className='flex bg-gray-100 min-h-screen'>

      <Sidebar />

      <div className='ml-[250px] w-full p-10'>

        <h1 className='text-5xl font-bold mb-10'>
          Real-Time Analytics
        </h1>

        {/* TOP CARDS */}

        <div className='grid md:grid-cols-4 gap-6 mb-10'>

          <div className='bg-blue-500 text-white p-8 rounded-2xl shadow-lg'>

            <h2 className='text-2xl font-bold'>
              Total Orders
            </h2>

            <p className='text-5xl mt-5'>
              {totalOrders}
            </p>

          </div>

          <div className='bg-green-500 text-white p-8 rounded-2xl shadow-lg'>

            <h2 className='text-2xl font-bold'>
              Revenue
            </h2>

            <p className='text-4xl mt-5'>
              ₹{totalRevenue}
            </p>

          </div>

          <div className='bg-purple-500 text-white p-8 rounded-2xl shadow-lg'>

            <h2 className='text-2xl font-bold'>
              Customers
            </h2>

            <p className='text-5xl mt-5'>
              {totalCustomers}
            </p>

          </div>

          <div className='bg-orange-500 text-white p-8 rounded-2xl shadow-lg'>

            <h2 className='text-2xl font-bold'>
              Products Sold
            </h2>

            <p className='text-5xl mt-5'>
              {totalProductsSold}
            </p>

          </div>

        </div>

        {/* RECENT ORDERS */}

        <div className='bg-white p-8 rounded-2xl shadow-lg'>

          <h2 className='text-3xl font-bold mb-6'>
            Recent Purchases
          </h2>

          <table className='w-full'>

            <thead>

              <tr className='border-b text-left text-gray-500'>

                <th className='py-4'>Customer</th>

                <th>Product</th>

                <th>Price</th>

                <th>Quantity</th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (

                order.products.map((product) => (

                  <tr
                    key={product.id}
                    className='border-b hover:bg-gray-50'
                  >

                    <td className='py-4'>
                      {order.customerName}
                    </td>

                    <td>
                      {product.name}
                    </td>

                    <td>
                      ₹{product.price}
                    </td>

                    <td>
                      {product.quantity}
                    </td>

                  </tr>

                ))

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  )
}

export default AdminAnalytics