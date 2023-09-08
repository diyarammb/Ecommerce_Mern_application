import { Privacy_Policy } from 'components/PrivacyPolicy/Privacy_Policy'
import { PublicLayout } from 'layout/PublicLayout'
import React from 'react'

const Privacy = () => {
  const breadcrumbsData = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Privacy Policy',
      path: '/privacy',
    },
  ];
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Privacy Policy'>
       <Privacy_Policy/>
    </PublicLayout>
  )
}

export default Privacy