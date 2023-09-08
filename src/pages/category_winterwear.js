import React from 'react'
import { PublicLayout } from 'layout/PublicLayout';
import { WinterWear } from 'components/Category/WinterWear';

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
    label: 'Winter Wear',
    path: '/category_winterwear',
  },
];
const category_winterwear = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Winter Wear' description="The Collection of a unique fusion of contemporary class and timeless fashion. Bringing you a range of subtly ornate designs paired with plethora of colors stand out contrasting against exclusively luxe fabrics.">
     <WinterWear/>
  </PublicLayout>
  )
}



export default category_winterwear