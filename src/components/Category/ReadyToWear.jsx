import { useProductContext } from 'Context/productContext'
import React from 'react'
import { Categories } from './Categories/Categories';

export const ReadyToWear = () => {
    const {readyToWear}=useProductContext();
    console.log(readyToWear,"readyToWear");

  return (
    <>
    {/* <!-- BEGIN TOP CATEGORIES --> */}
    <section className='all-categories'>
    <div className='top-categories__items'>
      <Categories categories={readyToWear}/>
    </div>
  </section>
  {/* <!-- TOP CATEGORIES EOF --> */}
  </>
  )
}
