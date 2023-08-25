import React from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { urlFor } from '../lib/client';
import Image from 'next/image';


const baseUrl = "https://cdn.sanity.io"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const Product = ({product :{slug, name, image, price}}) => {
  var img = urlFor(image[0]).options.source.asset._ref;
  img = img.replace('image-','')
  img = img.replace('-jpg','.jpg');
  img = img.replace('-png','.png');
  img = img.replace('-webp','.webp');
  const imageUrl = (`${baseUrl}/images/${projectId}/${dataset}/${img}`)
  return (
    <div>
    <Link href={`/products/${slug.current}`}>
      <div className="product-card">
        <Image 
          src={imageUrl}
          width={250}
          height={250}
          className="product-image"
          alt='Product Image'
          loading='lazy'
        />
        <p className="product-name">{name}</p>
        <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
        <p className="product-price">{price}€</p>
      </div>
    </Link>
  </div>
  )
}

export default Product