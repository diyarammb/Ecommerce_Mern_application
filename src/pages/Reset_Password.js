import React from 'react'
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { PublicLayout } from 'layout/PublicLayout';
import { ResetPassword } from 'components/Login/ResetPassword';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Reset Password',
    path: '/Reset_Password',
  },
];
const Reset_Password = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Reset Password'>
    <ResetPassword/>
    <Subscribe />
  </PublicLayout>
  )
}

export default Reset_Password