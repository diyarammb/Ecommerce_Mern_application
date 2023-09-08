import { ResetPassSchema } from 'Schemas';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues={
    email:"",
    verification_code:"",
    password:"",
    confirm_pass:""
    }

export const ResetPassword = () => {

    const onSubmit = async (values) => {
      try{
        const response = await axios.post("https://meeraki.com/api/v2/auth/password/confirm_reset", values);
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
      validationSchema:ResetPassSchema
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
            <h3>Reset Password</h3>
            <p
                      className="mb-4 opacity-60 fs-13"
                      style={{ color: "#898b92" }}
                    >
                      Enter your email address and new password and confirm password.
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
            <div className='box-field'>
              <input
                type="text"
                id="verification_code"
                className='form-control'
                placeholder='Enter your email'
                name="verification_code"
                        autoComplete='off' 
                        value={formik.values.verification_code}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
              />
                {formik.errors.verification_code && formik.touched.verification_code ? (
                    <p className="form-error">{formik.errors.verification_code}</p>
                  ) : null}
            </div>
            <div className='box-field'>
            <input
                    type='password'
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
            <div className='box-field'>
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
            <button className='btn' type='submit'  disabled={!formik.isValid}>
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
    {/* <!-- LOGIN EOF   --> */}
  </>
  )
}
