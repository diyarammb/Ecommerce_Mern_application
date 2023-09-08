import footerNavData from 'data/footer/footerNav';
import { NavCol } from './NavCol/NavCol';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import { SubcriptionSchema } from 'Schemas';
import { useFormik } from 'formik';
import Alert from '@mui/material/Alert';
const initialValues={
  email:""
  }

export const Footer = () => {
  const footerNav = [...footerNavData];
  const [error, setError] = useState();
  const [success,setSuccess]=useState(null);

  const onSubmit = async (values,action) =>{
    const{...data}=values;
    try{
     const response = await axios.post("subscribers/store",data);
     console.log("response", response.data.message);
     if (response.data.result === "Success") {
       setSuccess(response.data.message);
       setError(null);
       formik.action.resetForm();
     }else {
       //alert('we  have errror')
       setError(response.data.message)
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
    validationSchema:SubcriptionSchema
  });

  return (
    <>
      {/* <!-- BEGIN FOOTER --> */}
      <footer className='footer'>
        <div className='wrapper'>
        <div className="section-001 section-009">
          <div className="container pt-3">
            <div className="row ">
              <div className="col-lg-5 col-xl-4 text-left text-md-left mt-4">
              <p className="col-6">
              <img
                  src="	http://meeraki.com/public/uploads/all/tu5tXvefF7hjJzjpsLCmBgTh3UbUoCTFuRREpF5U.png"
                  alt=""
                  style={{ width: "auto", height: "2.5rem" }}
                />
              </p>
                <p className="text-md-left text-white my-3 fs-13">
                  Meeraki is a fashion brand created especially for young and
                  lively youth. It consists of a hardworking and enthusiastic
                  group of people.
                </p>
                <h4 className="fs-13 text-uppercase fw-600 pb-2 mb-2 text-white">Get Social with us</h4>
                <ul className="list-inline my-3 my-md-0 social colored text-left">
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/houseofmeeraki/"
                    className="facebook"
                  >
                    <FaFacebookF className="i fs-13 mb-1" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/MeerakiU" className="twitter">
                    <FaTwitter className="i fs-13 mb-1" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://instagram.com/houseofmeeraki"
                    className="instagram"
                  >
                    <FaInstagram className="i fs-13 mb-1" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.pinterest.com/meerakistore"
                    className="youtube"
                  >
                    <FaPinterest className="i fs-13 mb-1" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/meeraki-store-89156a221/"
                    className="linkedin"
                  >
                    <FaLinkedinIn className="i fs-13 mb-1" />
                  </a>
                </li>
              </ul>
                <div className="d-inline-block d-md-block my-2 mt-4">
                <form className="form-inline d-flex" onSubmit={formik.handleSubmit}>
                    <div className="form-group mb-0">
                      <input
                        type="email"
                        className="subcribe-email-input"
                        placeholder="Your Email Address"
                        name="email"
                        autoComplete='off' 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                   <button type="submit" className="btn-subscribe">
                      Subscribe
                    </button>
                  </form>
                  {formik.errors.email && formik.touched.email ? (
                          <Alert severity="error" className='mt-2'>{formik.errors.email}</Alert>
                    ) : null}
                    {!success && <p className="text-left mt-2" style={{color:"red",fontSize:"1rem"}}>{error ? error : ""}</p>}
                    {!error && <p className="text-left mt-2" style={{color:"green",fontSize:"1rem"}}>{success ? success : ""}</p>} 
                </div>
              </div>
              <div className="col-lg-3 ml-xl-auto col-md-4 mr-0 offset-md-1">
                <div className="text-left text-md-left mt-4">
                  <h4 className="fs-13 text-uppercase fw-600 border-bottom border-gray-900 pb-2 mb-4 text-white">
                    Contact Info
                  </h4>
                  <ul className="list-unstyled">
                    <li className="mb-2 d-flex">
                      <span className="d-block opacity-30 fs-13 text-gray-200">Phone:</span>
                      &nbsp;&nbsp;<span className="d-block opacity-70 fs-13 text-gray-200">
                        +92 308 786 9696
                      </span>
                    </li>
                    <li className="mb-2 d-flex">
                      <span className="d-block opacity-30 fs-13 text-gray-200">Email:</span>
                      &nbsp;&nbsp;<span className="d-block opacity-70 text-gray-200">
                        <a
                          href="mailto:support@meeraki.com"
                          className="fs-13 text-reset"
                        >
                          support@meeraki.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
               {/* Footer Nav */}
            {footerNav.map((nav, index) => (
              <NavCol nav={nav} key={index} />
            ))}
            </div>
            <div className="row text-center mt-4" style={{borderTop:"1px solid rgba(255, 255, 255, 0.1)"}}>
            <p className="fs-13 mt-3">
                  Copyright © 2023 Meeraki. Developed by{" "}
                  <a href="https://thedatech.com" style={{ color: "#ED7014" }}>
                    <b>DA Tech</b>
                  </a>
                </p>
            </div>
          </div>
        </div>
      <div id="sy-whatshelp">
        <div className="sywh-services">
          <a
            href="https://wa.me/923341555534?text=Product%3A%20%0ahttp%3A%2F%2Fmeeraki.com%2F"
            id="whatsappLink"
            className="whatsapp"
            data-tooltip="WhatsApp"
          >
            <FaWhatsapp className="i mb-1" />
          </a>
        </div>
      </div>
        </div>
      </footer>
      {/* <!-- FOOTER EOF   --> */}
    </>
  );
};
