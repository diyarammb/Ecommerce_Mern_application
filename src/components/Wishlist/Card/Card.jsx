import React, { useState } from 'react';
import {FaTimes,FaSignOutAlt,FaUserCircle,FaBattleNet,FaRegHeart,FaTruck} from "react-icons/fa";
import {SlHome} from "react-icons/sl";
import {AiOutlineFileText,AiFillHeart} from "react-icons/ai";
import {HiOutlineUser} from "react-icons/hi";
import router from 'next/router';
import { useWishlistContext } from 'Context/wishlistContext';


export const Wishlist = ({auth}) => {
    const {wishList,setWishList}=useWishlistContext();

    console.log("wishList 12 lines",wishList);
  return (
    <>
        <section className='py-5 container'>
        <div className="row">
        <div className="col-3 remove-col">
         <div className='card'>
            <div className='d-flex'>
                <h1 className='col-sm-10 h5 px-2'><FaSignOutAlt id='logout'/></h1>
                <div className='col-sm-2 text-center'><FaTimes/></div>
            </div>
            <div className='text-center'>
             <FaUserCircle className='fs-1' style={{color:"#dee2e6"}}/>
             <h1 className='h5'>{auth.name}</h1>
            </div>
            <ul className="list-group">
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/dashboard')}><SlHome className='aiz-side-nav-icon'/>
Dashboard</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/purchase_history')}><AiOutlineFileText className='aiz-side-nav-icon'/>
Purchase History</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/trackOrder')}>
<FaTruck className='aiz-side-nav-icon'/>Track Order</a>
<a className="list-group-item aiz-side-nav-link d-flex active" onClick={() => router.push('/my_wishlist')}>
<FaRegHeart className='aiz-side-nav-icon'/>Wishlist</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/support_ticket')}>
<FaBattleNet className='aiz-side-nav-icon'/>
Support Ticket</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/manage_profile')}>
<HiOutlineUser className='aiz-side-nav-icon'/>Manage Profile</a>
</ul>
         </div>
        </div>
        <div className="col-md-8">
            <h1 className='h4 mt-1 mb-3 text-center'>Wishlist</h1>
            <div className="row gutters-5">
            {wishList.map((wish) => (
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div className="card mb-2 shadow-sm" key={wish.id}>
              <div className="card-body row">
              <div className='col-4'>
              <a href='#as' className='d-block mb-3'>
              <img src={`https://meeraki.com/public/${wish.thumbnail_image}`} className="img-fit h-140px h-md-200px" alt="..."/>
              </a>
              </div>
              <div className='col-4'>
              <p className="mb-1 lh-1-5 fw-500  text-reset">{wish.name}</p>
              <h5 className="fs-14 mb-1 lh-1-5 fw-600 text-truncate-2">
              <a href="#as" className="text-reset">MRK-220411</a>
              </h5>
              <p className="fw-600 fs-14 mb-1 lh-1-5 fw-600  text-reset">{wish.base_price}</p>
              <p className="fw-600 fs-14" style={{color:"green"}}>
              {wish.current_stock ? (
            <span className='wishlist-stock'>in stock</span>
          ) : (
            <span className='wishlist-available'>not available</span>
          )}
              </p>
              </div>
              <div className='col-4 mt-4'>
              <button id="heartbtn-beat"><AiFillHeart id='heartbtn-beat-icon'/></button>
              <button type="button" className="btn-sm btn-block btn-primary ml-3" style={{width:"100%",fontSize:"0.6rem",height:"2.5rem"}} onClick={() => router.push(`/product/${wish.id}`)}>
                      View Product
                            </button>
              </div>
            </div>
              </div>
              </div>
            ))}
              </div>
        </div>
  </div>
        </section>
    </>
  )
}