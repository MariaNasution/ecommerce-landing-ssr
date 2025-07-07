interface Product {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  category: string
  isNew?: boolean
  isHot?: boolean
  discount?: number
}

interface FeaturedSectionProps {
  products: Product[]
}

export default function FeaturedSection({ products }: FeaturedSectionProps) {
  return (
    <section className="bg-gradient-to-r from-amber-50 via-cream-50 to-orange-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Featured Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-6"></div>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Our best-selling customer favorites
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className={`group relative ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 h-full">
                {/* Special Badge for First Product */}
                {index === 0 && (
                  <div className="absolute top-6 left-6 z-10 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                    🏆 Best Seller
                  </div>
                )}

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                      index === 0 ? 'h-80 lg:h-96' : 'h-64'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                  <div className="text-xs text-amber-600 font-medium mb-2 uppercase tracking-wide">
                    {product.category}
                  </div>
                  
                  <h3 className={`font-bold text-amber-900 mb-3 group-hover:text-amber-700 transition-colors ${
                    index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                  }`}>
                    {product.name}
                  </h3>
                  
                  <p className={`text-amber-700 mb-4 ${index === 0 ? 'text-base lg:text-lg' : 'text-sm'}`}>
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-amber-600 font-medium">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold text-amber-900 ${index === 0 ? 'text-3xl' : 'text-2xl'}`}>
                        Rp{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          Rp{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {product.discount && (
                      <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                        Save {product.discount}%
                      </div>
                    )}
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    index === 0 ? 'py-4 text-lg' : 'py-3'
                  }`}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}