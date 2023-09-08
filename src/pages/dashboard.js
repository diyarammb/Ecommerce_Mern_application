import { Dashboard } from 'components/Dashboard/Dashboard';
import { Delivery_Policy } from 'components/DeliveryPolicy/Delivery_Policy'
import { PublicLayout } from 'layout/PublicLayout'
import React from 'react'

const dashboard = () => {
    const breadcrumbsData = [
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'Dashboard',
          path: '/dashboard',
        },
      ];
  return (
   <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Dashboard'>
    <Dashboard/>
   </PublicLayout>
  )
}

export default dashboard