
import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

import Image from 'next/image';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

const Cart = () => {
    

  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  const baseUrl = "https://cdn.sanity.io"
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  // const obj = urlFor(image).options.source
  const imageUrls = []
  cartItems.map((item) =>{
    urlFor(item?.image).options.source[0].asset._ref = urlFor(item?.image).options.source[0].asset._ref.replace('image-','');
    urlFor(item?.image).options.source[0].asset._ref = urlFor(item?.image).options.source[0].asset._ref.replace('-jpg','.jpg');
    urlFor(item?.image).options.source[0].asset._ref = urlFor(item?.image).options.source[0].asset._ref.replace('-png','.png');
    urlFor(item?.image).options.source[0].asset._ref = urlFor(item?.image).options.source[0].asset._ref.replace('-webp','.webp');

  })

  const initialOptions = {
    clientId: CLIENT_ID,
    currency: "EUR",
    intent: "capture",
};

  return (
    <div className="cart-wrapper noSelect" ref={cartRef}>
      <div className="cart-container noSelect">
        <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Retour</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Votre panier est vide</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continuer vos achats
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <Image 
                src={`${baseUrl}/images/${projectId}/${dataset}/${urlFor(item?.image).options.source[0].asset._ref}`} 
                className="cart-product-image" 
                width={100}
                height={100}
              />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>{item.price}€</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc noSelect">
                    <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }>
                    <AiOutlineMinus />
                    </span>
                    <span className="num" onClick="">{item.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }><AiOutlinePlus /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Total :</h3>
              <h3>{totalPrice}€</h3>
            </div>
            <div className="btn-container">
              {/* <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button> */}
          <PayPalScriptProvider
            options={initialOptions}
          >
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                    
                      description: "Order Success",
                      totalQuantities: totalQuantities,
                      amount: {
                        value: totalPrice,
                        currency_code: "EUR",
                        breakdown: {
                          item_total: {
                            currency_code: "EUR",
                            value: totalPrice,
                          },
                          
                        }
                      },
                      items: cartItems.map(item =>{
                        return {
                          product_id: item._id,
                          category: "PHYSICAL_GOODS",
                          description: item.name,
                          name: item.name,
                          unit_amount: {
                            currency_code: "EUR",
                            value: item.price,
                          },
                          quantity: item.quantity,
                        }
                      }),
                      shipping: {
                        options: [
                          {
                            id: "SHIP_123",
                            label: "Livraison Standard",
                            selected: true,
                            amount: {
                                value: "0.00",
                                currency_code: "EUR"
                            }
                          },
                          {
                            id: "SHIP_456",
                            label: "Livraison Express",
                            selected: false,
                            amount: {
                                value: "7.00",
                                currency_code: "EUR"
                            }
                          }
                  ]}
                      
                    }
                  ]
                });
              }}
              onApprove={async (data, actions) => {
                const details = await actions.order.capture();
                const name = details.payer.name.given_name;
                location.href = '/success/'
                // window.location.replace('/success/');
              }}
            />
            </PayPalScriptProvider>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart

