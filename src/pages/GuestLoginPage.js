import React from 'react'

import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { PublicLayout } from 'layout/PublicLayout';
import { GuestLogin } from 'components/GuestLogin/GuestLogin';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Guest Login',
    path: '/GuestLoginPage',
  },
];

const GuestLoginPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Guest Login'>
      <GuestLogin/>
      <Subscribe />
    </PublicLayout>
  )
}

export default GuestLoginPage