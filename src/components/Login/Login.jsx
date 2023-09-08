import { useAuthContext } from 'Context/AuthContext';
import { SigninSchema } from 'Schemas';
import axios from 'axios';
import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import { useFormik } from 'formik';
import router from 'next/router';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues={
  email:"",
  password:"",
  }


export const Login = () => {
 const [error, setError] = useState();
  const [success,setSuccess]=useState(null);
  const {setAuthuser}=useAuthContext();
  
  const onSubmit = async (values) => {
    try{
      const response = await axios.post("https://meeraki.com/api/v2/auth/login", values);
      console.log("response", response.data);
      console.log("token",response.data.access_token)
      if (response.data.result === true) {
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
          localStorage.setItem('token',response.data.access_token)
          console.log("userdata",response.data.user)
          localStorage.setItem('User',response.data.user)
          setAuthuser(response.data.user);
          setError(null);
          router.push('/');
          formik.resetForm();
      }else{
        setError(response.data.message);
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
    validationSchema:SigninSchema
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
              {!error && <p className="text-center mb-2" style={{color:"green",fontSize:"1rem"}}>{success ? success : ""}</p>} 
              <SocialLogin />
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
              <label className='checkbox-box checkbox-box__sm'>
                <input type='checkbox' />
                <span className='checkmark'></span>
                Remember me
              </label>
              <button className='btn' type='submit'  disabled={!formik.isValid}>
                log in
              </button>
              <div className="separator mb-3 mt-3">
              <button className='btn' onClick={() => router.push('/GuestLoginPage')}>
              Login as a Guest
              </button>
                      </div>
              <div className='login-form__bottom'>
                <span>
                  No account?{' '}
                  <a onClick={() => router.push('/registration')}>
                    Register now
                  </a>
                </span>
                <a onClick={() => router.push('/forgot_password')}>Forgot password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- LOGIN EOF   --> */}
    </>
  );
};
