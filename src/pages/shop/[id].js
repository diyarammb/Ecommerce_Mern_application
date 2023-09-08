import React from 'react'
import { Shop } from 'components/Shop/Shop';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Shop',
    path: '/shop',
  },
];

const Shoppage = (data) => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Shop'>
      <Shop data={data}/>
      <div>Shoppage</div>
    </PublicLayout>
  )
}

export async function getStaticPaths() {
    
    return {
      paths:[{ params: { id: '12' } }, { params: { id: '36' } }],
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  export async function getStaticProps(context) {
    const id=context.params.id;
    const data=await (await fetch(`https://meeraki.com/api/v2/sub-categories/${id}`)).json();
  
    return {
      props: {
        data
      }, // will be passed to the page component as props
    }
  }

export default Shoppage