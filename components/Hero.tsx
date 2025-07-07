export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-cream-100 via-amber-50 to-orange-50 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full text-amber-800 font-medium mb-6">
              ✨ Premium Quality Guaranteed
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-amber-900 mb-6 leading-tight">
              Discover
              <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Luxury
              </span>
              <span className="block text-4xl lg:text-5xl text-amber-800">
                in Every Detail
              </span>
            </h1>
            
            <p className="text-xl text-amber-700 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Explore a curated collection of premium products tailored for your modern lifestyle. Top quality at affordable prices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#products" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Explore Collection
              </a>
              <a href="#about" className="border-2 border-amber-500 text-amber-700 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300">
                Learn More
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">10K+</div>
                <div className="text-amber-700">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">500+</div>
                <div className="text-amber-700">Premium Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-900">4.9★</div>
                <div className="text-amber-700">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Main Product */}
              <div className="col-span-2 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" 
                     alt="Premium Headphones" 
                     className="w-full h-48 object-cover rounded-2xl mb-4" />
                <h3 className="text-xl font-bold text-amber-900 mb-2">Premium Headphones</h3>
                <p className="text-amber-700 text-sm mb-4">Wireless noise-canceling technology</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">Rp 2.499.000</span>
                  <span className="text-yellow-400">★★★★★</span>
                </div>
              </div>
              
              {/* Secondary Products */}
              <div className="bg-white rounded-2xl shadow-xl p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=150&fit=crop" 
                     alt="Smart Watch" 
                     className="w-full h-32 object-cover rounded-xl mb-2" />
                <h4 className="font-bold text-amber-900 text-sm">Smart Watch</h4>
                <p className="text-amber-600 font-semibold">Rp 1.899.000</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=150&fit=crop" 
                     alt="Leather Bag" 
                     className="w-full h-32 object-cover rounded-xl mb-2" />
                <h4 className="font-bold text-amber-900 text-sm">Leather Bag</h4>
                <p className="text-amber-600 font-semibold">Rp 1.299.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}