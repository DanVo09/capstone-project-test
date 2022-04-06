import React, { useContext, useState } from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {Link, useNavigate} from 'react-router-dom';
import CartContext from '../../context/cart/CartContext';
import Cart from '../cart/Cart';
import MembersMenu from '../membersMenu/MembersMenu';




export default function Navbar() {

    const isLoggedIn = true;
    
    const { cartItems, showHideCart } = useContext( CartContext );
    const navigate = useNavigate();

    function logOut(){
        localStorage.clear();
        navigate('/login')
    }

    function toggleHamburger() {

        const menuToggle = document.querySelector('.nav-toggle');
        let menuOpen = false;
    
            document.querySelector('.navBar').classList.toggle('show-nav');
           
            menuToggle.classList.toggle('open');
    
            if(!menuOpen){
                menuOpen = true;
            } else {
                menuToggle.classList.remove('open');
                menuOpen = false;
            }
      }

    return (
        <>
           <header className='header-container'>
               <div className="header-wrapper">
                    <div className="nav-toggle" onClick={toggleHamburger}>
                            <div className="nav-btn"></div>
                    </div>
                    <div className="logo-container">
                        <Link to="/" onClick="window.location.reload();"><img className="dama-logo" src={process.env.PUBLIC_URL + `/assets/images/dama-logo.png`} alt="" /></Link>
                    </div>
                    <nav className="navBar">
                        <ul className="navMenu">
                            <li className="navLinks">
                                <Link className="navItem" to="/" onClick="window.location.reload();">Home</Link>
                            </li>
                            <li className="navLinks">
                                <Link className="navItem" to="/memberships" onClick="window.location.reload();">Memberships</Link>
                            </li>
                            <li className="navLinks">
                                <Link className="navItem" to="/courses" onClick="window.location.reload();">Courses</Link>
                            </li>
                            <li className="navLinks">
                                <Link className="navItem" to="/events" onClick="window.location.reload();">Events</Link>
                            </li>
                            <li className="navLinks">
                                <Link className="navItem" to="/newsletter" onClick="window.location.reload();">News</Link>
                            </li>
                            <li className="navLinks">
                                <Link className="navItem" to="/aboutus" onClick="window.location.reload();">About</Link>
                            </li>
                            <li className="navLinks">
                                <Link className="navItem" to="/contact" onClick="window.location.reload();">Contact</Link>
                            </li>
                            {
                                localStorage.getItem('user-info')?
                                <>
                                <li onClick={logOut} className="navLinks">
                                    <Link className="navItem" to="#" onClick="window.location.reload();">Logout</Link>
                                </li>
                                <MembersMenu/>
                                </>
                                :
                                <>
                                    <li className="navLinks">
                                        
                                    <Link className="navItem" to="/login" onClick="window.location.reload();">Login</Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </nav>
                    <div className="cart-icon-container" >
                            
                            <ShoppingCartCheckoutIcon
                            onClick={showHideCart}
                            className="cart-icon"/>
                            {cartItems.length > 0 && (
                                <div className='cart-items-count'>
                                <span>{cartItems.length}</span>
                                </div>
                            )}
                    </div>
                </div>
           </header>
           <Cart/>
        </>
    )
}