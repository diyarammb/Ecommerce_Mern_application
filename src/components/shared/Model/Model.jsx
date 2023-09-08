import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useFormik} from "formik";
import axios from "axios";
import { SigninSchema } from 'Schemas';
import { useState } from 'react';
import { HiUser } from "react-icons/hi";
import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import router from 'next/router';
import Registration from './Registration';
import ForgotPass from './ForgotPass';
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
const Model = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpen = () => setOpenLogin(true);
  const handleClose = () => setOpenLogin(false);


  const onSubmit = async (values) => {
    try{
      const response = await axios.post("https://meeraki.com/api/v2/auth/login", values);
      console.log("response", response.data);
      if (response.data.result === true) {
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
          localStorage.setItem('token',response.data.access_token);
          router.push('/');
          formik.resetForm();
      }
      else{
        setError(response.data.message);
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
    validationSchema:SigninSchema
  });
  return (
    <div>
    <button className="modelLoginbtn" style={{border:"none",background:"transparent"}} onClick={handleOpen}><HiUser className="mx-1 text-left" /></button>
    <Modal
      open={openLogin}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{zIndex:"2000"}}
    >
      <Box sx={style}>
      <form onSubmit={formik.handleSubmit}>
        <div className="modal-dialog">
          <div className="modal-content" style={{border:"none"}}>
          <h3 className='text-center'>log in with</h3>
              <SocialLogin />
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
              <label className='checkbox-box checkbox-box__sm m-1'>
                <input type='checkbox' />
                <span className='checkmark'></span>
                Remember me
              </label>
              <button className='btn m-1' type='submit'  disabled={!formik.isValid}>
                log in
              </button>
              <div className="mb-2 mt-3">
                <GuessLogin/>
              </div>
              <div className='login-form__bottom'>
                <span className='d-flex'>
                  No account?&nbsp;<Registration/>
                </span>
               <ForgotPass/>
              </div>   
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  </div>
  )
}
export default Model;