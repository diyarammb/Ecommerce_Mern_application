import React from 'react'
import { PublicLayout } from 'layout/PublicLayout';
import { FormalEdit } from 'components/Category/formalEdit';

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
    label: 'Formal Edit',
    path: '/Category_formalEdit',
  },
];
const Category_formalEdit = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Formal Edit' description="The Collection of a unique fusion of contemporary class and timeless fashion. Bringing you a range of subtly ornate designs paired with plethora of colors stand out contrasting against exclusively luxe fabrics.">
    <FormalEdit/>
  </PublicLayout>
  )
}

export default Category_formalEdit