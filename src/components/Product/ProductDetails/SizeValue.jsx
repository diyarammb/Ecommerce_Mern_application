import React, { useState } from 'react'

export const SizeValue = ({sizeBox}) => {
    console.log("sizeBox",sizeBox);
    const [activeColor, setActiveColor] = useState(2);
  return (
    <div className='product-options'>
    {sizeBox && sizeBox.map((curEle,index)=>{
        console.log("sizeBox",curEle.options);
        return(
            <div className='product-info__color' key={index}>
                  <span>{curEle.title}:</span>
                  <div className='col-sm-10'>
                <div className='d-flex align-items-center py-2 mb-2 smalls'>
                  {curEle.options.map((option,index)=>{
                   return(
                    <div className='radio-input-container'>
                    <input type="radio" name="ratio" className='input-radio'/>
                    <div className='ratio-title'>
                      <label htmlFor="walk-radio">{option}</label>
                    </div></div> 
                   )
                  })}
                  </div>
                  </div> 
            </div>
        )
    })

    }
    </div>
  )
}
