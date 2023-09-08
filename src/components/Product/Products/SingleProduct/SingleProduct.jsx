import { useCurrenciesContext } from 'Context/CurrenciesContext';
import Link from 'next/link';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from 'pages/_app';
import { useContext } from 'react';
import { useWishlistContext } from 'Context/wishlistContext';
import { useAuthContext } from 'Context/AuthContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const SingleProduct = ({
  product,
  addedInCart,
  addInWishList
}) => {
  const { name, thumbnail_image,base_price,id,category_name,current_price,product_sku,current_stock,variant} = product;
  const  {currency}=useCurrenciesContext();
  const { addtocart,buyNow,user} = useContext(CartContext);
  const {AddToWishlist}=useWishlistContext();
  const [openSingle, setOpenSingle] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleOpen = () => setOpenSingle(true);
  const handleClose = () => setOpenSingle(false);
  const [productSize,setProductSize]=useState(variant[0].values[0]);
  const newprice=current_price*quantity;
  const price = (newprice * currency.conversionRate).toFixed(2);
  const {authuser}=useAuthContext();
 

  return (
    <>
      {/* <!-- BEING SINGLE PRODUCT ITEM --> */}
      <div className='products-item' key={name}>
        <div className='products-item__type'>
          {category_name && <span className='products-item__sale'>{category_name}</span>}
        </div>
        <div className='products-item__img'>
          <img src={`https://meeraki.com/public/${thumbnail_image}`} className='js-img' alt='' />
          <div className='products-item__hover'>
            <Link href={`/SingalProduct/${id}`}>
              <a>
                <i className='icon-search'></i>
              </a>
            </Link>
            <div className='products-item__hover-values'>
              <button disabled={addInWishList}
                className={`addList ${addInWishList ? 'added' : ''}`} onClick={() => AddToWishlist(id,authuser.id,user.value)}>
                <i className='icon-heart'></i>
              </button>
              <div>
      <Button onClick={handleOpen}><i className='icon-cart'></i></Button>
      <Modal
        open={openSingle}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{zIndex:"2000"}}
      >
        <Box sx={style}>
        <div className="container mt-3">
            <div className='bg-white'>
              <div className='row'>
                <div className='col-xl-5 col-lg-5 mb-4'>
                <div className='products-item'>
        <div className='products-item__type'>
          {category_name && <span className='products-item__sale'>{category_name}</span>}
        </div>
        <div className='products-item__img'>
          <img src={`https://meeraki.com/public/${thumbnail_image}`} className='js-img' alt='' />
          </div>
          </div>
                </div>
                <div className='col-xl-7 col-lg-7 tutwee'>
                 <div className='text-left'>
                 <h1 className="mb-2 fs-20 fw-600">
                 {name}
                            </h1>
                            <p style={{margin: "0", padding: "0"}}> <b>{product_sku}</b> </p>
                            <div className="row align-items-center">
                                <div className="col-6">
                                </div>
                                <div className="col-6 text-right">
                                {current_stock > 0 ? <span className="badge badge-md badge-inline badge-pill badge-success">In Stock</span>:<span className="badge badge-md badge-inline badge-pill badge-danger">Out of Stock</span>}
                                  </div>
                                  <div className="row align-items-center">
                                    <div className="row no-gutters mt-1 mb-2">
                                    <div className="col-sm-2">
                                        <div className="opacity-50 my-2">Price:</div>
                                    </div>
                                    <div className="col-sm-10">
                                    <del className="fs-20 opacity-60"> 
                                            {base_price}
                                            </del>   
                                    </div>
                                </div></div>
                                <div className="row no-gutters my-2">
                                    <div className="col-sm-4">
                                        <div className="opacity-50">Discount Price:</div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="">
                                            <strong className="h2 fw-600 text-primary">
                                            {base_price}
                                            </strong>
                                        </div>
                                    </div>
                                </div>       
                            </div>
                            <div id="option-choice-form">
                            {Object.keys(variant).map((item)=>{
                          return(
                            <div className='product-info__color' key={variant[item].title}>
                             <span>Size:</span>
                             <div className='col-sm-12'>
                            <div className='d-md-flex align-items-center py-md-2 mb-md-2 smalls'>
                           {variant[item].values[0] && <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={variant[item].values[0]} onChange={(e)=>setProductSize(e.target.value)} defaultChecked/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{variant[item].values[0]}</label>
                    </div></div> }
                    {variant[item].values[1] && <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={variant[item].values[1]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{variant[item].values[1]}</label>
                    </div></div> }
                    {variant[item].values[2] &&   <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={variant[item].values[2]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{variant[item].values[2]}</label>
                    </div></div> }
                    {variant[item].values[3] &&   <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={variant[item].values[3]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{variant[item].values[3]}</label>
                    </div></div> }
                  {variant[item].values[4] && <div className='radio-input-container'>
                    <input type="radio" name="ratio" className="input-radio" value={variant[item].values[4]} onChange={(e)=>setProductSize(e.target.value)}/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{variant[item].values[4]}</label>
                    </div></div> }
                             </div></div>
                            </div>
                          )
                         })}
                         </div>
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
                      disabled
                      value={quantity}
                    />
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
                                            <strong id="chosen_price" className="h4 fw-600 text-primary">{currency.symbol}{price}</strong>  
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="mt-0" style={{display: "flex", alignItems: "center"}}>
                                <div className='product-buttons mt-0'>
                <button
                  disabled={addedInCart}
                  className={`btn-cartProductDetail ${addedInCart ? 'btn-add' : ''}`}
                  onClick={()=>addtocart(id,name,productSize,current_price,quantity,thumbnail_image,product_sku,current_stock,base_price,base_price)}
                >
                  <i className='icon-cart'></i> cart
                </button>
                <button disabled={addedInCart} className={`btn btn-icon ${addedInCart ? 'btn-add' : ''}`} onClick={()=>buyNow(id,name,productSize,current_price,quantity,thumbnail_image,product_sku,current_stock,base_price,base_price)}>
        <AiOutlineShoppingCart className='mx-1' style={{fontSize:"16px",fontWeight:"400"}}/> Buy Now
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
        </Box>
      </Modal>
    </div>
            </div>
          </div>
        </div>
        <div className='products-item__info'>
          <Link href={`/SingalProduct/${id}`}>
            <a>
              <span className='products-item__name'>{name}</span>
            </a>
          </Link>
          <span className='products-item__cost'>
           {currency.symbol}{(current_price * currency.conversionRate).toFixed(2)}
          </span>
        </div>
      </div>
      {/* <!-- SINGLE PRODUCT ITEM EOF <span>{base_price && `${base_price}`}</span>--> */}
    </>
  );
};
