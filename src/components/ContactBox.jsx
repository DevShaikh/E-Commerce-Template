const ContactBox = ({ webInfo }) => {
  return (
    <div className='hero__search__phone'>
      <div className='hero__search__phone__icon'>
        <i className='fa fa-phone'></i>
      </div>
      <div className='hero__search__phone__text'>
        <h5>{webInfo.phone}</h5>
        <span>support 24/7 time</span>
      </div>
    </div>
  )
}

export default ContactBox
