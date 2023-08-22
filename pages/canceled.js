import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsFillBagXFill } from 'react-icons/bs';
import Head from 'next/head';

import { useStateContext } from '../context/StateContext';

const Canceled = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  return (
    <div className="success-wrapper">
      <Head>
          <title>Paiement annulé</title>
      </Head>
      <div className="success">
        <p className="failIcon">
          <BsFillBagXFill />
        </p>
        <h2>Sorry you weren&apos;t able to finalize your purchase</h2>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Canceled