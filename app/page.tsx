import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import products from '@/data/products'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CategorySection from '@/components/CategorySection'
import FeaturedSection from '@/components/FeaturedSection'


export default function HomePage() {
  const featuredProducts = products.slice(0, 3)

  return (
    <>
      <Navbar />
      <Hero />
      
      {/* Featured Products */}
      <FeaturedSection products={featuredProducts} />
      
      {/* Category Section */}
      <CategorySection />
      
      {/* All Products */}
      <section id="products" className="px-6 py-20 bg-gradient-to-b from-cream-50 to-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Premium Collection
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-6"></div>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto leading-relaxed">
              Discover top curated products tailored for your modern lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}