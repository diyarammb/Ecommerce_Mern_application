import React from 'react'
import { PublicLayout } from 'layout/PublicLayout';
import { ManageProfile } from 'components/ManageProfile/ManageProfile';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Manage Profile',
    path: '/manage_profile',
  },
];
const manage_profile = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Manage Profile'>
    <ManageProfile/>
  </PublicLayout>
  )
}

export default manage_profile