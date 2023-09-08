import React from 'react'
import { PublicLayout } from 'layout/PublicLayout';
import { Sales } from 'components/Category/Sales';



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
    label: 'Clearance',
    path: '/category_clearance',
  },
];
const category_clearance = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Clearance' description="The Collection of a unique fusion of contemporary class and timeless fashion. Bringing you a range of subtly ornate designs paired with plethora of colors stand out contrasting against exclusively luxe fabrics." >
    <Sales/>
  </PublicLayout>
  )
}

export default category_clearance