import Link from 'next/link';

export const Card = ({ category }) => {
  const { category_name, thumbnail_image,name,id} = category;
  return (
    <Link href={`/SingalProduct/${id}`}>
      <a className='top-categories__item'>
        <img src={`https://meeraki.com/public/${thumbnail_image}`} className='js-img' alt='' />
        <div className='top-categories__item-hover'>
          <h5>{category_name}</h5>
          <span>{name}</span>
          <i className='icon-arrow-lg'></i>
        </div>
      </a>
    </Link>
  );
};
