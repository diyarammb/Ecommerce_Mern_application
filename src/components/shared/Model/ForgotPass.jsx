import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useFormik} from "formik";
import axios from "axios";
import { ForgotPasswordSchema } from 'Schemas';
import { useState } from 'react';
import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import router from 'next/router';
import Registration from './Registration';

const initialValues={
  email:""
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
const ForgotPass = () => {
  const [openForgot, setOpenForgot] = useState(false);
  const handleOpen = () => setOpenForgot(true);
  const handleClose = () => setOpenForgot(false);
  const [error, setError] = useState();
  const [success,setSuccess]=useState(null);


  const onSubmit = async (values) => {
    try{
      const response = await axios.post("https://meeraki.com/api/v2/auth/password/forget_request", values);
      console.log("response", response.data.message);
      if (response.data.result === true) {
          setSuccess(response.data.message);
          setError(null);
          router.push('/Reset_Password');
          formik.resetForm();
      }else{
        setError(response.data.message);
        setSuccess(null);
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
    <div>
     <a onClick={handleOpen} style={{fontSize:"1rem"}}>Forgot password?</a>
    <Modal
      open={openForgot}
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
              {!error && <p className="text-center mb-2" style={{color:"green",fontSize:"1rem"}}>{success ? success : ""}</p>} 
              <SocialLogin />
              <p
                        className="mb-4 opacity-60 fs-13"
                        style={{ color: "#898b92" }}
                      >
                        Enter your email address to recover your password.
                      </p>
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
              <button className='btn m-1' type='submit'  disabled={!formik.isValid}>
              Send Password Reset Link
              </button> 
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  </div>
  )
}
export default ForgotPass;