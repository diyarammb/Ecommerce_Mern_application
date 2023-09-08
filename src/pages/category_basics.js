import React from 'react'
import { PublicLayout } from 'layout/PublicLayout';
import { Basics } from 'components/Category/Basics';

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
    label: 'Basics',
    path: '/category_basics',
  },
];
const category_basics = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Basics' description="The Collection of a unique fusion of contemporary class and timeless fashion. Bringing you a range of subtly ornate designs paired with plethora of colors stand out contrasting against exclusively luxe fabrics.">
    <Basics/>
  </PublicLayout>
  )
}

export default category_basics