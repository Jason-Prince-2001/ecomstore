import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux'

function AdminUsers() {

  const users = useSelector(
    (state) => state.users.users
  )

  const orders = useSelector(
    (state) => state.orders.orders
  )

  return (

    <div className='flex bg-gray-100 min-h-screen'>

      <Sidebar />

      <div className='ml-[250px] w-full p-10'>

        <h1 className='text-5xl font-bold mb-10'>
          Users Management
        </h1>

        <div className='bg-white rounded-2xl shadow-lg p-8 overflow-x-auto'>

          <table className='w-full'>

            <thead>

              <tr className='border-b text-left text-gray-600'>

                <th className='py-4'>Name</th>

                <th>Email</th>

                <th>Role</th>

                <th>Status</th>

                <th>Purchased Products</th>

              </tr>

            </thead>

            <tbody>

              {users.length > 0 ? (

                users.map((user) => (

                  <tr
                    key={user.id}
                    className='border-b hover:bg-gray-50'
                  >

                    <td className='py-5 font-semibold'>
                      {user.name}
                    </td>

                    <td>
                      {user.email}
                    </td>

                    <td>
                      {user.role}
                    </td>

                    <td>

                      <span className='bg-green-500 text-white px-4 py-2 rounded-full text-sm'>

                        {user.status}

                      </span>

                    </td>

                    <td>

                      {orders
                        .filter(
                          (order) =>
                            order.customerEmail === user.email
                        )
                        .map((order) => (

                          order.products.map((product) => (

                            <p
                              key={product.id}
                              className='mb-1'
                            >

                              {product.name}

                            </p>

                          ))

                        ))
                      }

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan='5'
                    className='text-center py-10 text-gray-500 text-xl'
                  >

                    No Users Found

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  )
}

export default AdminUsers