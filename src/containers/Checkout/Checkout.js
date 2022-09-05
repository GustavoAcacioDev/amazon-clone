import React from 'react';
import './Checkout.css';
import { useStateValue } from '../../StateProvider';
import Subtotal from '../../components/Subtotal/Subtotal.js';

function Checkout() {

  return (
    <div className="checkout">

      <div className="checkout__left">
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668" alt=""></img>

        <div>
          <h2 className="checkout__title">
            Your shopping basket!
          </h2>
        </div>
          <h1></h1>
        <div>
          <h1></h1>
        </div>
      </div>

      <div className="checkout__right">
          <Subtotal/>
      </div>

    </div>
  )
}

export default Checkout;
