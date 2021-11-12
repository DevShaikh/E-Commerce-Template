// Site Data
import Products from '../src/data/Products.json'

// SECTIONS COMPONENTS
import Header from './components/sections/Header'
import HeroSearch from './components/sections/HeroSearch'
import FeaturedProducts from './components/sections/FeaturedProducts'
import CategoriesCarousel from './components/sections/CategoriesCarousel'
import Banner from './components/sections/Banner'
import LatestProducts from './components/sections/LatestProducts'
import Blogs from './components/sections/Blogs'

// COMPONENTS
import MobileNav from './components/MobileNav'
import Footer from './components/sections/Footer'

const App = () => {
  return (
    <div className='App'>
      {/* Mobile Nav */}
      <MobileNav />

      {/* SECTION - Header */}
      <Header />

      {/* SECTION - Hero Search */}
      <HeroSearch />

      {/* SECTION - Categories Carousel */}
      <CategoriesCarousel />

      {/* SECTION - Featured Products */}
      <FeaturedProducts products={Products.featured} />

      {/* SECTION - Banner */}
      <Banner />

      {/* SECTION - Latest Products */}
      <LatestProducts />

      {/* SECTION - Blogs */}
      <Blogs />

      {/* SECTION - Footer */}
      <Footer />
    </div>
  )
}

export default App
