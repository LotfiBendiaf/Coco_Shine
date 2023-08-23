import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import Image from 'next/image';

const baseUrl = "https://cdn.sanity.io"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  var img = urlFor(image).options.source.asset._ref;
  img = img.replace('image-','')
  img = img.replace('-jpg','.jpg');
  img = img.replace('-png','.png');
  img = img.replace('-webp','.webp');

  const imageUrl = (`${baseUrl}/images/${projectId}/${dataset}/${img}`)
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <Link href={`/products/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <Image 
          src={imageUrl} className="footer-banner-image"
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}

export default FooterBanner