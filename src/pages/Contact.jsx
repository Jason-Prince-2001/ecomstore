import { useState } from "react";

function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-10 relative">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/*  INFO SECTION */}
        <div>
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            Get in Touch!
          </h1>

          <p className="text-lg text-gray-600 leading-8">
            Have questions about products, orders, or payments?  
            Our support team is available 24/7 to help you.
          </p>

          <div className="mt-10 space-y-6">

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">📍 Address</h2>
              <p className="text-gray-600 mt-2">Chennai, Tamil Nadu, India</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">📞 Phone</h2>
              <p className="text-gray-600 mt-2">+91 7843580867</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">📧 Email</h2>
              <p className="text-gray-600 mt-2">shelbysecom@gmail.com</p>
            </div>

          </div>
        </div>

        {/*  FORM SECTION */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">

          <h2 className="text-3xl font-bold mb-6">Send Message</h2>

          <input
            type="text"
            placeholder="Enter Name"
            className="border p-4 rounded-xl w-full mb-4 focus:ring-2 focus:ring-black outline-none"
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="border p-4 rounded-xl w-full mb-4 focus:ring-2 focus:ring-black outline-none"
          />

          <textarea
            placeholder="Enter Message"
            className="border p-4 rounded-xl w-full mb-6 h-40 focus:ring-2 focus:ring-black outline-none"
          ></textarea>

          <button
            onClick={handleSubmit}
            className="bg-black text-white w-full py-4 rounded-xl hover:bg-gray-800 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </div>

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center animate-bounce">
            <h2 className="text-2xl font-bold text-green-600">
              ✅ Successfully Submitted!
            </h2>
            <p className="text-gray-600 mt-2">
              We will contact you soon.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

export default Contact;