import React,{ useState } from 'react'
import { Categories } from './Categories/Categories'
import { useProductContext } from 'Context/productContext'
import { FiChevronLeft, FiFilter } from 'react-icons/fi';
import router from 'next/router';
import Dropdown from 'react-dropdown';
import Slider from 'rc-slider';
import { usePagination } from 'components/utils/Pagination/Pagination';
import { PagingList } from 'components/shared/PagingList/PagingList';
import { useEffect } from 'react';

// React Range
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const options = [
  { value: 'highToMin', label: 'Price high to low' },
  { value: 'minToHigh', label: 'Price low to high' },
  { value: 'Newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' }
];

export const Sales = () => {
  const {endSeasonProduct}=useProductContext();
  const allProducts = [...endSeasonProduct];
  const [productOrder, setProductOrder] = useState(
    allProducts.sort((a, b) => (a.current_price < b.current_price ? 1 : -1))
  );

  useEffect(() => {
    setProductOrder(productOrder);
  }, [productOrder]);

  const paginate = usePagination(productOrder, 9);

  const handleSort = (value) => {
    if (value === 'highToMin') {
      const newOrder = allProducts.sort((a, b) => (a.current_price < b.current_price ? 1 : -1));
      setProductOrder(newOrder);
    }
    if (value === 'minToHigh') {
      const newOrder = allProducts.sort((a, b) => (a.current_price > b.current_price ? 1 : -1));
      setProductOrder(newOrder);
    }
    if(value==='Newest'){
      const newOrder=allProducts.sort((a,b) => new Date(a.review_date) - new Date(b.review_date));
      setProductOrder(newOrder);
    }
    if(value==='oldest'){
      const newOrder=allProducts.sort((a,b) =>new Date(b.review_date) - new Date(a.review_date));
      setProductOrder(newOrder);
    }
  };

  return (
    <>
    {/* <!-- BEGIN TOP CATEGORIES --> */}
    <section className='all-categories'>
    <div className="d-flex align-items-center  mb-4">
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
        <button className='text-reset fs-14 fw-600' style={{border:"none",background:"transparent"}} onClick={() => router.push('/category_ready_to_wear')}>
        <FiChevronLeft className='fs-15 mx-1'/>
        ready To wear
        </button>
      </li>
      <li className='mb-2'>
        <button className='text-reset fs-14 fw-600' style={{border:"none",background:"transparent"}} onClick={() => router.push('/category_clearance')}>
        <FiChevronLeft className='fs-15 mx-1'/>
 Clearance
        </button>
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
    <div className='top-categories__items'>
      <Categories categories={paginate?.currentData()}/>
    </div>
    <PagingList paginate={paginate} />
  </section>
  {/* <!-- TOP CATEGORIES EOF --> */}
  </>
  )
}
