import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { urlFor } from '../lib/client';

const baseUrl = "https://cdn.sanity.io"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const HeroBanner = ({ heroBanner }) => {
  var img = urlFor(heroBanner.image).options.source.asset._ref;
  img = img.replace('image-','')
  img = img.replace('-jpg','.jpg');
  img = img.replace('-png','.png');
  img = img.replace('-webp','.webp');

  const imageUrl = (`${baseUrl}/images/${projectId}/${dataset}/${img}`)
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <Image src={imageUrl} alt="Banner image"  
        className='hero-banner-image' 
        width={500}
        height={500}/>

        <div>
          <Link href={`/products/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>

      </div>
    </div>

  )
}

export default HeroBanner