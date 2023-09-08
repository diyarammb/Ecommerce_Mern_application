import { SignupSchema } from 'Schemas';
import axios from 'axios';
import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import { useFormik } from 'formik';
import router from 'next/router';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues={
  name:"",
  email:"",
  password:"",
  confirm_pass:""
  }

export const Registration = () => {
  const [success,setSuccess]=useState(null);
  const [error, setError] = useState();
  //form validation
const onSubmit = async (values,action) =>{
  const{...data}=values;
  try{
   const response = await axios.post("https://meeraki.com/api/v2/auth/signup",data);
   console.log("signup response", response);
   //const result = await response.json();
   //console.log(result)
   console.log("response", response.data.message);
   if (response.data.result === "Success") {
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
     router.push('/');
     formik.action.resetForm();
   }else {
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

 const formik =useFormik({
  initialValues,
  validationSchema:SignupSchema,
   validateOnBlur:true,
   onSubmit,
 });

  return (
    <>
      {/* <!-- BEGIN REGISTRATION --> */}
      <div className='login registration'>
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
            style={{
              backgroundImage: `url('/assets/img/registration-form__bg.png')`,
            }}
          >
             <form className=" mt-md-4" onSubmit={formik.handleSubmit}>
              <h3>register now</h3>
              {!success && <p className="text-center mb-2" style={{color:"red",fontSize:"1rem"}}>{error ? error : ""}</p>}
              {!error && <p className="text-center mb-2" style={{color:"green",fontSize:"1rem"}}>{success ? success : ""}</p>} 
              <SocialLogin />
              <div className='box-field__row'>
                <div className='box-field'>
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
                <div className='box-field'>
                  <input
                    type='email'
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
              </div>
              <div className='box-field__row'>
                <span>password</span>
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
              </div>
              <label className='checkbox-box checkbox-box__sm'>
                <input type='checkbox' />
                <span className='checkmark'></span>
                By signing up you agree to our terms and conditions.
              </label>
              <button className='btn' type='submit' disabled={!formik.isValid}>
                registration
              </button>
              <button className='btn mt-3' onClick={() => router.push('/GuestLoginPage')}>
              Login as a Guest
              </button>
              <div className='login-form__bottom'>
                <span>
                  Already have an account?{' '}
                  <a onClick={() => router.push('/login')}>Log in</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- REGISTRATION EOF   -->  */}
    </>
  );
};
