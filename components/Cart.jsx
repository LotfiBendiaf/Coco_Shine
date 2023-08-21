
import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { client, urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';


import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import product from '@/sanity_ecommerce/schemas/product';
// const { CLIENT_ID } = process.env;
// const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_ID = 'AWZY0M6RZ5Q9vcyN0OJlxKryxo6OIQXgdLsJYYRiTH026e09UCRcj1vNQV5OK9k5U8fzcfzB9_-2cwcL';

const Cart = () => {
    

  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  function PayPalItems() {

        let items = []

        cartItems.map((cartItem, index) => {
        ++index;
        let itemName = cartItem.name;
        let price = cartItem.price;
        let quantity = cartItem.quantity;
        let currency = cartItem.price;

        items.push(
          [{
              "unit_amount": 
              {
                "currency_code": "EUR",
                "value": currency
              },
              "name": itemName,
              "price": price,
              "quantity": quantity
            }]
        )
      });

      return items;
    }



  const initialOptions = {
    clientId: CLIENT_ID,
    currency: "EUR",
    intent: "capture",
};


  // const handleCheckout = async () => {
  //   const stripe = await getStripe();

  //   const response = await fetch('/api/stripe', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(cartItems),
  //   });

  //   if(response.statusCode === 500) return;
    
  //   const data = await response.json();

  //   toast.loading('Redirecting...');

  //   stripe.redirectToCheckout({ sessionId: data.id });
  // }

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
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
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>{item.price}€</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc">
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

