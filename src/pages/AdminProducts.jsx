

import Sidebar from '../components/Sidebar'
import { useSelector } from 'react-redux'

function AdminProducts() {

  const products = useSelector(
    (state) => state.products.products
  )

  return (
    <div className='flex bg-gray-100 min-h-screen'>

      <Sidebar />

      <div className='ml-[250px] w-full p-10'>

        <h1 className='text-5xl font-bold mb-10'>
          Admin Products
        </h1>

        <div className='grid md:grid-cols-4 gap-6'>

          {products.map((product) => (

            <div
              key={product.id}
              className='bg-white p-5 rounded-2xl shadow-lg hover:scale-105 duration-300'
            >

              <img
                src={product.image}
                alt=''
                className='w-full h-56 object-cover rounded-xl'
              />

              <h1 className='text-2xl font-bold mt-4'>
                {product.name}
              </h1>

              <p className='text-gray-500 mt-2'>
                {product.category}
              </p>

              <h2 className='text-3xl font-bold mt-3'>
                ₹{product.price}
              </h2>

              <button className='bg-black text-white w-full py-3 rounded-xl mt-5'>
                Edit Product
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default AdminProducts