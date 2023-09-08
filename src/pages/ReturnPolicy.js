import { Return_Policy } from 'components/ReturnPolicy/Return_Policy';
import { PublicLayout } from 'layout/PublicLayout';
import React from 'react'

const ReturnPolicy = () => {
    const breadcrumbsData = [
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'Return Policy',
          path: '/ReturnPolicy',
        },
      ];
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Return Policy'>
        <Return_Policy/>
    </PublicLayout>
  )
}

export default ReturnPolicy