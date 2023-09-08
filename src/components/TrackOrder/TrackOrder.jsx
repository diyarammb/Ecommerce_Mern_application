import React from 'react'
import {FaTimes,FaSignOutAlt,FaUserCircle,FaBattleNet,FaRegHeart,FaTruck, FaFileInvoice} from "react-icons/fa";
import {SlHome} from "react-icons/sl";
import {AiOutlineFileText} from "react-icons/ai";
import {IoNewspaperOutline} from "react-icons/io5";
import {HiOutlineClipboardCheck, HiOutlineUser} from "react-icons/hi";
import router from 'next/router';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from 'pages/_app';
import axios from 'axios';
import { useFormik } from 'formik';
import { OrderformSchema } from 'Schemas';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues={
  order_code:""
  }

export const TrackOrder = () => {
  const {Logout,user}=useContext(CartContext);
  const [input,setInput]=useState('');
  console.log("input",input);
  const [searchedProduct, setSearchedProduct] = useState([]);
    console.log("TrackYourOrder",searchedProduct);

    
    const onSubmit = async (values) => {
      try{
        const response = await axios.get(`https://meeraki.com/api/v2/track_your_order/${values.order_code}`);
        if(response.data.success===true){
          setSearchedProduct(response.data.data);
          formik.resetForm();
        }else{
          toast.error(response.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
      }catch (err) {
        console.log(err);
      }
    };
     
    const formik = useFormik({
      initialValues,
      validateOnBlur: true,
      onSubmit,
      validationSchema:OrderformSchema
    });

    const status_deliver=()=>{
        if(delivery_status_string==='Order placed'){
           return(
            <li className="list-inline-item  done ">
            <div className="icon-trackform">
                <FaFileInvoice/>
            </div>
            <div className="title">Order placed</div>
        </li>
           )
        }
        else if(delivery_status_string==='Confirmed'){
            return(
                <>
                <li className="list-inline-item  done ">
                <div className="icon-trackform">
                 <FaFileInvoice/>
                 </div>
                 <div className="title">Order placed</div>
                 </li>
                <li className="list-inline-item  done ">
                <div className="icon-trackform">
                   <IoNewspaperOutline/>
                </div>
                 <div className="title">Confirmed</div>
                </li>
            </>
            )
        }
        else if(delivery_status_string==='On delivery'){
            return(
                <>
                <li className="list-inline-item  done ">
                <div className="icon-trackform">
                 <FaFileInvoice/>
                 </div>
                 <div className="title">Order placed</div>
                 </li>
                <li className="list-inline-item  done ">
                <div className="icon-trackform">
                   <IoNewspaperOutline/>
                </div>
                 <div className="title">Confirmed</div>
                </li>
                <li className="list-inline-item  done ">
                     <div className="icon-trackform">
                         <FaTruck/>
                          </div>
                     <div className="title">On delivery</div>
                </li>
            </>
            )
        }
        else if(delivery_status_string==='Delivered'){
            return(
                <>
                <li className="list-inline-item  done ">
                <div className="icon-trackform">
                 <FaFileInvoice/>
                 </div>
                 <div className="title">Order placed</div>
                 </li>
                <li className="list-inline-item  done ">
                <div className="icon-trackform">
                   <IoNewspaperOutline/>
                </div>
                 <div className="title">Confirmed</div>
                </li>
                <li className="list-inline-item  done ">
                     <div className="icon-trackform">
                         <FaTruck/>
                          </div>
                     <div className="title">On delivery</div>
                </li>
                <li className="list-inline-item  done ">
                                <div className="icon-trackform">
                                    <HiOutlineClipboardCheck/>
                                </div>
                                <div className="title">Delivered</div>
                            </li>
            </>
            )
        }
    }
  return (
    <section className='py-5 container'>
    <div className="row">
    <div className="col-3 remove-col">
     <div className='card' style={{boxShadow: "0 0 13px 0 rgb(82 63 105 / 5%)"}}>
        <div className='d-flex'>
        <a className='col-sm-10 h5 px-2' onClick={Logout}><FaSignOutAlt id='logout1'/></a>
            <div className='col-sm-2 text-center'><FaTimes/></div>
        </div>
        <div className='text-center'>
         <FaUserCircle className='fs-1' style={{color:"#dee2e6"}}/>
         {user.value && <h1 className='h5'>Nabiha Naeem</h1>}
         {!user.value && <h1 className='h5'>My Account</h1>}
        </div>
        <ul className="list-group">
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/dashboard')}><SlHome className='aiz-side-nav-icon'/>
Dashboard</a>
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/purchase_history')}><AiOutlineFileText className='aiz-side-nav-icon'/>
Purchase History</a>
<a className="list-group-item aiz-side-nav-link d-flex active" onClick={() => router.push('/trackOrder')}>
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
    <div className="card" style={{boxShadow: "0 0 13px 0 rgb(82 63 105 / 5%)"}}>
    <div className="card-header bg-white">
      <h1 className='fw-600 h4'>Track Order</h1>
    </div>
    <div className="card-body">
    <form onSubmit={formik.handleSubmit}>
  <div className='fs-15 fw-600 p-3 text-center'>
                        Check Your Order Status
                            </div>
                            <div className='form-box-content p-3'>
                                <div className='form-group'>
                                <input type="text" className="form-control mb-3" placeholder="Order Code" name="order_code" value={formik.values.order_code}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}/>
                           {formik.errors.order_code && formik.touched.order_code ? (
                      <p className="form-error">{formik.errors.order_code}</p>
                    ) : null}
                                </div>
                                <div className='text-center'>
                                <button type="submit" className="btn btn-primary" disabled={!formik.isValid}>Track Order</button>
                                </div>
                            </div>         
                    </form>
    </div>
</div>
    {searchedProduct && searchedProduct.map((item)=>{
        const {code,date,grand_total,payment_type,shipping_address,delivery_status_string}=item;
        console.log("delivery_status_string",delivery_status_string);
        
        return(
            <>
            <div className="card mt-4" style={{boxShadow: "0 0 13px 0 rgb(82 63 105 / 5%)"}}>
    <div className="card-header bg-white">
      <h1 className='fw-600 h4'>Order Summary</h1>
    </div>
    <div className="card-body">
    <div className="row">
            <div className="col-lg-6">
                            <table className="table table-borderless">
                                <tbody><tr>
                                    <td className="w-50 fw-600">Order Code:</td>
                                    <td>{code}</td>
                                </tr>
                                <tr>
                                    <td className="w-50 fw-600">Customer:</td>
                                    <td>{shipping_address.name}</td>
                                </tr>
                                <tr>
                                    <td className="w-50 fw-600">Email:</td>
                                                                            <td>{shipping_address.email}</td>
                                                                    </tr>
                                <tr>
                                    <td className="w-50 fw-600">Shipping Address:</td>
                                    <td>{shipping_address.address}</td>
                                </tr>
                            </tbody></table>
                        </div>
                        <div className="col-lg-6">
                            <table className="table table-borderless">
                                <tbody><tr>
                                    <td className="w-50 fw-600">Order Date:</td>
                                    <td>{date} 00:30 AM</td>
                                </tr>
                                <tr>
                                    <td className="w-50 fw-600">Total order amount:</td>
                                    <td>{grand_total}</td>
                                </tr>
                                <tr>
                                    <td className="w-50 fw-600">Shipping method:</td>
                                    <td>Flat shipping rate</td>
                                </tr>
                                <tr>
                                    <td className="w-50 fw-600">Payment method:</td>
                                    <td>{payment_type}</td>
                                </tr>
                            </tbody></table>
                        </div>
                        </div></div></div>
                        <div className="card mt-4" style={{boxShadow: "0 0 13px 0 rgb(82 63 105 / 5%)"}}>
    <div className="card-header bg-white text-center">
    <div className="p-4" style={{marginLeft:"auto",marginRight:"auto"}}>

                        <ul className="list-inline text-center aiz-steps">
                            {delivery_status_string && delivery_status_string==='Order placed'? <li className="list-inline-item  done">
                                <div className="icon-trackform-done">
                                    <FaFileInvoice/>
                                </div>
                                <div className="title">Order placed</div>
                            </li>:''}
                            {delivery_status_string && delivery_status_string==='Confirmed'? <><li className="list-inline-item  done ">
                                <div className="icon-trackform">
                                    <FaFileInvoice/>
                                </div>
                                <div className="title">Order placed</div>
                            </li> <li className="list-inline-item  done ">
                                <div className="icon-trackform">
                                   <IoNewspaperOutline/>
                                </div>
                                <div className="title">Confirmed</div>
                            </li></>:''}
                            {delivery_status_string && delivery_status_string==='On delivery'? <><li className="list-inline-item  done ">
                                <div className="icon-trackform">
                                    <FaFileInvoice/>
                                </div>
                                <div className="title">Order placed</div>
                            </li> <li className="list-inline-item  done ">
                                <div className="icon-trackform">
                                   <IoNewspaperOutline/>
                                </div>
                                <div className="title">Confirmed</div>
                            </li>
                            <li className="list-inline-item  done ">
                                <div className="icon-trackform">
                                    <FaTruck/>
                                </div>
                                <div className="title">On delivery</div>
                            </li>
                            </>:''}
                            {delivery_status_string && delivery_status_string==='Delivered'? <><li className="list-inline-item  done ">
                                <div className="icon-trackform-done">
                                    <FaFileInvoice/>
                                </div>
                                <div className="title">Order placed</div>
                            </li> <li className="list-inline-item done ">
                                <div className="icon-trackform-done">
                                   <IoNewspaperOutline/>
                                </div>
                                <div className="title">Confirmed</div>
                            </li>
                            <li className="list-inline-item  done ">
                                <div className="icon-trackform-done">
                                    <FaTruck/>
                                </div>
                                <div className="title">On delivery</div>
                            </li>
                            <li className="list-inline-item  done ">
                                <div className="icon-trackform-done">
                                    <HiOutlineClipboardCheck/>
                                </div>
                                <div className="title">Delivered</div>
                            </li>
                            </>:''}
                           
                        </ul>
    </div>
    </div>
    <div className='card-body'>
        <div className="pt-0 px-3 pb-3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Shipped By</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Blue/Off White (Small)</td>
                                    <td>1</td>
                                    <td>Admin</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    </div>
    </div>
                        </>
        )
    })}
  
       </div> 
    </div>
    </section>
  )
}
