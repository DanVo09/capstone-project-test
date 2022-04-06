import React, {useState} from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'

export default function Paypalcheckoutbutton(props) {
    const {product} = props;
    console.log(product)

    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)

    const handleApprove = (orderId) => {
        // call backend function to fulfill order

        //if response is success
        setPaidFor(true);

        //if response is an error
        // setError("You payment was processed successfully. However, we are unable to fulfill your purchase, please contact us at dama-edmonton@gmail.com for assisstance.");

    }

    if (paidFor) {
        alert("Thank you for your purchase")
    }

    if (error) {
        alert(error);
    }

    return (
        
        <PayPalButtons
            style={{
                shape: "pill",
                color: "blue",
                label: "checkout",
                tagline: "false"
            }}
            onClick={(data, actions) => {
                // validation
            }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            
                            description: product.courseDescription,
                            amount: {
                                value: product.reduce((amount, item) => amount + item.price, 0)
                            }
                        }
                    ]
                })
            }}
            onApprove={ async (data, actions) => {
                const order = await actions.order.capture()
                console.log("order", order)

                handleApprove(data.orderID)
            }}
            onCancel={()=> {

            }}
            onError={(err) => {
                setError(err)
                console.error("PayPal Checkout onError", err)
            }}
        />
            
    )
}
