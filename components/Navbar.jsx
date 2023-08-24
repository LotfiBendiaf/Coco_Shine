import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../Images/cocoshine-Logo.png' ;
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
        <Link href="/">
          <Image src={logo} alt="Coco Shine Logo" width={300} height={55}/>
        </Link>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar