function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4">SHELBY'S E-COM</h2>
          <p className="text-sm text-gray-300 leading-6">
            Shelby’s Ecommerce brings you a wide range of stylish and affordable products.
We focus on quality, convenience, and customer satisfaction in every order.
Your happiness is our priority—shop with confidence every time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Our Cares</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Track Your Order</li>
            <li>Corporate & Bulk Purchasing</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300 leading-6">
            70 Avenue Street,<br />
            Beasnt Nagar, CH ,600041<br />
            CHENNAI
          </p>

          <div className="mt-4 text-sm text-gray-300 space-y-1">
            <p>Email: shelbysecom@gmail.com</p>
            <p>Phone: +91 7843580867</p>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SHELBY'S E-COM. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;