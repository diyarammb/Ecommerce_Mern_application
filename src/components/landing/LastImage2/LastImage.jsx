import { useProductContext } from 'Context/productContext';
import Link from 'next/dist/client/link';
import React from 'react'

export const LastImage = () => {
    const {ImageTwo}=useProductContext();
    console.log(ImageTwo);
  return (
    <div className="mb-2 mt-5">
    <div className="container-fuild mx-3">
      <div className="row gutters-10">
        {
            ImageTwo.map((curElem)=>(
                <div className="col-xl col-md-6">
          <div className="mb-3 mb-lg-0">
              <img
                src={curElem.image_url}
                alt="Meeraki promo"
                className="img-fluid lazyloaded-card"
              />
          </div>
        </div>
            ))
        }
      </div>
    </div>
  </div> 
  )
}

