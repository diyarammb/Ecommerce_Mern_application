import Link from 'next/link';

export const Card1 = ({ category }) => {
  const { image_title, image_url} = category;
  return (
    <Link href={`/categories`}>
      <a className='top-categories__item'>
        <img src={image_url} className='js-img' alt='' />
        <div className='top-categories__item-hover'>
          <h5>{image_title}</h5>
          <span></span>
          <i className='icon-arrow-lg'></i>
        </div>
      </a>
    </Link>
  );
};