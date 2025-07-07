export default function Footer() {
  return (
    <footer id="Footer" className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">LuxeMart</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get exclusive deals, product launches, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full px-6 py-3 bg-gray-900 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
              <button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-8 rounded-full hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                LuxeMart
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your premium destination for quality lifestyle essentials. Experience excellence in every purchase.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors">
                <span className="text-lg">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                <span className="text-lg">📺</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Categories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Offers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Best Sellers</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <span>📍</span>
                <span>Jl. Sudirman No. 123, Jakarta</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>📞</span>
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>📧</span>
                <span>hello@luxemart.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>🕒</span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © 2025 LuxeMart. All rights reserved. Made By Maria Laura Nasution
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
