import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import toast from 'react-hot-toast'

function ProductCard({ product }) {
  const dispatch = useDispatch()

  const handleCart = () => {
    if (!product) return
    dispatch(addToCart(product))
    toast.success('Product Added To Cart')
  }

  if (!product) return null

  return (
    <div className='bg-white p-4 rounded-xl shadow-md hover:scale-105 duration-300 transition-all'>

      {/* IMAGE */}
      <img
        src={product.image || 'https://via.placeholder.com/300'}
        alt={product.name}
        className='w-full h-52 object-cover rounded-lg bg-gray-100'
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300'
        }}
      />

      {/* NAME */}
      <h1 className='text-lg font-bold mt-3 truncate'>
        {product.name || 'No Name'}
      </h1>

      {/* CATEGORY */}
      <p className='text-gray-500 text-sm'>
        {product.category || 'Unknown'}
      </p>

      {/* RATING */}
      <div className='mt-1 text-sm'>
        {product.rating ? (
          <span className='text-yellow-500'>
            {'⭐'.repeat(Math.floor(product.rating))}{' '}
            <span className='text-gray-600'>
              ({product.rating})
            </span>
          </span>
        ) : (
          <span className='text-gray-400'>No rating</span>
        )}
      </div>

      {/* PRICE */}
      <h2 className='text-xl font-bold mt-2'>
        ₹{product.price || 0}
      </h2>

      {/* BUTTON */}
      <button
        onClick={handleCart}
        className='bg-black hover:bg-gray-800 text-white w-full py-2 mt-3 rounded-lg transition active:scale-95'
      >
        Add To Cart
      </button>

    </div>
  )
}

export default ProductCard