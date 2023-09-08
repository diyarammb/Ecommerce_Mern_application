import { Products } from 'components/Product/Products/Products';
import { PagingList } from 'components/shared/PagingList/PagingList';
import { usePagination } from 'components/utils/Pagination/Pagination';
import productData from 'data/product/product';
import Slider from 'rc-slider';
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import { AsideItem } from '../shared/AsideItem/AsideItem';
import { useProductContext } from 'Context/productContext';
import { FiChevronLeft, FiFilter } from 'react-icons/fi';
import router from 'next/router';
import Link from 'next/link';

// React Range
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const options = [
  { value: 'highToMin', label: 'Price high to low' },
  { value: 'minToHigh', label: 'Price low to high' },
  { value: 'Newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' }
];
export const Shop = () => {
  const {readyToWear}=useProductContext();
  const allProducts = [...readyToWear];
  console.log("allProducts:",allProducts);
  const [productOrder, setProductOrder] = useState(
    allProducts.sort((a, b) => (a.current_price < b.current_price ? 1 : -1))
  );

  const [products, setProducts] = useState(allProducts);
  const [filter, setFilter] = useState({ isNew: false, isSale: true });

  useEffect(() => {
    setProductOrder(productOrder);
  }, [productOrder]);

  useEffect(() => {
    if (filter.isNew && filter.isSale) {
      const newPro = productOrder.filter(
        (pd) => pd.isNew === true && pd.isSale === true
      );
      setProducts(newPro);
    } else if (filter.isNew && !filter.isSale) {
      const newPro = productOrder.filter((pd) => pd.isNew === true);
      setProducts(newPro);
    } else if (filter.isSale && !filter.isNew) {
      const newPro = productOrder.filter((pd) => pd.isSale === true);
      setProducts(newPro);
    } else {
      setProducts([...productOrder]);
    }
  }, [filter, productOrder]);
  const recentlyViewed = [...productOrder].slice(0, 3);
  const todaysTop = [...productOrder].slice(3, 6);
  const paginate = usePagination(productOrder, 9);

  const handleSort = (value) => {
    if (value === 'highToMin') {
      const newOrder = allProducts.sort((a, b) => (a.base_price < b.base_price ? 1 : -1));
      setProductOrder(newOrder);
    }
    if (value === 'minToHigh') {
      const newOrder = allProducts.sort((a, b) => (a.base_price > b.base_price ? 1 : -1));
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
    <div>
      {/* <!-- BEGIN SHOP --> */}
      <div className='shop'>
        <div className='wrapper'>
          <div className='shop-content'>
            {/* <!-- Shop Aside --> */}
            <div className='shop-aside'>
              <div className='box-field box-field__search'>
                            <button className="filterbtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><FiFilter/></button>

<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
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
      <Link href={'/categories'}>
        <a className='text-reset fs-14 fw-600'>
        <FiChevronLeft className='fs-15 mx-1'/>
        All categories
        </a>
        </Link> 
      </li>
      <li className='mb-2'>
      <Link href={'/category_ready_to_wear'}>
        <a className='text-reset fs-14 fw-600'>
        <FiChevronLeft className='fs-15 mx-1'/>
        ready To wear
        </a>
        </Link> 
      </li>
      <li className='mb-2'>
      <Link href={'/category_clearance'}>
        <a className='text-reset fs-14 fw-600'>
        <FiChevronLeft className='fs-15 mx-1'/>
        Clearance
        </a>
        </Link> 
      </li>
      <li className='mb-2'>
        <Link href={'/categories'}>
        <a className='text-reset fs-14 fw-600'>
        <FiChevronLeft className='fs-15 mx-1'/>
        All categories
        </a>
        </Link> 
      </li>
      <li className='mb-2'>
        <a className='text-reset fs-14 fw-600' href='#as'>
        <FiChevronLeft className='fs-15 mx-1'/>
        All categories
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
                      checked={filter.isSale}
                      onChange={() =>
                        setFilter({ ...filter, isSale: !filter.isSale })
                      }
                      type='checkbox'
                    />
                    <span className='checkmark'></span>
                    Small
                  </label>
                  <label className='checkbox-box'>
                    <input
                      checked={filter.isSale}
                      onChange={() =>
                        setFilter({ ...filter, isSale: !filter.isSale })
                      }
                      type='checkbox'
                    />
                    <span className='checkmark'></span>
                   Medium
                  </label>
                  <label className='checkbox-box'>
                    <input
                      checked={filter.isSale}
                      onChange={() =>
                        setFilter({ ...filter, isSale: !filter.isSale })
                      }
                      type='checkbox'
                    />
                    <span className='checkmark'></span>
                 Large
                  </label>
                  <label className='checkbox-box'>
                    <input
                      checked={filter.isSale}
                      onChange={() =>
                        setFilter({ ...filter, isSale: !filter.isSale })
                      }
                      type='checkbox'
                    />
                    <span className='checkmark'></span>
                   XL-Large
                  </label>
    </div>
  </div>
  </div>

              </div>
              <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>You have viewed</span>
                {recentlyViewed.map((data) => (
                  <AsideItem key={data.id} aside={data} />
                ))}
              </div>
              <div className='shop-aside__item'>
                <span className='shop-aside__item-title'>Top 3 for today</span>
                {todaysTop.map((data) => (
                  <AsideItem key={data.id} aside={data} />
                ))}
              </div>
            </div>
            {/* <!-- Shop Main --> */}
            <div className='shop-main'>
              <div className='shop-main__filter'>
                <div className='shop-main__checkboxes'>
                  {/*<label className='checkbox-box'>
                    <input
                      checked={filter.isSale}
                      onChange={() =>
                        setFilter({ ...filter, isSale: !filter.isSale })
                      }
                      type='checkbox'
                    />
                    <span className='checkmark'></span>
                    SALE
                  </label>*/}
                  {/*<label className='checkbox-box'>
                    <input
                      checked={filter.isNew}
                      onChange={() =>
                        setFilter({ ...filter, isNew: !filter.isNew })
                      }
                      type='checkbox'
                    />
                    <span className='checkmark'></span>
                    NEW
                  </label>*/}
                </div>
                <div className='shop-main__select'>
                  <Dropdown
                    options={options}
                    className='react-dropdown'
                    onChange={(option) => handleSort(option.value)}
                    value={options[0]}
                  />
                </div>
              </div>
              <div className='shop-main__items'>
                <Products products={paginate?.currentData()} />
              </div>

              {/* <!-- PAGINATE LIST --> */}
              <PagingList paginate={paginate} />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- SHOP EOF   --> */}
    </div>
  );
};
