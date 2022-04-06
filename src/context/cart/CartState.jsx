import { useReducer } from "react";
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, GET_ITEM } from '../Types'

const CartState = ({children}) => {

    const initialState = {
        showCart: false,
        cartItems: []
    }

    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = item => {
        dispatch({type: ADD_TO_CART, payload: item})
    }

    const showHideCart = () => {
        dispatch({ type: SHOW_HIDE_CART });
      };

    const removeItem = (id) => {
        dispatch({type: REMOVE_ITEM, payload: id})
        const savedItems = JSON.parse(localStorage.getItem("cartItems"))
        const newItems = savedItems.filter((item) => item.id !== id);
        localStorage.setItem("cartItems", JSON.stringify(newItems));
    }

    const getCartItems = () => {
        if (localStorage.hasOwnProperty("cartItems")) {
            const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
            dispatch({ type: GET_ITEM, payload: storedCartItems });
          }
    }

    const addCartToStorage = (item) => {
        const savedItems = JSON.parse(localStorage.getItem("cartItems"))
        if (savedItems === null){
            const newItems = [item]
            localStorage.setItem("cartItems", JSON.stringify(newItems))
        } else {
            const newItems = [item, ...savedItems]
            localStorage.setItem("cartItems", JSON.stringify(newItems))
        }

        dispatch({ type: ADD_TO_CART, payload: item})
    }

    return (
        <CartContext.Provider
        value={{
            showCart: state.showCart,
            cartItems: state.cartItems,
            addToCart,
            showHideCart,
            removeItem,
            getCartItems,
            addCartToStorage
            
        }}
        >
        {children}
    </CartContext.Provider>
    )
}

export default CartState