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
const GuessLogin = () => {
  const [openGuessLogin, setOpenGuessLogin] = useState(false);
  const handleOpen = () => setOpenGuessLogin(true);
  const handleClose = () => setOpenGuessLogin(false);

  return (
    <div>
     <button className='btn w-100' onClick={handleOpen}>Login as a Guest</button>
    <Modal
      open={openGuessLogin}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{zIndex:"2000"}}
    >
      <Box sx={style}>
      <form>
        <div className="modal-dialog">
          <div className="modal-content" style={{border:"none"}}>
          <h3 className='text-center'>log in with</h3>
              <SocialLogin />
              <label className='checkbox-box checkbox-box__sm m-1'>
              <input type='checkbox' />
              <span className='checkmark'></span>
              By signing up you agree to our terms and conditions.
            </label>
         
              <button className='btn m-1' type='submit'>
              Login as a Guest
              </button> 
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  </div>
  )
}
export default GuessLogin;