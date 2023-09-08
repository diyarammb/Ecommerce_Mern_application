import React from 'react'
import { PublicLayout } from 'layout/PublicLayout';
import { FestivePret } from 'components/Category/FestivePret';


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
    label: 'Festive Pret',
    path: '/category_Festivepret',
  },
];
const category_Festivepret = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Festive Pret' description="The Collection of a unique fusion of contemporary class and timeless fashion. Bringing you a range of subtly ornate designs paired with plethora of colors stand out contrasting against exclusively luxe fabrics.">
    <FestivePret/>
  </PublicLayout>
  )
}

export default category_Festivepret