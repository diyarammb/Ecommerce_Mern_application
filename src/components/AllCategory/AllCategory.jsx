import { useProductContext } from 'Context/productContext'
import React from 'react'
import { Sub_category } from './Sub_category';
import Link from "next/link";

export const AllCategory = () => {
    const {allCategories,Unstitched}=useProductContext();
    console.log("readyToWear",allCategories);
  return (
    <div className='container'>
            <div className="mb-3 bg-white shadow-sm rounded">
               <Link href={'/category_ready_to_wear'}>
                <div className="p-3 border-bottom fs-16 fw-600">
                    <a className="text-reset">{allCategories.name}</a>
                </div>
                </Link>
                <Sub_category id={allCategories.id}/>
            </div>
            <div className="mb-3 bg-white shadow-sm rounded">
                <div className="p-3 border-bottom fs-16 fw-600">
                    <a className="text-reset">{Unstitched.name}</a>
                </div>
            </div>
            </div>
  )
}
