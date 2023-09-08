import { Delivery_Policy } from 'components/DeliveryPolicy/Delivery_Policy'
import { PublicLayout } from 'layout/PublicLayout'
import React from 'react'

const DeliveryPolicy = () => {
    const breadcrumbsData = [
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'Delivery Policy',
          path: '/DeliveryPolicy',
        },
      ];
  return (
   <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Delivery Policy'>
    <Delivery_Policy/>
   </PublicLayout>
  )
}

export default DeliveryPolicy