import React from 'react'
import {FiCheckCircle,FiMap} from "react-icons/fi";
import {FiTrash2,FiPlus,FiMinus} from "react-icons/fi";
import {MdShoppingCart} from "react-icons/md";
import router from 'next/router';
import {BsArrowLeft} from "react-icons/bs";

export const AddToCart = () => {
  return (
    <section className='pt-5 mb-4'>
    <div className='container'>
        <div className='row'>
            <div className='col-xl-2 mx-auto'>
                <div className='aiz-steps mymockey'>
                    <div className='col card-active mt-4'>
                        <div className='text-center text-primary'>
                        <MdShoppingCart className='mb-2 fs-3'/>
                        <h3 className="fs-14 fw-600 d-none d-lg-block text-capitalize">1. My Cart</h3>
                        </div>
                    </div>
                    <div className="col mt-4">
                        <div className="text-center">
                            <FiMap className='mb-2 fs-3 opacity-50'/>
                            <h3 className="fs-14 fw-600 d-none d-lg-block opacity-50 text-capitalize">2. Information </h3>
                        </div>
                    </div>
                    <div className="col mt-4">
                        <div className="text-center">
                            <FiCheckCircle className='mb-2 fs-3 opacity-50'/>
                            <h3 className="fs-14 fw-600 d-none d-lg-block opacity-50 text-capitalize">4. Confirmation</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='col-xl-10 mx-auto'>
            <div className="shadow-sm bg-white p-3 p-lg-4 rounded text-left">
                    <table className="sx-table">
  <thead>
    <tr>
      <th scope="col" className="fw-600 td-price">Product</th>
      <th scope="col" className="fw-600 td-price">Price</th>
      <th scope="col" className="fw-600 td-price">tax</th>
      <th scope="col" className="fw-600 td-price">Quantity</th>
      <th scope="col" className="fw-600 td-price">TOTAL</th>
      <th scope="col" className="text-center fw-600 td-price">Remove</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><span className="mr-2 ml-0">
                                                    <img src="https://meeraki.com/public/uploads/all/wlvNmMzUV2ninPWBr48jUK2si7xn4X8jg25kd6Pn.jpg" className="img-fit size-60px rounded" alt="MRK-220406"/>
                                                </span>
                                                <span className="fs-14 opacity-60">MRK-220406 - Small</span></th>
      <td className='td-price'>
PKR3,850.00</td>
      <td className='td-price'>PKR0.00</td>
      <td>
      <div className="d-flex">
       <button className="minusbtn td-price">
            <FiMinus/>
        </button>
        <span className="mt-1 mx-1 num">1</span>
        <button className="minusbtn td-price">
           <FiPlus/>
        </button>
       </div>
      </td>
      <td className='td-price'>
PKR3,850.00</td>
<td className="text-center">
<button className="btnTrash td-price"><FiTrash2/></button></td>
    </tr>
    <tr>
    <th scope="row"><span className="mr-2 ml-0">
                                                    <img src="https://meeraki.com/public/uploads/all/wlvNmMzUV2ninPWBr48jUK2si7xn4X8jg25kd6Pn.jpg" className='js-img' alt="MRK-220406"/>
                                                </span>
                                                <span className="fs-14 opacity-60 td-price">MRK-220406 - Small</span></th>
      <td className='td-price'>
PKR3,850.00</td>
      <td className='td-price'>PKR0.00</td>
      <td>
      <div className="d-flex">
      <button className="minusbtn td-price">
            <FiMinus/>
        </button>
        <span className="mt-1 mx-1 num">1</span>
        <button className="minusbtn td-price">
           <FiPlus/>
        </button>
       </div>
      </td>
      <td className='td-price'>
PKR3,850.00</td>
<td className="text-center">
<button className="btnTrash td-price"><FiTrash2/></button></td>
    </tr>
    <tr>
    <th scope="row"><span className="mr-2 ml-0">
                                                    <img src="https://meeraki.com/public/uploads/all/wlvNmMzUV2ninPWBr48jUK2si7xn4X8jg25kd6Pn.jpg" className='js-img' alt="MRK-220406"/>
                                                </span>
                                                <span className="fs-14 opacity-60 td-price">MRK-220406 - Small</span></th>
      <td className='td-price'>
PKR3,850.00</td>
      <td className='td-price'>PKR0.00</td>
      <td>
       <div className="d-flex">
       <button className="minusbtn td-price">
            <FiMinus/>
        </button>
        <span className="mt-md-1 mx-1 num">1</span>
        <button className="minusbtn td-price">
           <FiPlus/>
        </button>
       </div>
      </td>
      <td className='td-price'>
PKR3,850.00</td>
<td className="text-center">
<button className="btnTrash td-price"><FiTrash2/></button></td>
    </tr>
  </tbody>
</table>
 <div className="px-3 py-2 mb-4 d-flex justify-content-between">
                            <span className="opacity-60 fs-15">Subtotal</span>
                            <span className="fw-600 fs-17">PKR3,850.00</span>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-4  text-md-left order-1 order-md-0">
                                <a onClick={() => router.push('/')} className="btn btn-link" style={{color:"#1b1b28"}}>
                                   <BsArrowLeft/>
                                    Return to shop
                                </a>
                            </div>
                            <div className="col-md-8 text-center text-md-right">
                            <button className="btn btn-primary fw-600" style={{marginLeft:"8rem"}}  data-bs-target="#information">Continue to Delivery Information</button>
                            </div>
                            </div>
                            </div>
            </div>
        </div>
    </div>
   </section>
  )
}
