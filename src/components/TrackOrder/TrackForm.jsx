import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react';

export const TrackForm = () => {

    const [input, setInput] = useState([]);
    const router=useRouter();

    
    const OnSearch=(event)=>{
     event.preventDefault();

     const abcd=encodeURI(input);
     router.push(`/trackOrder?order_code=${abcd}`)
     console.log("current query",abcd)
    }
   
  return (
    <form>
  <div className='fs-15 fw-600 p-3 text-center'>
                        Check Your Order Status
                            </div>
                            <div className='form-box-content p-3'>
                                <div className='form-group'>
                                <input type="text" className="form-control mb-3" placeholder="Order Code" name="order_code" value={input}
      onChange={(e) => setInput(e.target.value)}/>
                                </div>
                                <div className='text-center'>
                                <button type="submit" className="btn btn-primary">Track Order</button>
                                </div>
                            </div>
                       
                    </form>
  )
}
