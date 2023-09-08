import React from 'react'
import { PublicLayout } from 'layout/PublicLayout';
import { ProductCategory } from 'components/AllCategory/categories/ProductCategory';
import { Layout } from 'layout/Layout';

const product_category = () => {
  return (
    <Layout>
    <div style={{marginTop:"12rem"}}>
    <ProductCategory/>
    </div>
    </Layout>
  )
}

export default product_category