import React from 'react'
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { PublicLayout } from 'layout/PublicLayout';
import { GuestLogin } from 'components/GuestLogin/GuestLogin';
import ForgotPassword from 'components/Login/ForgotPassword';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Forgot Password',
    path: '/forgot_password',
  },
];
const forgot_password = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Forgot Password'>
    <ForgotPassword/>
    <Subscribe />
  </PublicLayout>
  )
}

export default forgot_password