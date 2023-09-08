import { useCurrenciesContext } from 'Context/CurrenciesContext';
import Link from 'next/link';

export const Card = ({ order }) => {
  const {   name,
    image,
    id,
    product_sku,
    quantity,
    price} = order;
    
    const  {currency}=useCurrenciesContext();
    const product_price=price * quantity;
    const newprice = ( product_price * currency.conversionRate).toFixed(2);
  return (
    <>
      {/* <!-- BEING ORDER ITEM CARD --> */}
      <div className='checkout-order__item' key={name}>
        <Link href={`/SingalProduct/${id}`}>
          <a className='checkout-order__item-img'>
            <img src={`https://meeraki.com/public/${image}`} className='js-img' alt='' />
          </a>
        </Link>
        <div className='checkout-order__item-info'>
          <Link href={`/SingalProduct/${id}`}>
            <a className='title6'>
              {name} <span>x{quantity}</span>
            </a>
          </Link>
          <span className='checkout-order__item-price'>
            {currency.symbol}{newprice}
          </span>
          <span className='checkout-order__item-num'>SKU: {product_sku}</span>
        </div>
      </div>
      {/* <!-- ORDER ITEM CARD EOF --> */}
    </>
  );
};
