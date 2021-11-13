// Site Data
import Products from '../src/data/Products.json'
import WebInfo from '../src/data/WebInfo.json'

// SECTIONS COMPONENTS
import Header from './components/sections/Header'
import HeroSearch from './components/sections/HeroSearch'
import FeaturedProducts from './components/sections/FeaturedProducts'
import CategoriesCarousel from './components/sections/CategoriesCarousel'
import Banner from './components/sections/Banner'
import ProductsCarousel from './components/sections/ProductsCarousel'
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
      <Header webInfo={WebInfo} />

      {/* SECTION - Hero Search */}
      <HeroSearch webInfo={WebInfo} />

      {/* SECTION - Categories Carousel */}
      <CategoriesCarousel />

      {/* SECTION - Featured Products */}
      <FeaturedProducts products={Products.featured} />

      {/* SECTION - Banner */}
      <Banner />

      {/* SECTION - Latest Products */}
      <ProductsCarousel products={Products} />

      {/* SECTION - Blogs */}
      <Blogs />

      {/* SECTION - Footer */}
      <Footer webInfo={WebInfo} />
    </div>
  )
}

export default App
