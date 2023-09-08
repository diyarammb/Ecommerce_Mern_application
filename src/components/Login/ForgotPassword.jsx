import { ForgotPasswordSchema } from 'Schemas';
import axios from 'axios';
import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import { useFormik } from 'formik';
import React from 'react'
import { useState } from 'react';
import router from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues={
    email:""
    }

const ForgotPassword = () => {
  
  const onSubmit = async (values) => {
    try{
      const response = await axios.post("https://meeraki.com/api/v2/auth/password/forget_request", values);
      console.log("response", response.data.message);
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
          router.push('/Reset_Password');
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
    validationSchema:ForgotPasswordSchema
  });
  return (
    <>
      {/* <!-- BEGIN LOGIN --> */}
      <div className='login'>
        <div className='wrapper'>
        <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>
          <div
            className='login-form js-img'
            style={{ backgroundImage: `url('/assets/img/login-form__bg.png')` }}
          >
           <form className="mt-md-4" onSubmit={formik.handleSubmit}>
              <h3>log in with</h3>
              <SocialLogin />
              <p
                        className="mb-4 opacity-60 fs-13"
                        style={{ color: "#898b92" }}
                      >
                        Enter your email address to recover your password.
                      </p>
              <div className='box-field'>
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
              <button className='btn' type='submit'  disabled={!formik.isValid}>
              Send Password Reset Link
              </button>
              <div className='login-form__bottom'>
                <span>
                  <a onClick={() => router.push('/login')}>
                  Back to Login
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- LOGIN EOF   --> */}
    </>
  )
}

export default ForgotPassword