import { TrackOrder } from 'components/TrackOrder/TrackOrder'
import { PublicLayout } from 'layout/PublicLayout'
import React from 'react'

const trackOrder = () => {
    const breadcrumbsData = [
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'Track Order',
          path: '/trackOrder',
        },
      ];
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Track Order'>
        <TrackOrder/>
    </PublicLayout>
  )
}

export default trackOrder