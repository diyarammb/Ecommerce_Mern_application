import React, { useState,useEffect } from 'react';
import {FaTimes,FaSignOutAlt,FaUserCircle,FaBattleNet,FaRegHeart, FaTruck} from "react-icons/fa";
import {SlHome} from "react-icons/sl";
import {AiOutlineFileText} from "react-icons/ai";
import {HiOutlineUser} from "react-icons/hi";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import router from 'next/router';
import { useContext } from 'react';
import { CartContext } from 'pages/_app';
import { useAuthContext } from 'Context/AuthContext';


export const ManageProfile = () => {
    const {Logout}=useContext(CartContext);
    const {authuser}=useAuthContext();
    const [age, setAge] = useState('');
    const [country, setCountry] = useState(" ");

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const handleChangeCountry = (event) => {
        setCountry(event.target.value);
      };

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
<a className="list-group-item aiz-side-nav-link d-flex" onClick={() => router.push('/support_ticket')}>
<FaBattleNet className='aiz-side-nav-icon'/>
Support Ticket</a>
<a className="list-group-item aiz-side-nav-link d-flex active" onClick={() => router.push('/manage_profile')}>
<HiOutlineUser className='aiz-side-nav-icon'/>Manage Profile</a>
</ul>
         </div>
        </div>
        <div className="col-md-8">
            <h1 className='h5 mt-0 mb-3'>Manage Profile</h1>
            <div className="card">
        <div className="card-header bg-white">
            <h5 className="mb-0 h6">Basic Info</h5>
        </div>
        <div className="card-body">
            <form method="POST">
                <input type="hidden" name="_token" value="Rl2BvGHIFdZyKLofNmLMRQQUbujHUvRA5UhyjCI6"/>               
                 <div className="form-group row">
                 <div className="col-md-2"><label>Full Name</label></div>
                                             <div className="col-md-10">
                                               <input type="text" className="form-control mb-3" placeholder="Your name"  name="name" required="" style={{background: "transparent"}}/>
                                             </div>
                </div>

                <div className="form-group row">
                <div className="col-md-2"><label>Email</label></div>
                                                <div className="col-md-10">
                                                    <input type="email" className="form-control mb-3" placeholder="@gmail.com"  name="email" required="" style={{background: "transparent"}}/>
                                                </div>
                </div>
                <div className="form-group row">
                <div className="col-md-2"><label>Phone</label></div>
                    <div className="col-md-10">
                    <input type="text" className="form-control mb-3" placeholder="+880" name="phone"  required="" style={{background: "transparent"}}/>
                    </div>
                </div>
                <div className="form-group row">
                <div className="col-md-2"><label>Address</label></div>
                    <div className="col-md-10">
                    <textarea className="form-control textarea-autogrow mb-3" placeholder="Your Address" rows="1" name="address" required="" style={{background: "transparent"}}></textarea>
                    </div>
                </div>
                <div className="form-group row">
                <div className="col-md-2"><label>Country</label></div>
                    <div className="col-md-10">
                    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Select Country"
          onChange={handleChangeCountry}
        >
          <MenuItem value={"Germany"}>Germany</MenuItem>
          <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
          <MenuItem value={"Norway"}>Norway</MenuItem>
          <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
          <MenuItem value={"Norway"}>Norway</MenuItem>
          <MenuItem value={"New Zealand"}>New Zealand</MenuItem>
          <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
          <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
          <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
        </Select>
      </FormControl>
                    </div>
                </div>
                <div className="form-group row mt-3">
                <div className="col-md-2"><label>City</label></div>
                    <div className="col-md-10">
                    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Nothing Selected</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select Country"
          onChange={handleChange}
        >
          <MenuItem value={"Karachi"}>Karachi</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-2 col-form-label">Photo</label>
                    <div className="col-md-10 mt-2 mb-2">
                        <div className="input-group" data-toggle="aizuploader" data-type="image">
                            <div className="input-group-prepend">
                                <label htmlFor='selected-files' className="input-group-text bg-soft-secondary font-weight-medium">Browse</label>
                            </div>
                            <div className="form-control file-amount">Choose file</div>
                            <input type="file" name="photo" id="selected-files" style={{display:"none",visibility:"hidden"}}/>
                        </div>
                        <div className="file-preview box sm"></div>
                    </div>
                </div>
                <div className="form-group mb-0 text-right">
                    <button type="submit" className="btn btn-primary">Update Profile</button>
                </div>
            </form>
        </div>
    </div>
        </div>
  </div>
        </section>
    </>
  )
}
