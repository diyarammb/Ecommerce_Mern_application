import React from 'react'
import { PublicLayout } from 'layout/PublicLayout';
import { PurchaseHistory } from 'components/PurchaseHistory/PurchaseHistory';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Purchase History',
    path: '/purchase_history',
  },
];

const purchase_history = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Purchase History'>
    <PurchaseHistory/>
  </PublicLayout>
  )
}

export default purchase_history