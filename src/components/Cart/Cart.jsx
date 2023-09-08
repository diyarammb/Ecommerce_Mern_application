import { Card } from './Card/Card';
import { CartContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import {BsArrowLeft} from "react-icons/bs";
import router from 'next/router';
import { AddToCart } from './addToCart';
import { FiTrash2 } from 'react-icons/fi';
import { useCurrenciesContext } from 'Context/CurrenciesContext';

export const Cart = ({onNext}) => {
  const {removeFromCart,mycart,addtocart,clearcart,subtotal} = useContext(CartContext);
  const  {currency}=useCurrenciesContext();
  console.log("subtotal",subtotal);
  const newprice = (subtotal * currency.conversionRate).toFixed(2);

  const { cart, setCart } = useContext(CartContext);
 

  /*const handleProductQuantity = (change, quantity, id) => {
    console.log(change, quantity, id);
    if (change === 'increment') {
      cart.find((item) => item.id === id).quantity = quantity + 1;
      setCount(count + 1);
    }
    if (change === 'decrement' && quantity > 1) {
      cart.find((item) => item.id === id).quantity = quantity - 1;
      setCount(count + 1);
    }
  };

  useEffect(() => {
    setCart(cart);
  }, [cart, count]);*/

  return (
    <>
      {/* <!-- BEGIN CART --> */}
      <div className='cart'>
        <div className='wrapper'>
          <div className='cart-table'>
            <div className='cart-table__box'>
              <div className='cart-table__row cart-table__row-head'>
                <div className='cart-table__col'>Product</div>
                <div className='cart-table__col'>Price</div>
                <div className='cart-table__col text-center'>Tax</div>
                <div className='cart-table__col'>Size</div>
                <div className='cart-table__col'>Quantity</div>
                <div className='cart-table__col text-center'>Total</div>
                <div className='cart-table__col text-center'>Remove</div>
              </div>
              {Object.keys(mycart).length==0 && <div className='cart-table__row' style={{justifyContent:"center"}}>
              <div className='cart-table__col h2' style={{justifyContent:"center"}}>Your cart is empty!</div></div>}
              {Object.keys(mycart).map((cart)=>{ 
                 const value=mycart[cart].quantity
                 const addprice=(mycart[cart].price *currency.conversionRate).toFixed(2)
                 console.log("addprice",addprice)
                 switch (value) {
  case 2:
    addprice=((mycart[cart].price*2)*currency.conversionRate).toFixed(2)
    console.log("addprice 61",addprice)
    break;

  case 3:
    addprice=((mycart[cart].price*3)*currency.conversionRate).toFixed(2)
    console.log("addprice 66",addprice)
    break;
  case 4:
    addprice=((mycart[cart].price*4) *currency.conversionRate).toFixed(2)
    console.log("addprice 70",addprice)
    break;
  case 5:
    addprice=((mycart[cart].price*5)*currency.conversionRate).toFixed(2)
    break;
  case 6:
    addprice=((mycart[cart].price*6)*currency.conversionRate).toFixed(2)
    break;
  case 7:
    addprice=((mycart[cart].price*7)*currency.conversionRate).toFixed(2)
    break;
  case 8:
    addprice=((mycart[cart].price*8)*currency.conversionRate).toFixed(2)
    break;
  case 9:
    addprice=((mycart[cart].price*9)*currency.conversionRate).toFixed(2)
    break;
  case 10:
    addprice=((mycart[cart].price*10)*currency.conversionRate).toFixed(2)
    break;
    case 11:
    addprice=((mycart[cart].price*11)*currency.conversionRate).toFixed(2)
    break;
  case 12:
    addprice=((mycart[cart].price*12)*currency.conversionRate).toFixed(2)
    break;
  default:
    addprice=(mycart[cart].price*currency.conversionRate).toFixed(2)
}
                return(
                  <div className='cart-table__row' key={cart}>
        <div className='cart-table__col'>
          <Link href={`/SingalProduct/${cart}`}>
            <a className='cart-table__img'>
              <img src={`https://meeraki.com/public/${mycart[cart].image}`} className='js-img' alt='' />
            </a>
          </Link>
          <div className='cart-table__info'>
            <Link href={`/SingalProduct/${cart}`}>
              <a className='title5'>{mycart[cart].name}</a>
            </Link>
            {mycart[cart].current_stock && (
              <span className='cart-table__info-stock'>in stock</span>
            )}
            <span className='cart-table__info-num'>SKU:{mycart[cart].product_sku}</span>
          </div>
        </div>
        <div className='cart-table__col'>
          {mycart[cart].stroked_price ? (
            <span className='cart-table__price'>
              <span>{mycart[cart].stroked_price}</span>{mycart[cart].base_price}
            </span>
          ) : (
            <span className='cart-table__price'>{mycart[cart].base_price}</span>
          )}
        </div>
        <div className='cart-table__col text-center'>
        <span className='cart-table__price'>{mycart[cart].base_price}</span>
        </div>
        <div className='cart-table__col'>
        <span className='cart-table__price'>{mycart[cart].size}</span>
        </div>
        <div className='cart-table__col'>
          <div className='cart-table__quantity'>
            <div className='counter-box'>
              <span
                className='counter-link counter-link__prev'
                onClick={()=>{removeFromCart(cart,mycart[cart].name,mycart[cart].price,mycart[cart].size,1,mycart[cart].image,mycart[cart].product_sku,mycart[cart].current_stock,mycart[cart].stroked_price,mycart[cart].base_price)}}
              >
                <i className='icon-arrow'></i>
              </span>
               <p className='counter-input' style={{width: "36px",height: "27px",color: "#222222",textAlign: "center"}}>{mycart[cart].quantity}</p>
              <span
                className='counter-link counter-link__next'
                onClick={() =>{addtocart(cart,mycart[cart].name,mycart[cart].price,mycart[cart].size,1,mycart[cart].image,mycart[cart].product_sku,mycart[cart].current_stock,mycart[cart].stroked_price,mycart[cart].base_price)}}
              >
                <i className='icon-arrow'></i>
              </span>
            </div>
          </div>
        </div>
        <div className='cart-table__col text-center'>
        <span className='cart-table__total mx-2' style={{fontSize:"1rem"}}>  
          {currency.symbol}{addprice}
          </span>
        </div>
        <div className='cart-table__col text-center'>
         <button className='btnTrash'  onClick={()=>{removeFromCart(cart,mycart[cart].name,mycart[cart].price,mycart[cart].size,1,mycart[cart].image,mycart[cart].product_sku,mycart[cart].current_stock,mycart[cart].stroked_price,mycart[cart].base_price)}}><FiTrash2/></button>
        </div>
      </div>
                )
              })}
              {/*{cart.map((cart) => (
                <Card
                  onChangeQuantity={(change, quantity) =>
                    handleProductQuantity(change, quantity, cart.id)
                  }
                  key={cart.id}
                  cart={cart}
                />
              ))}*/}
            </div>
          </div>
          <div className="px-3 py-2 mb-4 d-flex justify-content-between">
                            <span className="opacity-60 fs-15">Subtotal</span>
                            <span className="fw-600 fs-17">{currency.symbol}{newprice}</span>
                        </div>
          <div className='cart-bottom'>
            <div className='cart-bottom__promo'>
            <button className='btn btn-grey' onClick={() => router.push('/')}>
            <BsArrowLeft style={{fontSize:"1rem",marginRight:"10px"}}/>
            Return to shop
                  </button>
            </div>
           
                <button className='btn' onClick={onNext} style={{lineHeight:"60px"}}>Continue to Delivery Information</button>
           
          </div>
        </div>
      </div>
      {/* <!-- CART EOF   --> */}
    </>
  );
};
