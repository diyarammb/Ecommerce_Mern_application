import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin'
import React from 'react'
import router from 'next/router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GuestLogin = () => {

  const onGuestlogin = async () => {
    try{
      console.log("kab")
      const response = await axios.post("https://meeraki.com/api/v2/auth/register-guest");
      console.log("response", response.data.message);
    
      if (response.data.message === "User registered successfully") {
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
          router.push('/'); 
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

  return (
    <>
    {/* <!-- BEGIN LOGIN --> */}
    <div className='login'>
      <div className='wrapper'>
        <div
          className='login-form js-img'
          style={{ backgroundImage: `url('/assets/img/login-form__bg.png')` }}
        >
         <form className="mt-md-4">
            <h3>log in with</h3>
            <SocialLogin />
            <label className='checkbox-box checkbox-box__sm'>
              <input type='checkbox' required/>
              <span className='checkmark'></span>
              By signing up you agree to our terms and conditions.
            </label>
            <div className="separator mb-3 mt-3">
            <button className='btn' onClick={onGuestlogin}>
            Login as a Guest
            </button>
          </div>
            <div className='login-form__bottom'>
              <span>
              Already have an account?{' '}
                <a onClick={() => router.push('/login')}>
                Log In
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
