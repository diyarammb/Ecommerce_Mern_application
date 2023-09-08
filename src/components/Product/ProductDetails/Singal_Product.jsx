import React from 'react'
import { Product_Image } from './Product_Image';
import { useContext, useEffect, useState } from 'react';
import socialData from 'data/social';
import { ReviewFrom } from '../ReviewForm/ReviewFrom';
import { CartContext } from 'pages/_app';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { useWishlistContext } from 'Context/wishlistContext';
import {BasicModal} from './BasicModal';
import { useCurrenciesContext } from 'Context/CurrenciesContext';
import { useAuthContext } from 'Context/AuthContext';

export const Singal_Product = (data) => {
    const productDetail=data.data.data.data[0];
    console.log("1",productDetail.size_variant_price[0])
    const {addtocart,buyNow,mycart,user} = useContext(CartContext);
    const {AddToWishlist,myWishlist}=useWishlistContext();
    const {authuser}=useAuthContext();
    const socialLinks = [...socialData];
    const [addedInCart, setAddedInCart] = useState(false);
  const [addInWishList, setAddInWishList] = useState(false);
  const  {currency}=useCurrenciesContext();
  const ad=Object.keys(mycart);
  const pid=parseInt(ad);


  useEffect(() => {
    if (productDetail) {
      setAddedInCart(Boolean(pid===productDetail.id));
    }
  }, []);

  useEffect(() => {
    if (productDetail) {
      setAddInWishList(Boolean(myWishlist.product_id === productDetail.id));
    }
  }, [myWishlist.product_id]);

  const [quantity, setQuantity] = useState(1);
   const total=productDetail.current_price*quantity;
   const variantPrice=productDetail.size_variant_price[0]*quantity;
  const [productSize,setProductSize]=useState(productDetail.choice_options[0].values[0]);
 

  const updatePrice=()=>{
    if(productSize==="Unstitched"){
      return (total * currency.conversionRate).toFixed(2)
    }
    else if(productSize==="Small" || productSize==="Medium" || productSize==="Large" || productSize==="X-Large"){
      return (variantPrice * currency.conversionRate).toFixed(2)
    }
    else{
       return (total * currency.conversionRate).toFixed(2)
    }
  }



  return (
    <div className="container mt-3">
    <div className='bg-white'>
      <div className='row'>
        <div className='col-xl-6 col-lg-6 mb-4'>
          <div className='CUSTOM-ZOOM'>
            <div className='row'>
            <Product_Image photos={productDetail.photos}/>
            </div>
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 tutwee'>
         <div className='text-left'>
         <h1 className="mb-2 fs-20 fw-600">
         {productDetail.name}
                    </h1>
                    <p style={{margin: "0", padding: "0"}}> <b>{productDetail.product_sku}</b> </p>
                    <div className="row align-items-center">
                        <div className="col-6">
                        </div>
                        <div className="col-6 text-right">
                           {productDetail.current_stock > 0 ? <span className="badge badge-md badge-inline badge-pill badge-success">In Stock</span>:<span className="badge badge-md badge-inline badge-pill badge-danger">Out of Stock</span>}
                          </div>
                          <div className='mt-2' dangerouslySetInnerHTML={{__html: productDetail.description}}></div>
   <div className='contacts-info__social mt-2'>
        <span>Share here:</span>
        <ul>
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a href={social.path}>
                <i className={social.icon ? social.icon : ''}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
                         
                        <div className="row no-gutters my-2">
                            <div className="col-sm-8">
                                <div className="">
                                    <strong className="h2 fw-600 text-primary">
                                    {productDetail.main_price}
                                    </strong>
                                </div>
                            </div>
                        </div>       
                    </div>
                    <form id="option-choice-form">
                         {Object.keys(productDetail.choice_options).map((item)=>{
                          return(
                            <div className='product-info__color' key={productDetail.choice_options[item].title}>
                             <span>Size:</span>
                             <div className='col-sm-12'>
                            <div className='d-md-flex align-items-center py-md-2 mb-md-2 smalls'>
                           {productDetail.choice_options[item].values[0] && <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={productDetail.choice_options[item].values[0]} onChange={(e)=>setProductSize(e.target.value)} defaultChecked/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{productDetail.choice_options[item].values[0]}</label>
                    </div></div> }
                    {productDetail.choice_options[item].values[1] && <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={productDetail.choice_options[item].values[1]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{productDetail.choice_options[item].values[1]}</label>
                    </div></div> }
                    {productDetail.choice_options[item].values[2] &&   <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={productDetail.choice_options[item].values[2]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{productDetail.choice_options[item].values[2]}</label>
                    </div></div> }
                    {productDetail.choice_options[item].values[3] &&   <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={productDetail.choice_options[item].values[3]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{productDetail.choice_options[item].values[3]}</label>
                    </div></div> }
                  {productDetail.choice_options[item].values[4] && <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={productDetail.choice_options[item].values[4]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{productDetail.choice_options[item].values[4]}</label>
                    </div></div> }
                             </div></div>
                            </div>
                          )
                         })}
                        <BasicModal/>
                        <div className="row no-gutters">
                            <div className="col-sm-2">
                                <div className="opacity-50 my-2">Quantity:</div>
                            </div>
                            <div className="col-sm-10">
                            <div className='counter-box'>
            <span
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
              className='counter-link counter-link__prev'
            >
              <i className='icon-arrow'></i>
            </span>
            <input
              type='text'
              className='counter-input'
              value={quantity}/>
            <span
              onClick={() => setQuantity(quantity + 1)}
              className='counter-link counter-link__next'
            >
              <i className='icon-arrow'></i>
            </span>
          </div>
                            </div>
                        </div>
                        <div className="row no-gutters pb-3 mt-3" id="chosen_price_div">
                            <div className="col-sm-3 mt-2">
                                <div className="opacity-50 my-2">Total Price:</div>
                            </div>
                            <div className="col-sm-9">
                                <div className="product-price mt-0">
                                    <strong id="chosen_price" className="h4 fw-600 text-primary">{currency.symbol}{updatePrice()}</strong>  
                                </div>
                            </div>
                        </div>
                        </form>
                        <div className="mt-0" style={{display: "flex", alignItems: "center"}}>
                        <div className='product-buttons mt-0'>
        <button
          disabled={addedInCart}
          onClick={() =>{addtocart(productDetail.id,productDetail.name,productSize,productDetail.current_price,quantity,productDetail.thumbnail_image,productDetail.product_sku,productDetail.current_stock,productDetail.stroked_price,productDetail.base_price)}}
          className='btn-cartProductDetail'
        >
          <i className='icon-cart'></i> cart
        </button>
        <button className='btn btn-icon' onClick={()=>{buyNow(productDetail.id,productDetail.name,productSize,productDetail.current_price,quantity,productDetail.thumbnail_image,productDetail.product_sku,productDetail.current_stock,productDetail.stroked_price,productDetail.base_price)}}>
        <AiOutlineShoppingCart className='mx-1' style={{fontSize:"16px",fontWeight:"400"}}/> Buy Now
        </button>
        <button className='btn-grey'  disabled={addInWishList} onClick={() => AddToWishlist(productDetail.id,authuser.id,user.value)}  style={{backgroundColor:"#ffff",color:"#999999",border:"none"}}>
          <AiFillHeart className='btn-heart'/>
        </button>
      </div>
                    </div>
                    <div className="d-table width-100 mt-3">
                </div>
         </div>
        </div>
      </div>
    </div>
  </div>
  )
}
