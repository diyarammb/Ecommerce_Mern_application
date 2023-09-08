import React,{ useEffect } from 'react';
import {FaTimes,FaSignOutAlt,FaUserCircle,FaBattleNet,FaRegHeart,FaRegSmile, FaTruck} from "react-icons/fa";
import {SlHome} from "react-icons/sl";
import {AiOutlineFileText} from "react-icons/ai";
import {HiOutlineUser,HiOutlinePlus} from "react-icons/hi";
import router from 'next/router';
import { useContext } from 'react';
import { CartContext } from 'pages/_app';
import { useAuthContext } from 'Context/AuthContext';

export const SupportTicket = () => {
  const {Logout}=useContext(CartContext);
  const {authuser}=useAuthContext();

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      router.push('/login')
    }
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
             <h1 className='h5'>{authuser.name}</h1>
            </div>
            <ul className="list-group">
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/dashboard')}><SlHome className='aiz-side-nav-icon'/>
Dashboard</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/purchase_history')}><AiOutlineFileText className='aiz-side-nav-icon'/>
Purchase History</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/trackOrder')}>
<FaTruck className='aiz-side-nav-icon'/>Track Order</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/wishlist')}>
<FaRegHeart className='aiz-side-nav-icon'/>Wishlist</a>
<a className="list-group-item aiz-side-nav-link d-flex active" onClick={() => router.push('/support_ticket')}>
<FaBattleNet className='aiz-side-nav-icon'/>
Support Ticket</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/manage_profile')}>
<HiOutlineUser className='aiz-side-nav-icon'/>Manage Profile</a>
</ul>
         </div>
        </div>
        <div className="col-md-8">
            <h1 className='h5 mt-0 mb-3'>Support Ticket</h1>
            <div className='row'>
              <div className='col-md-4 mx-auto mb-3'>
              <div className="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition" data-toggle="modal" data-target="#ticket_modal">
                    <label htmlFor='upload' className='support-circle'>  
                    <HiOutlinePlus className="text-white supportplus m-2 p-1"/>
                    </label>
                    <input type="file" id="upload" style={{display:"none"}} />
                <div className="fs-20 text-primary">Create a Ticket</div>
            </div>
              </div>
            </div>
            <div className="card">
        <div className="card-header bg-white">
            <h5 className="mb-0 h6">Tickets</h5>
        </div>
          <div className="card-body">
              <table className="table aiz-table mb-0 footable footable-1 breakpoint breakpoint-sm">
                  <thead>
                      <tr className="footable-header">
                          
                          
                          
                          
                          
                      <th data-breakpoints="lg">Ticket ID</th><th data-breakpoints="lg">Options</th></tr>
                  </thead>
                  <tbody>
                                        <tr className="footable-empty"><td colspan="2" className='text-center'>
                                        <FaRegSmile className='fs-1 m-2' style={{ color: "#c3c3c5"}}/>
                                <br/>
                                Nothing found</td></tr></tbody>
              </table>
              <div className="aiz-pagination">
                  
              </div>
          </div>
    </div>
              </div>
              </div>
        </section>
    </>
  )
}
