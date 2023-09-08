import { ShippingUserSchema } from 'Schemas';
import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import Dropdown from 'react-dropdown';

const countries = [
  { label: 'Country 1', value: '1' },
  { label: 'Country 2', value: '2' },
];
const cities = [
  { label: 'city 1', value: '1' },
  { label: 'city 2', value: '2' },
];

const initialValues={
  name:"",
  email:"",
  password:"",
  phone:"",
  address:"",
  country:"country 1",
  city:"city 1",
  postal_code:""
  }

export const CheckoutStep1 = ({ onNext }) => {
  const [country,setCountry]=useState('');
  const [city,setCity]=useState('');
  
  const onSubmit=(values)=>{
     console.log("kbs");
    const registerUser='https://meeraki.com/api/v2/auth/signup';
    const shippingUser='https://meeraki.com/api/v2/user/shipping/create';

    const postUser=axios.post(registerUser,values);
    const postShip=axios.post(shippingUser,values);
    axios.all([postUser,postShip]).then(
      axios.spread((...allData)=>{
        const user_reg=allData[0]
        console.log("user_reg",user_reg);
      })
    );


  }
  
  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    validationSchema:ShippingUserSchema
  });

  return (
    <>
      {/* <!-- BEING CHECKOUT STEP ONE -->  */}
      <div className='checkout-form'>
        <form  onSubmit={formik.handleSubmit}>
          <div className='checkout-form__item'>
            <h4>Info about you</h4>
            <div className='box-field'>
              <input
                type='text'
                className='form-control box-field__input_checkout'
                placeholder='Enter your name'
                name='name'
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
                className='form-control box-field__input_checkout'
                placeholder='Enter your email'
                name='email'
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
                  className='form-control box-field__input_checkout'
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
              <div className='box-field'>
                <input
                  type='tel'
                  className='form-control box-field__input_checkout'
                  placeholder='Enter your phone'
                  name='phone'
                  autoComplete='off' 
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                />
                 {formik.errors.phone && formik.touched.phone ? (
                      <p className="form-error">{formik.errors.phone}</p>
                    ) : null}
              </div>
            </div>
            <div className='box-field'>
            <input
                  type='text'
                  className='form-control box-field__input_checkout'
                  placeholder='Enter the address'
                  name='address'
                  autoComplete='off' 
                          value={formik.values.address}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                />
                      {formik.errors.address && formik.touched.address ? (
                      <p className="form-error">{formik.errors.address}</p>
                    ) : null}
              </div>
              <Dropdown
              options={countries}
              className='react-dropdown'
              name="country"
              onChange={(option) => setCountry(option.value)}
              placeholder='Select a country'
            />
             <Dropdown
              options={cities}
              className='react-dropdown'
              onChange={(option) => setCity(option.value)}
              placeholder='Select a city'
            />
              <div className='box-field'>
              <input
                  type='text'
                  className='form-control box-field__input_checkout'
                  placeholder='Enter the Postal code'
                  name='postal_code'
                  autoComplete='off' 
                  value={formik.values.postal_code}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                      {formik.errors.postal_code && formik.touched.postal_code ? (
                      <p className="form-error">{formik.errors.postal_code}</p>
                    ) : null}
              </div>
          </div>
          <div className='checkout-form__item'>
            <h4>Select a payment option</h4>
          </div>
          <div className='checkout-buttons'>
            {/* <button className='btn btn-grey btn-icon'>
              {' '}
              <i className='icon-arrow'></i> back
            </button> */}
            <button type='submit'  onClick={onNext} disabled={!formik.isValid} className='btn btn-icon btn-next'>
              next <i className='icon-arrow'></i>
            </button>
          </div>
        </form>
      </div>
      {/* <!-- CHECKOUT STEP ONE EOF -->  */}
    </>
  );
};




