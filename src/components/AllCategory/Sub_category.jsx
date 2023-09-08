import { useProductContext } from 'Context/productContext';
import React from 'react'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from "next/link";

const API = "https://meeraki.com/api/v2/sub-categories/";

export const Sub_category = ({id}) => {
    const router = useRouter();
    const {getSubCategory,SubCategory}=useProductContext();
    console.log("SubCategory",SubCategory);
  
    useEffect(() => {
        getSubCategory(`${API}${id}`);
    }, [router.query.id]);
  return (
    <div className="p-3 p-lg-4">
    <div className="row">
     {SubCategory.map((subcategory)=>{
        const {name,id}=subcategory;
        return(
            <div className="col-lg-4 col-6 text-left">
            <h6 className="mb-3" key={id}>
                <Link className="text-reset fw-600 fs-14" href={`/product_category/${id}`}>{name}</Link>
            </h6>
            <ul className="mb-3 list-unstyled pl-2">
            </ul>
        </div>
        )
     })}
                               
                            </div>
</div>
  )
}
