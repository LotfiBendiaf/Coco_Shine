import React, { useState } from 'react';
import Head from 'next/head';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Image from 'next/image';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';


import secure from '../../Images/paypal-payment.png' ;

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();


  const baseUrl = "https://cdn.sanity.io"
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const obj = urlFor(image).options.source
  const imageUrls = []
  obj.map((item) =>{
    var img = item.asset._ref
    img = img.replace('image-','');
    img = img.replace('-jpg','.jpg');
    img = img.replace('-png','.png');
    img = img.replace('-webp','.webp');

    imageUrls.push(`${baseUrl}/images/${projectId}/${dataset}/${img}`)
  })

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  return (
    <div>
      <Head>
        <title>{`COCOSHINE : ${name}`}</title>
      </Head>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image src={imageUrls[0] && imageUrls[index] } className="product-detail-image"
            loading="lazy"
            width={500}
            height={500}
            alt='Main Product Image'
             />
          </div>
          <div className="small-images-container">
            {imageUrls?.map((item, i) => (
              <Image 
                width={50}
                height={50}
                key={i}
                src={item}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
                alt='Product small image'
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
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
          <h4>Description : </h4>
          <p>{details}</p>
          <p className="price">{price}€</p>
          <div className="quantity">
            <h3>Quantité :</h3>
            <p className="quantity-desc noSelect">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Ajouter au Panier</button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>Acheter Maintenant</button>
          </div>
          <Image src={secure} alt="Payment Methods" width={300} height={55}/>
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>Articles qui peuvent vous interesser</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product }
  }
}

export default ProductDetails