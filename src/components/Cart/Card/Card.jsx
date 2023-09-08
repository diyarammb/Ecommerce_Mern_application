import Link from 'next/link';
import {FiTrash2} from "react-icons/fi";

export const Card = ({ cart, onChangeQuantity }) => {
  const {
    name,
    thumbnail_image,
    id,
    current_stock,
    product_sku,
    stroked_price,
    base_price,
    quantity,
    calculable_price,
    currency_symbol
  } = cart;
  return (
    <>
      <div className='cart-table__row'>
        <div className='cart-table__col'>
          <Link href={`/SingalProduct/${id}`}>
            <a className='cart-table__img'>
              <img src={`https://meeraki.com/public/${thumbnail_image}`} className='js-img' alt='' />
            </a>
          </Link>
          <div className='cart-table__info'>
            <Link href={`/SingalProduct/${id}`}>
              <a className='title5'>{name}</a>
            </Link>
            {current_stock && (
              <span className='cart-table__info-stock'>in stock</span>
            )}
            <span className='cart-table__info-num'>SKU:{product_sku}</span>
          </div>
        </div>
        <div className='cart-table__col'>
          {stroked_price ? (
            <span className='cart-table__price'>
              <span>{stroked_price}</span>{base_price}
            </span>
          ) : (
            <span className='cart-table__price'>{base_price}</span>
          )}
        </div>
        <div className='cart-table__col'>
        <span className='cart-table__price'>{base_price}</span>
        </div>
        <div className='cart-table__col'>
          <div className='cart-table__quantity'>
            <div className='counter-box'>
              <span
                onClick={() => onChangeQuantity('decrement', quantity)}
                className='counter-link counter-link__prev'
              >
                <i className='icon-arrow'></i>
              </span>
              <input
                type='text'
                className='counter-input'
                disabled
                value={quantity}
              />
              <span
                onClick={() => onChangeQuantity('increment', quantity)}
                className='counter-link counter-link__next'
              >
                <i className='icon-arrow'></i>
              </span>
            </div>
          </div>
        </div>
        <div className='cart-table__col text-center'>
          <span className='cart-table__total' style={{fontSize:"1rem"}}>
            {currency_symbol}{(calculable_price * quantity).toFixed(2)}
          </span>
        </div>
        <div className='cart-table__col text-center'>
         <button className='btnTrash'><FiTrash2/></button>
        </div>
      </div>
    </>
  );
};
