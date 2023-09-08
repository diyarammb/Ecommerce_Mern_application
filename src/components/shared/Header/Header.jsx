import { header } from 'data/data.header';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { Nav } from './Nav/Nav';
import { navItem } from 'data/data.header';
import { CartContext } from 'pages/_app';
import { FaSearch, FaTruck } from "react-icons/fa";
import MidNav from './MidNav';
import { useWishlistContext } from 'Context/wishlistContext';


export const Header = ({ onCurrencyChange, currency }) => {
  const { mycart,user} = useContext(CartContext);
  const {Wishlist}=useWishlistContext();
  const [promo, setPromo] = useState(true);
  const [fixedNav, setFixedNav] = useState(false);
  // For Fixed nav
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };
  return (
    <>
      {/* <!-- BEGIN HEADER --> */}
      <header className='header'>
          <div className='header-top'>
          <div className="top-line-meer">
      <div id="shopify-section-custom-ticker" className="shopify-section">
        <div
          className="h__top bgbl pt__10 pb__10 fs__12 flex fl_center al_center"
          data="data-2"
        >
          <div className="container-fluid bounce">
            <div className="text-wrapper">
              <p className="animate-charcter">🌎 FREE Delivery Nationwide 🌎</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <MidNav onCurrencyChange={onCurrencyChange} currency={currency}/>
     </div>
        <div className={`header-content ${fixedNav ? 'fixed' : ''}`}>
          <div className='header-logo'>
          <form
    className="stop-propagation"
  >
    <div className="d-flex position-relative align-items-center">
      <div
        className="d-lg-none"
        data-toggle="class-toggle"
        data-target=".front-header-search"
      >
        <button
          className="btn px-2"
          type="button"
          style={{ display: "none" }}
        >
          <i className="la la-2x la-long-arrow-left"></i>
        </button>
      </div>
      <div className="input-group">
        <input
          type="text"
          className="border-0 border-lg form-control"
          id="name"
          name="name"
          placeholder="I am looking for..."
         
        />
        <div className="input-group-append d-none d-lg-block">
          <button className="searchbtn searchbtnicon" type="submit">
            <FaSearch className="la-flip-horizontal fs-18" />
          </button>
        </div>
      </div>
    </div>
  </form>
          </div>
          <div className='header-box'>
            {/* Nav */}
            <Nav navItem={navItem} />
            {/* header options */}
            <ul className='header-options'>
              <li>
                <Link href='/trackOrder'>
                  <a className='text-center'>
                    <i>
                    <FaTruck/>
                    <br/>
                    Track
                    </i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/wishlist'>
                  <a className='text-center'>
                    <i className='icon-heart'>
                    <br/>
                    <i>Wishlist</i>
                    </i>
                    <span>{Wishlist.length ?? '0'}</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/checkout'>
                  <a className='text-center'>
                    <i className='icon-cart'>
                    <br/>
                    <i>Cart</i>
                    </i>
                    <span>{Object.keys(mycart).length ?? '0'}</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className='btn-menu js-btn-menu'>
            {[1, 2, 3].map((i) => (
              <span key={i}>&nbsp;</span>
            ))}
          </div>
        </div>
      </header>

      {/* <!-- HEADER EOF   --> */}
    </>
  );
};
