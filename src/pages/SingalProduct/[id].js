import { Singal_Product } from 'components/Product/ProductDetails/Singal_Product';
import { MostViewed } from 'components/shared/MostViewed/MostViewed';
import { PublicLayout } from 'layout/PublicLayout';
import React from 'react'
const breadcrumbsData = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Shop',
      path: '/shop',
    },
    {
      label: 'Singal Product',
      path: '/SingalProduct',
    },
  ];

const SingalProduct = (data) => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Singal Product'>
    <Singal_Product data={data}/>
    <MostViewed additionalClass='product-viewed' />
   </PublicLayout>
  )
}

export async function getStaticPaths() {
    const data=await (await fetch(`https://meeraki.com/api/v2/products/ready-to-wear`)).json();
    const allnewArrival=data.data.map((product)=>product.id);
    
    return {
      paths:allnewArrival.map((productID)=>({params:{id:`${productID}`}})),
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  export async function getStaticProps(context) {
    const id=context.params.id;
    const data=await (await fetch(`https://meeraki.com/api/v2/products/${id}`)).json();
  
    return {
      props: {
        data
      }, // will be passed to the page component as props
    }
  }

export default SingalProduct















