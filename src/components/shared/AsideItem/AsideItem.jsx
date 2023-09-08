import { useCurrenciesContext } from 'Context/CurrenciesContext';
import Link from 'next/link';

export const AsideItem = ({ aside }) => {
  const { id, thumbnail_image, name, current_price, star } = aside;
  const  {currency}=useCurrenciesContext();
  const price = (current_price * currency.conversionRate).toFixed(2);
  return (
    <>
      {/* <!-- BEING SHOP ASIDE CARD  --> */}
      <Link href={`/product/${id}`}>
        <a className='shop-aside__item-product'>
          <div className='shop-aside__item-product-img'>
            <img src={`https://meeraki.com/public/${thumbnail_image}`} className='js-img' alt='' />
          </div>
          <div className='shop-aside__item-product-info'>
            <span className='shop-aside__item-product-title'>{name}</span>
            <span className='shop-aside__item-product-price'>{currency.symbol}{price}</span>
            <ul className='star-rating'>
              {[...Array(star)].map((star, index) => {
                <li key={index}>
                  <i className='icon-star'></i>
                </li>;
              })}
            </ul>
          </div>
        </a>
      </Link>
      {/* <!-- SHOP ASIDE CARD EOF  --> */}
    </>
  );
};
