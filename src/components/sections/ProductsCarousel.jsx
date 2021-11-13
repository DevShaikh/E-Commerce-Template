import ProductSmall from '../ProductSmall'

const ProductsCarousel = ({ products }) => {
  return (
    <section className='latest-product spad'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <div className='latest-product__text'>
              <h4>Latest Products</h4>
              <div className='latest-product__slider owl-carousel'>
                {[...Array(2).keys()].map((item, key) => (
                  <div className='latest-prdouct__slider__item' key={key}>
                    {products.latest.map((item, key) => (
                      <ProductSmall item={item} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='latest-product__text'>
              <h4>Top Rated Products</h4>
              <div className='latest-product__slider owl-carousel'>
                {[...Array(2).keys()].map((item, key) => (
                  <div className='latest-prdouct__slider__item' key={key}>
                    {products.topRated.map((item, key) => (
                      <ProductSmall item={item} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6'>
            <div className='latest-product__text'>
              <h4>Review Products</h4>
              <div className='latest-product__slider owl-carousel'>
                {[...Array(2).keys()].map((item, key) => (
                  <div className='latest-prdouct__slider__item' key={key}>
                    {products.review.map((item, key) => (
                      <ProductSmall item={item} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsCarousel
