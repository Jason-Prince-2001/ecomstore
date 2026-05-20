function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
            alt="Laptop"
            className="w-full h-[450px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="bg-white p-10 rounded-3xl shadow-lg">

          <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
            About Shelby’s Ecommerce
          </h1>

          <p className="text-lg font-semibold leading-8 text-gray-700">
            Welcome to <span className="font-extrabold text-black">Shelby’s Ecommerce</span>,
            your trusted online destination for premium laptops and electronics.  
            We provide high-performance <span className="font-bold">laptops, gadgets, and accessories</span>
            at the best prices. Our mission is to deliver a smooth, secure, and reliable shopping experience.  
            Every product is carefully selected for quality and performance.  
            We ensure safe payments, fast delivery, and excellent customer support.  
            Shelby’s Ecommerce makes online shopping simple, modern, and trustworthy.
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;