import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import products from "../data/products.js";

function Products() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState(100000)


  const filteredProducts = products.filter((product) => {
    return (
      (product?.name || '')
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (category === 'All' || product?.category === category) &&
      product?.price <= price
    )
  })

  return (
    <div className='min-h-screen bg-gray-100 p-10'>

      <h1 className='text-4xl font-bold text-center mb-8'>
        Trending Products
      </h1>

      {/* FILTERS */}
      <div className='grid md:grid-cols-3 gap-5 mb-10'>

        {/* SEARCH */}
        <input
          type='text'
          placeholder='Search Products...'
          className='border p-3 rounded-xl'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* CATEGORY */}
        <select
          className='border p-3 rounded-xl bg-white'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Shoes">Shoes</option>
          <option value="Watch">Watch</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Laptops">Laptops</option>
          <option value="Gadgets">Gadgets</option>
          <option value="TV">TV</option>
          <option value="Bags">Bags</option>
          <option value="Perfumes">Perfumes</option>
        </select>

        {/* PRICE */}
        <div className='bg-white p-3 rounded-xl'>
          <input
            type='range'
            min='1000'
            max='100000'
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className='w-full'
          />

          <p className='text-center font-bold mt-2'>
            Max Price: ₹{price}
          </p>
        </div>

      </div>

      {/* PRODUCTS GRID */}
      <div className='grid md:grid-cols-4 gap-6'>

        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className='col-span-4 text-center text-gray-500 text-lg'>
            No products found 😢
          </p>
        )}

      </div>

    </div>
  )
}

export default Products