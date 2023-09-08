import React from 'react'
import { BiChevronDown } from "react-icons/bi";
import Model from '../Model/Model';
import {currencies} from 'data/Currencies';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from 'pages/_app';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';

const MidNav = ({ onCurrencyChange, currency }) => {
  const { user,Logout} = useContext(CartContext);
  const [listopen, setListopen] = useState();
  const [dropdown,setDropdown]=useState(false);

  const troggleDropdown=()=>{
    setDropdown(!dropdown);
  }
  const handleOptionClick = (curr) => {
    onCurrencyChange(curr);
    setListopen(!listopen);
  };
 
  return (
    <div className='header-top-midtop'>
   <div className="container-fluid bottom-pico">
        <div className="row">
          <div className="col-4">
          </div>
          <div className="col-4 mt-2 mb-2 text-center">
            <a href="/">
              <img
                className="netimgsrc"
                src="/assets/img/meerakiLogo.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-4 center-trick cntr-enc">
             <div className='marleft'>
             <div className="dropdown">
              <button
                className="dd_btn ma_toggle dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="ml-2 lazyloaded"
                  src={currency.icon}
                  alt=""
                  style={{ width: "2rem" }}
                />
              </button>
              <ul
                className="dropdown-menu ma_drop"
                aria-labelledby="dropdownMenuButton1"
                style={{padding:"0 0"}}
              >
              {currencies.map((curElement)=>{
                const {name,icon,id}=curElement;
                return(
                  <li key={name+icon+id}>
                  <a className="dropdown-item text-reset py-2" href="#as" onClick={() => handleOptionClick(curElement)}>
                   {name}
                    <img
                      className="ml-2 lazyloaded"
                      src={icon}
                      alt=""
                      style={{ width: "1.5rem", marginLeft: "8px" }}
                    />
                  </a>
                </li>
                )
              })}
              </ul>
            </div>
             </div>
             <div>
             {user.value && <ul className='header-nav'>
        <li>
            <a>
            <FaUserCircle className='fs-3' style={{color:"#dee2e6"}}/>
            </a>
            <ul>
               <li>
               <Link href="/manage_profile">
                    <a>My Account</a>
                </Link>
                </li>
                <li>
                  <Link href="/purchase_history">
                    <a>Order</a>
                  </Link>
                </li>
                <li onClick={Logout}>
                    <a id="logout">Logout</a>
                </li>
            </ul>
        </li>
    </ul>} 
           {!user.value && <Model/>}
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidNav