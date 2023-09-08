import React from 'react'
import {FiFilter,FiChevronLeft} from "react-icons/fi";
import {BiChevronDown} from "react-icons/bi";
import { Categories } from 'components/Category/Categories/Categories';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useProductContext } from '../../../Context/productContext';
import Link from "next/link";
import Dropdown from 'react-dropdown';
import { useState } from 'react';
import Slider from 'rc-slider';
import router from 'next/router';

// React Range
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const options = [
  { value: 'highToMin', label: 'Price high to low' },
  { value: 'minToHigh', label: 'Price low to high' },
  { value: 'Newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' }
];

const API="https://meeraki.com/api/v2/products/category/";
export const ProductCategory = () => {
  const {getCategoryProduct,categoryProduct,iscategoryProductLoading}=useProductContext();
  const [productOrder, setProductOrder] = useState(
    categoryProduct.sort((a, b) => (a.current_price < b.current_price ? 1 : -1))
  );
  const router = useRouter();
  const {id}=router.query;
  useEffect(() => {
    getCategoryProduct(`${API}${id}`);
}, [router.query.id]);

useEffect(() => {
  setProductOrder(productOrder);
}, [productOrder]);

  if(iscategoryProductLoading){
    return(
      <div>....Loading</div>
    )
  }
  const handleSort = (value) => {
    if (value === 'highToMin') {
      const newOrder =categoryProduct.sort((a, b) => (a.base_price < b.base_price ? 1 : -1));
      setProductOrder(newOrder);
    }
    if (value === 'minToHigh') {
      const newOrder =categoryProduct.sort((a, b) => (a.base_price > b.base_price ? 1 : -1));
      setProductOrder(newOrder);
    }
    if(value==='Newest'){
      const newOrder=categoryProduct.sort((a,b) => new Date(a.reviewDate) - new Date(b.reviewDate));
      setProductOrder(newOrder);
    }
    if(value==='oldest'){
      const newOrder=categoryProduct.sort((a,b) =>new Date(b.reviewDate) - new Date(a.reviewDate));
      setProductOrder(newOrder);
    }
  };

  return (
    <section className='mb-4 pt-3 bg-light'>
        <div className='container sm-px-0'>
        <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item opacity-50"><Link className='category-blink text-reset' href="/">Home</Link></li>
    <li className="breadcrumb-item opacity-50"><Link href="/categories" className='category-blink text-reset'>All categories</Link></li>
  </ol>
</nav>
                       <div className="row mt-5 mb-4">
                         <div className="col-lg-3 col-md-4"></div>
                          <div className="col-lg-6 col-md-4">
                            <p style={{textAlign: "center",fontSize: "15px",lineHeight: "1.6"}}>The Collection of a unique fusion of contemporary className and timeless fashion. Bringing you a range of subtly ornate designs paired with plethora of colors stand out contrasting against exclusively luxe fabrics. </p>
                          </div>
                         <div className="col-lg-3 col-md-4"></div>
                        </div> 
                       </div>
                            <div className="d-flex align-items-center px-md-5">
                            <div className='col-lg-1 col-md-1'>
                            </div>
                            <div className="col-lg-4 col-md-3 align-self-end ">
                            <button className="filterbtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><FiFilter/></button>

<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel">
Filters</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className='bg-white shadow-sm rounded mb-3 border-top'>
    <h2 className='fs-15 fw-600 p-3 border-bottom'>
    Categories
    </h2>
    <div className='p-3'>
      <ul className='list-unstyled'>
      <li className='mb-2'>
        <button className='text-reset fs-14 fw-600' style={{border:"none",background:"transparent"}} onClick={() => router.push('/categories')}>
        <FiChevronLeft className='fs-15 mx-1'/>
        All categories
        </button>
      </li>
      <li className='mb-2'>
        <a className='text-reset fs-14 fw-600' href='#as'>
        <FiChevronLeft className='fs-15 mx-1'/>
        ready To wear
        </a>
      </li>
      <li className='mb-2'>
        <a className='text-reset fs-14 fw-600' href='#as'>
        <FiChevronLeft className='fs-15 mx-1'/>
 Clearance
        </a>
      </li>
      </ul>
    </div>
    <div className='bg-white shadow-sm rounded mb-3 border-top'>
    <h2 className='fs-15 fw-600 p-3 border-bottom'>
    Price range
    </h2>
    <div className='range-slider'>
                  <Range
                    min={2500}
                    max={10000}
                    defaultValue={[2500, 10000]}
                    tipFormatter={(value) => `${value}`}
                    allowCross={false}
                    tipProps={{
                      placement: 'bottom',
                      prefixCls: 'rc-slider-tooltip',
                    }}
                  />
                </div>
    </div>
    <div className='bg-white shadow-sm rounded mb-3'>
    <h2 className='fs-15 fw-600 p-3 border-bottom'>
    Filter by size
    </h2>
    <label className='checkbox-box'>
                    <input
                      type='checkbox'
                    />
                    <span className='checkmark'></span>
                    Small
                  </label>
                  <label className='checkbox-box'>
                    <input
                      type='checkbox'
                    />
                    <span className='checkmark'></span>
                   Medium
                  </label>
                  <label className='checkbox-box'>
                    <input
                      type='checkbox'
                    />
                    <span className='checkmark'></span>
                 Large
                  </label>
                  <label className='checkbox-box'>
                    <input

                      type='checkbox'
                    />
                    <span className='checkmark'></span>
                   XL-Large
                  </label>
    </div>
  </div>
  </div>
</div>
  <div className="col-lg-3 col-md-2 offset-md-4 px-md-5">
  <form className='form-group ml-auto mr-0 w-200px d-none d-xl-block justify-content-center'>
                            <label className="mb-0 opacity-50">Sort By</label>
                            <div className='shop-main__select'>
                  <Dropdown
                    options={options}
                    className='react-dropdown'
                    onChange={(option) => handleSort(option.value)}
                    value={options[0]}
                  />
                </div>
                </form>
  </div>
                            </div>
                            <section className='all-categories'>
        <div className='top-categories__items'>
          <Categories categories={categoryProduct} />
        </div>
      </section>         
    </section>
  )
}
