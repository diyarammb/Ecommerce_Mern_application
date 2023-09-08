import socialData from 'data/social';
import {useFormik} from "formik";
import Alert from '@mui/material/Alert';
import { ContactSchema } from 'Schemas';
import Link from "next/link";


const initialValues={
  name:"",
  email:"",
  phonenumber:"",
  message:""
  }

export const ContactInfo = () => {
  const footerSocial = [...socialData];

  const {errors,values,touched,handleBlur,handleChange,handleSubmit}=useFormik({
    initialValues,
    validationSchema:ContactSchema,
    onSubmit:(values,action)=>{
       console.log(values);
       action.resetForm();
    }
  })
  return (
    <>
      {/* <!-- BEGIN CONTACTS INFO --> */}
      <div className='section-042 mt-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 offset-xl-1 col-xl-10 col-lg-12'>
                <div className='row'>
                  <div className='col-md-6'>
                  <p style={{margin:"0px",fontSize: "14px"}}>- For order status inquiry, please <Link href="/trackOrder" style={{color: "#1b1b28"}}>click here</Link>
                        <br/>
- To cancel and return ordered items, please log-in with your account <a href="https://meeraki.com/staging/users/login" style={{color: "#1b1b28"}}>here</a> and open a ticket.
 <br/>
- For other concerns, feel free to send us a message or contact us on below details:</p>
<br/>
<h4 className="az_custom_heading">EMAIL:</h4>
<p> support@meeraki.com <br/>
                           </p>
                           <h4 className="az_custom_heading">Contact No</h4>
                           <p>+92 308 786 9696 <br/>
                           </p>
                           <h4 className="az_custom_heading">Store Hours</h4>
                           <p>Monday-Saturday 9am - 10pm <br/>
                           </p>
                           <p>Sunday 11am - 08pm </p>
                  </div>
                  <div className='col-md-6'>
                  <form onSubmit={handleSubmit}>
                  <div className="mb-3">
  <label for="name" className="form-label">Full Name *</label>
  <input type="text" className="contactform-input" id="name" name="name" autoComplete='off' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
  {errors.name && touched.name ?(<Alert severity="error">{errors.name}</Alert>):null}
</div>
  <div className='row mb-3'>
    <div className='col'>
    <label for="phonenumber" className="form-label">Phone *</label>
  <input type="text" className="contactform-input" id="phonenumber" name="phonenumber" autoComplete='off'
    value={values.phonenumber} onChange={handleChange} onBlur={handleBlur}
  />
   {errors.phonenumber && touched.phonenumber ?(<Alert severity="error">{errors.phonenumber}</Alert>):null}
    </div>
    <div className='col'>
    <label for="email" className="form-label">Email *</label>
  <input type="email" className="contactform-input" id="email" autoComplete='off' name="email"
    value={values.email} onChange={handleChange} onBlur={handleBlur}
  />
   {errors.email && touched.email ?(<Alert severity="error">{errors.email}</Alert>):null}
    </div>
  </div>
  <div className='mb-3'>
  <label for="message" className="form-label">Your Message *</label>
  <br/>
  <textarea name="message" cols="40" rows="10" className="contactform-input" autoComplete='off'
  value={values.message} onChange={handleChange} onBlur={handleBlur}></textarea>
   {errors.message && touched.message ?(<Alert severity="error">{errors.message}</Alert>):null}
  </div>
  <div className='mb-4'>
    <input type="submit" value="send" className='btn'/>
  </div>
                  </form>
                                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* <!-- CONTACTS INFO EOF contact-submit  -->  */}
    </>
  );
};
