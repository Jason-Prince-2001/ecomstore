function Filters({ category, setCategory, price, setPrice }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">

      <h1 className="text-2xl font-bold mb-6 text-gray-800">
         Filters
      </h1>
      
      {/* category */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2 text-gray-700">
          Category
        </h2>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-xl 
                     bg-gray-50 outline-none 
                     focus:ring-2 focus:ring-black focus:border-black"
        >
          <option value="All">All</option>
          <option value="Fashion">Fashion</option>
          <option value="Electronics">Electronics</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Laptops">Laptops</option>
          <option value="Shoes">Shoes</option>
          <option value="Gadgets">Gadgets</option>
          <option value="Bags">Bags</option>
          <option value="Perfumes">Perfumes</option>
        </select>
      </div>

      {/* PRICE */}
      <div>
        <h2 className="font-semibold mb-3 text-gray-700">
          Price Range
        </h2>

        <input
          type="range"
          min="1000"
          max="100000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-black cursor-pointer"
        />

        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>₹1,000</span>
          <span className="font-bold text-black">
            ₹{price}
          </span>
          <span>₹1,00,000</span>
        </div>
      </div>

    </div>
  );
}

export default Filters;