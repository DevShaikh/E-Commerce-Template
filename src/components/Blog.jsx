const Blog = ({ post }) => {
  return (
    <div className='blog__item'>
      <div className='blog__item__pic'>
        <img src={post.image} alt='' />
      </div>
      <div className='blog__item__text'>
        <ul>
          <li>
            <i className='fa fa-calendar-o'></i> {post.date}
          </li>
          <li>
            <i className='fa fa-comment-o'></i> {post.commentsCount}
          </li>
        </ul>
        <h5>
          <a href='#'>{post.title}</a>
        </h5>
        <p>{post.description}</p>
      </div>
    </div>
  )
}

export default Blog
