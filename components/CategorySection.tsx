export default function CategorySection() {
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      description: 'Latest gadgets and tech',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop',
      icon: '📱',
      count: '120+ Products'
    },
    {
      id: 2,
      name: 'Fashion',
      description: 'Trendy clothing and accessories',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      icon: '👗',
      count: '85+ Products'
    },
    {
      id: 3,
      name: 'Home & Living',
      description: 'Beautiful home decor',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      icon: '🏠',
      count: '95+ Products'
    },
    {
      id: 4,
      name: 'Sports',
      description: 'Athletic gear and equipment',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      icon: '⚽',
      count: '70+ Products'
    }
  ]

  return (
    <section id="categories" className="py-20 px-6 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Explore Categories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-6"></div>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Discover your favorite products in a wide range of curated categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                    {category.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-amber-700 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-600 font-medium text-sm">
                      {category.count}
                    </span>
                    <span className="text-amber-500 group-hover:translate-x-1 transition-transform duration-300">
                      ➜
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

                    