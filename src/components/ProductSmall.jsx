const ProductSmall = ({ item }) => {
  return (
    <a href='#' className='latest-product__item'>
      <div className='latest-product__item__pic'>
        <img src={item.image} alt='' />
      </div>
      <div className='latest-product__item__text'>
        <h6>{item.title}</h6>
        <span>${item.price}</span>
      </div>
    </a>
  )
}

export default ProductSmall
