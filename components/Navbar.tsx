export default function Navbar() {
  return (
    <nav className="bg-cream-50 backdrop-blur-sm border-b border-cream-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            LuxeMart
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-amber-800 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#categories" className="text-amber-800 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
            Categories
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#products" className="text-amber-800 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#Footer" className="text-amber-800 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Shop Now
          </button>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-amber-800 hover:text-amber-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}