import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useFormik} from "formik";
import axios from "axios";
import { SignupSchema } from 'Schemas';
import { useState } from 'react';
import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import router from 'next/router';
import Model from './Model';
import GuessLogin from './GuessLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues={
  email:"",
  password:"",
  }

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  borderRadius:'5px',
  p: 4,
};
const Registration = () => {
  const [openRegis, setOpenRegis] = useState(false);
  const handleOpen = () => setOpenRegis(true);
  const handleClose = () => setOpenRegis(false);
  const [error, setError] = useState();
  const [success,setSuccess]=useState(null);


  const onSubmit = async (values,action) =>{
    const{...data}=values;
    try{
     const response = await axios.post("https://meeraki.com/api/v2/auth/signup",data);
     console.log("signup response", response);
     console.log("response", response.data.message);
     if (response.data.result === "Success") {
       setSuccess(response.data.message);
       toast.success(response.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
       localStorage.setItem("token", response.data.access_token);  
       setError(null);
       router.push('/');
       formik.action.resetForm();
     }else {
       //alert('we  have errror')
       setError(response.data.message)
       setSuccess(null);
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
    validationSchema:SignupSchema
  });
  return (
    <div>
    <a onClick={handleOpen} style={{fontSize:"1rem"}}>Register now</a>
    <Modal
      open={openRegis}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{zIndex:"2000"}}
    >
      <Box sx={style}>
      <form onSubmit={formik.handleSubmit}>
        <div className="modal-dialog">
          <div className="modal-content" style={{border:"none"}}>
          <h3 className='text-center'>register now</h3>
              {!success && <p className="text-center mb-2" style={{color:"red",fontSize:"1rem"}}>{error ? error : ""}</p>}
              {!error && <p className="text-center mb-2" style={{color:"green",fontSize:"1rem"}}>{success ? success : ""}</p>} 
              <SocialLogin />
              <div className='box-field m-1'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your name'
                    id="name"
                    name="name"
                          autoComplete='off' 
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                  />
                   {formik.errors.name && formik.touched.name ? (
                    <p className="form-error">{formik.errors.name}</p>
                    ) : null}
                </div>
            <div className='box-field m-1'>
                <input
                  type="email"
                  id="email"
                  className='form-control'
                  placeholder='Enter your email'
                  name="email"
                          autoComplete='off' 
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                />
                  {formik.errors.email && formik.touched.email ? (
                      <p className="form-error">{formik.errors.email}</p>
                    ) : null}
              </div>
              <div className='box-field m-1'>
                <input
                   type="password"
                   id="password"
                  className='form-control'
                  placeholder='Enter your password'
                  name="password"
                          autoComplete='off' 
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                />
                 {formik.errors.password && formik.touched.password ? (
                      <p className="form-error">{formik.errors.password}</p>
                    ) : null}
              </div>
              <div className='box-field m-1'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Confirm password'
                    id="confirm_pass"
                    name="confirm_pass"
                          autoComplete='off' 
                          value={formik.values.confirm_pass}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  />
                    {formik.errors.confirm_pass && formik.touched.confirm_pass ? (
                      <p className="form-error">{formik.errors.confirm_pass}</p>  
                    ) : null}
                </div>
              <label className='checkbox-box checkbox-box__sm m-1'>
                <input type='checkbox' />
                <span className='checkmark'></span>
                By signing up you agree to our terms and conditions.
              </label>
              <button className='btn m-1' type='submit'  disabled={!formik.isValid}>
              registration
              </button>
              <div className="m-1">
                <GuessLogin/>
                      </div>
              <div className='login-form__bottom m-1'>
                <span className='d-flex'>
                Already have an account?{' '}
                Login<Model/>
                </span>
              </div>
           
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  </div>
  )
}
export default Registration;