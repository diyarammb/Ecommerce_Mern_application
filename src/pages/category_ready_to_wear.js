import { ReadyToWear } from 'components/Category/ReadyToWear'
import React from 'react'
import { PublicLayout } from 'layout/PublicLayout';



const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'All Category',
    path: '/categories',
  },
  {
    label: 'Ready To Wear',
    path: '/category_ready_to_wear',
  },
];

const category_ready_to_wear = () => {

  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Ready To Wear'>
     <ReadyToWear/>
  </PublicLayout>
  )
}

export default category_ready_to_wear