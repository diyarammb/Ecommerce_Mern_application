import React from 'react'
import { PublicLayout } from 'layout/PublicLayout';
import { SupportTicket } from 'components/SupportTicket/SupportTicket';

const support_ticket = () => {
    const breadcrumbsData = [
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'Support Ticket',
          path: '/support_ticket',
        },
      ];
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Support Ticket'>
    <SupportTicket/>
</PublicLayout>
  )
}

export default support_ticket