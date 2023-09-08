import React, { useState } from 'react';
import {FaTimes,FaSignOutAlt,FaUserCircle,FaBattleNet,FaRegHeart, FaTruck} from "react-icons/fa";
import {SlHome} from "react-icons/sl";
import {AiOutlineFileText} from "react-icons/ai";
import {HiOutlineUser,HiDownload,HiEye} from "react-icons/hi";
import router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import { CartContext } from 'pages/_app';
import { useContext } from 'react';
import { useAuthContext } from 'Context/AuthContext';
import axios from 'axios';
import { useProductContext } from 'Context/productContext';

export const PurchaseHistory = () => {
  const {authuser}=useAuthContext();
  const {Logout}=useContext(CartContext);
  const router = useRouter();
  const {getPurchaseHistory,purchasehistory,ispurchasehistoryLoading}=useProductContext();
 

  if(ispurchasehistoryLoading){
      return<div>Loading.....</div>
  }

  const [purchase,setPurchase]=useState();
   
  console.log("purchase",purchase.data[0].code);

  const PurchaseData=async()=>{
    try{
      const res=await axios.get('https://meeraki.com/api/v2/purchase-history/243')
      setPurchase(res.data);

    }catch(err){
       console.log(err);
    } 
  }

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      router.push('/login')
    }
    PurchaseData(purchase)
  },[])


  return (
    <>
        <section className='py-5 container'>
        <div className="row">
        <div className="col-3 remove-col">
         <div className='card'>
            <div className='d-flex'>
            <a className='col-sm-10 h5 px-2' onClick={Logout}><FaSignOutAlt id='logout1'/></a>
                <div className='col-sm-2 text-center'><FaTimes/></div>
            </div>
            <div className='text-center'>
             <FaUserCircle className='fs-1' style={{color:"#dee2e6"}}/>
             <h1 className='h5'>{authuser.Name}</h1>
            </div>
            <ul className="list-group">
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/dashboard')}><SlHome className='aiz-side-nav-icon'/>
Dashboard</a>
<a className="list-group-item aiz-side-nav-link d-flex active" onClick={() => router.push('/purchase_history')}><AiOutlineFileText className='aiz-side-nav-icon'/>
Purchase History</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/trackOrder')}>
<FaTruck className='aiz-side-nav-icon'/>Track Order</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/wishlist')}>
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
        <div class="aiz-user-panel">
				    <div class="card">
        <div class="card-header">
            <h5 class="mb-0 h6">Purchase History</h5>
        </div>
                    <div class="card-body">
                <table class="table aiz-table mb-0 footable footable-1 breakpoint-lg">
                    <thead>
                        <tr class="footable-header">
                        <th class="footable-first-visible" style={{display: "table-cell"}}>Code</th>
                        <th data-breakpoints="md" style={{display: "table-cell"}}>Date</th>
                        <th style={{display: "table-cell"}}>Amount</th>
                        <th data-breakpoints="md" style={{display: "table-cell"}}>Delivery Status</th>
                        <th data-breakpoints="md" style={{display: "table-cell"}}>Payment Status</th>
                        <th class="text-right footable-last-visible" style={{display: "table-cell"}}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                     <td class="footable-first-visible" style={{display: "table-cell"}}>
                        <a href="#20230410-105856" onclick="show_purchase_history_details(538)">purchase</a>
                     </td>
                     <td style={{display: "table-cell"}}>10-04-2023</td>
                     <td style={{display: "table-cell"}}>PKR7,910.00</td>
                     <td style={{display: "table-cell"}}>Cancelled</td>
                     <td style={{display: "table-cell"}}><span class="badge badge-inline badge-danger">Unpaid</span></td>
                     <td class="text-right footable-last-visible d-flex" style={{display: "table-cell"}}>
                        <a href="javascript:void(0)" class="btn btn-soft-info btn-icon btn-circle btn-sm" onclick="show_purchase_history_details(538)" title="Order Details">
                          <HiEye/>
                        </a>
                        <a class="btn btn-soft-warning btn-icon btn-circle btn-sm" href="https://meeraki.com/invoice/538" title="Download Invoice">
                         <HiDownload/>
                        </a>
                      </td>
                      </tr>
                    </tbody>
                </table>
                <div class="aiz-pagination">
                    	
              	</div>
            </div>
            </div>
            </div>
            </div>
           </div>
        </section>
    </>
  )
}
