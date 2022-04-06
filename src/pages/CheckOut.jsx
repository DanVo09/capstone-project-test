import React, {useContext} from 'react'
import Paypalcheckoutbutton from '../components/payPalCheckoutButton/PayPalCheckoutButton';
import CartContext from '../context/cart/CartContext'
import CartItem from '../components/cartItem/CartItem'
import CurrencyFormat from 'react-currency-format';




export default function Checkout() {

    const { cartItems } = useContext(CartContext)
    const GST = 0.05;
    const product = cartItems

    console.log(product)
    

    return (
        <div className='checkout-container'>
            <div className="checkout-wrapper">
                <h2>Secure Check Out</h2>
                <div className="checkout-form">
                    <p>Your Order Details</p>
                    <div className="checkout-items-wrapper">
                        <ul>
                            {product.map(item => (
                                <li className='checkout-item'>
                                <img src={process.env.PUBLIC_URL + `/assets/images/${item.coursePicture}`} alt='' className='checkoutItem-img' />
                                <div className="checkout-item-content">
                                    <p className='checkoutItem-title'>
                                      {item.courseTitle}
                                    </p>
                                    <div className="checkoutItem-price-container">
                                      <CurrencyFormat className='checkoutItem-currency' value={item.price} displayType="text" prefix="$ " thousandSeparator="." decimalSeparator="," fixedDecimalScale={true} decimalScale={2}/>
                                    </div>
                                </div>
                              </li>
                            ))}
                        </ul>
                    </div>
                    <div className="checkout-total">
                        <div className="checkout-subtotal">
                            <p>SubTotal</p>
                            <CurrencyFormat value={product.reduce((amount, item) => amount + item.price, 0)}displayType="text" prefix="$ " thousandSeparator="." decimalSeparator="," fixedDecimalScale={true} decimalScale={2}/>
                        </div>
                        <div className="checkout-gst">
                            <p>GST</p>
                            <CurrencyFormat value={product.reduce((amount, item) => amount + item.price, 0) * GST }displayType="text" prefix="$ " thousandSeparator="." decimalSeparator="," fixedDecimalScale={true} decimalScale={2}/>
                        </div>
                        <div className="checkout-gst">
                            <p>Total Price</p>
                            <CurrencyFormat value={product.reduce((amount, item) => amount + item.price, 0) * GST + product.reduce((amount, item) => amount + item.price, 0)}displayType="text" prefix="$ " thousandSeparator="." decimalSeparator="," fixedDecimalScale={true} decimalScale={2}/>
                        </div>
                    </div>
                    <div className="checkout-button-container">
                        <Paypalcheckoutbutton product={product} />
                    </div>
                </div>
            </div>
        </div>
    )
}



