import Categories from '../Categories'
import ContactBox from '../ContactBox'
import SearchBar from '../SearchBar'

const HeroSearch = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <Categories />
          </div>
          <div className='col-lg-9'>
            <div className='hero__search'>
              <SearchBar />
              <ContactBox />
            </div>
            <div
              className='hero__item set-bg'
              data-setbg='assets/img/hero/banner.jpg'
            >
              <div className='hero__text'>
                <span>FRUIT FRESH</span>
                <h2>
                  Vegetable <br />
                  100% Organic
                </h2>
                <p>Free Pickup and Delivery Available</p>
                <a href='#' className='primary-btn'>
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSearch
