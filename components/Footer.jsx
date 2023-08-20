import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import { FaTiktok} from 'react-icons/fa';
import logo from '../Images/cocoshine-Logo.png' ;


const Footer = () => {
  return (
    <div className="footer-container">
        <Link href="/">
          <Image src={logo} alt="" width={300} height={55}/>
        </Link>
      <p >
        <Link className='link' href="/terms_conditions">
          Conditions generales et politique de confidentialité
        </Link>
      </p>
      <p className='secondary-text'>COCO SHINE 2023, All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <FaTiktok />
      </p>
    </div>
  )
}

export default Footer