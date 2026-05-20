
import {
  FaTruck,
  FaCreditCard,
  FaShieldAlt,
  FaHeadphones,
  FaStar,
} from 'react-icons/fa'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addToCart } from '../redux/slices/cartSlice'
import toast from 'react-hot-toast'

function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // FEATURES
  const features = [
    {
      id: 1,
      icon: <FaTruck />,
      title: 'Free Shipping',
      desc: 'Free delivery for all orders.',
      bg: 'bg-[#eee3db]',
    },
    {
      id: 2,
      icon: <FaCreditCard />,
      title: 'Safe Payment',
      desc: '100% secure payment system.',
      bg: 'bg-[#d6ecec]',
    },
    {
      id: 3,
      icon: <FaShieldAlt />,
      title: 'Secure Payment',
      desc: 'Protected checkout guarantee.',
      bg: 'bg-[#dce9b5]',
    },
    {
      id: 4,
      icon: <FaHeadphones />,
      title: '24/7 Support',
      desc: 'Customer support anytime.',
      bg: 'bg-[#dbe4f4]',
    },
  ]

  // BIG DISCOUNT PRODUCTS
  const discountProducts = [
    {
      id: 1,
      name: 'Nike Shoes',
      price: 4999,
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    },
    {
      id: 2,
      name: 'Titan Watch',
      price: 6999,
      image:
        'https://images.unsplash.com/photo-1523170335258-f5ed11844a49',
    },
    {
      id: 3,
      name: 'Sony Headphone',
      price: 2999,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    },
    {
      id: 4,
      name: 'HP Laptop',
      price: 54999,
      image:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    },
    {
      id: 5,
      name: 'Rayban Glass',
      price: 1999,
      image:
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
    },
    {
      id: 6,
      name: 'Travel Bag',
      price: 2499,
      image:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    },
  ]

  // NEW ARRIVALS
  const newArrivals = [
    {
      id: 7,
      name: 'AirPods',
      price: 14999,
      image:
        'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434',
    },
    {
      id: 8,
      name: 'Adidas Shoes',
      price: 5999,
      image:
        'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
    },
    {
      id: 9,
      name: 'Smart Watch',
      price: 3999,
      image:
        'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
    },
    {
      id: 10,
      name: 'Canon Camera',
      price: 75999,
      image:
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    },
    {
      id: 11,
      name: 'Perfume',
      price: 1299,
      image:
        'https://images.unsplash.com/photo-1541643600914-78b084683601',
    },
    {
      id: 12,
      name: 'White T-Shirt',
      price: 999,
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    },
  ]

  // BEST SALES
  const bestSales = [
    {
      id: 13,
      name: 'iPhone 15',
      price: 89999,
      image:
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569',
    },
    {
      id: 14,
      name: 'Boat Earphones',
      price: 1999,
      image:
        'https://images.unsplash.com/photo-1583394838336-acd977736f90',
    },
    {
      id: 15,
      name: 'Samsung S24',
      price: 79999,
      image:
        'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf',
    },
    {
      id: 16,
      name: 'Formal Shoes',
      price: 3499,
      image:
        'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4',
    },
    {
      id: 17,
      name: 'Mixer Grinder',
      price: 4999,
      image:
        'https://images.unsplash.com/photo-1570222094114-d054a817e56b',
    },
    {
      id: 18,
      name: 'Alexa Speaker',
      price: 5999,
      image:
        'https://images.unsplash.com/photo-1543512214-318c7553f230',
    },
  ]

  const handleCart = (product) => {
    dispatch(addToCart(product))
    toast.success('Product Added To Cart 🔥')
  }

  return (
    <div className='bg-gray-100'>

      {/* HERO SECTION */}
      <div className='h-[85vh] bg-neutral-600 text-white flex flex-col justify-center items-center text-center'>

      <h1 className='text-6xl md:text-7xl font-bold leading-tight'>
  Modern E-Commerce <br /> Store for Everyone
</h1>

<p className='mt-6 text-xl md:text-3xl text-gray-300 max-w-2xl'>
  Discover premium products at unbeatable prices. 
  Fast delivery, secure payments, and a smooth shopping experience — all in one place.
</p>


        <button
          onClick={() => navigate('/products')}
          className='bg-black text-white px-8 py-4 rounded-xl mt-8 hover:scale-105 duration-300'
        >
          Shop Now
        </button>

      </div>

      {/* FEATURES */}
      <div className='max-w-[1700px] mx-auto grid md:grid-cols-4 gap-5 py-20 px-5'>
        {features.map((item) => (
          <div
            key={item.id}
            className={`${item.bg} h-[230px] flex flex-col justify-center items-center text-center rounded-sm`}
          >
            <div className='bg-gray-100 w-14 h-14 rounded-full flex justify-center items-center text-2xl mb-6'>
              {item.icon}
            </div>

            <h1 className='text-3xl font-semibold mb-5'>
              {item.title}
            </h1>

            <p className='text-xl text-gray-700'>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* BIG DISCOUNT */}
      <div className='px-10 py-10'>
        <h1 className='text-5xl font-bold mb-10 text-center'>
          Big Discount
        </h1>

        <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-6'>
          {discountProducts.map((product) => (
            <div
              key={product.id}
              className='bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 duration-300'
            >
              <img
                src={product.image}
                className='h-52 w-full object-cover'
                alt=''
              />

              <div className='p-5'>
                <h1 className='text-xl font-bold'>
                  {product.name}
                </h1>

                <div className='flex text-yellow-500 mt-3 gap-1'>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <h2 className='text-2xl font-bold mt-4'>
                  ₹{product.price}
                </h2>

                <button
                  onClick={() => handleCart(product)}
                 className='bg-black hover:bg-gray-900 text-white w-full py-3 rounded-xl mt-5 transition'
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEW ARRIVALS */}
      <div className='px-10 py-10'>
        <h1 className='text-5xl font-bold mb-10 text-center'>
          New Arrivals
        </h1>

        <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-6'>
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className='bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 duration-300'
            >
              <img
                src={product.image}
                className='h-52 w-full object-cover'
                alt=''
              />

              <div className='p-5'>
                <h1 className='text-xl font-bold'>
                  {product.name}
                </h1>

                <div className='flex text-yellow-500 mt-3 gap-1'>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <h2 className='text-2xl font-bold mt-4'>
                  ₹{product.price}
                </h2>

                <button
                  onClick={() => handleCart(product)}
                   className='bg-black hover:bg-gray-900 text-white w-full py-3 rounded-xl mt-5 transition'
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BEST SALES */}
      <div className='px-10 py-10 pb-20'>
        <h1 className='text-5xl font-bold mb-10 text-center'>
          Best Sales
        </h1>

        <div className='grid md:grid-cols-3 lg:grid-cols-6 gap-6'>
          {bestSales.map((product) => (
            <div
              key={product.id}
              className='bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 duration-300'
            >
              <img
                src={product.image}
                className='h-52 w-full object-cover'
                alt=''
              />

              <div className='p-5'>
                <h1 className='text-xl font-bold'>
                  {product.name}
                </h1>

                <div className='flex text-yellow-500 mt-3 gap-1'>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

                <h2 className='text-2xl font-bold mt-4'>
                  ₹{product.price}
                </h2>

                <button
                  onClick={() => handleCart(product)}
                   className='bg-black hover:bg-gray-900 text-white w-full py-3 rounded-xl mt-5 transition'
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home