import React, {useContext} from 'react'
import CartContext from '../../context/cart/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyFormat from 'react-currency-format';


export default function Cartitem({item}) {
    
    const { removeItem } = useContext(CartContext);

    return (
        <>
            <li className='cartItem-item'>
              <img src={process.env.PUBLIC_URL + `/assets/images/${item.picture}`} alt='' className='cartItem-img' />
              <div className="cart-item-content">
                  <p className='cartItem-title'>
                    {item.title}
                  </p>
                  <p>
                    {item.eventSpeaker}
                  </p>
                  <p>
                    {item.eventDate}
                  </p>
                  <p>
                    {item.eventTime}
                  </p>
                  <div className="cartItem-price-container">
                    <CurrencyFormat className='cartItem-currency' value={item.price} displayType="text" prefix="$ " thousandSeparator="." decimalSeparator="," fixedDecimalScale={true} decimalScale={2}/>
                    <DeleteIcon className='CartItem-delete' onClick={() => removeItem(item.id)}>
                      Remove
                    </DeleteIcon>
                  </div>
              </div>
            </li>
        </>
    )
}
