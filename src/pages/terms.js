import { TermsConditions } from 'components/TermsConditions/TermsConditions'
import { PublicLayout } from 'layout/PublicLayout'
import React from 'react'

const terms = () => {
    const breadcrumbsData = [
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'Terms & Conditions',
          path: '/terms',
        },
      ];
  return (
   <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Terms & Conditions'>
    <TermsConditions/>
   </PublicLayout>
  )
}

export default terms