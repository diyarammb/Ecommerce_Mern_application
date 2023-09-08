import Link from 'next/link';

export const Card = ({ blog }) => {
  const { title, id,banner} = blog;
  return (
    <div className='blog-item'>
      <Link href={`/blog/${id}`}>
        <a className='blog-item__img'>
          <img src={`https://meeraki.com/public/${banner}`} className='js-img' alt='' />
          <span className='blog-item__date'>
            <span>April</span> 13
          </span>
        </a>
      </Link>
      <Link href={`/blog/${id}`}>
        <a className='blog-item__title'>{title}</a>
      </Link>
      <Link href={`/blog/${id}`}>
        <a className='blog-item__link'>
          Read more <i className='icon-arrow-md'></i>
        </a>
      </Link>
    </div>
  );
};
