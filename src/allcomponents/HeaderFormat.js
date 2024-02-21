import React, { useContext } from 'react';
import allCartContexts from '../allcontext/allCartContext';


const MainHeader = () => {

    const { cartItems, cartToggle } = useContext(allCartContexts);

    const cartQuantity = cartItems.length;

    return (
        <>
            <header id="headers">
                <div className="container">
                    <div className="navbar">
                        <h4>Book Shop</h4>
                        <div className="nav_menu">
                            <div
                                title="Cart"
                                className="cart_icons"
                                onClick={() => cartToggle(true)}
                            >
                                <img src="/images/bag-icon.svg" alt="bagIcon" />
                                {
                                    cartQuantity >= 1 && (
                                        <span className="badge">{cartQuantity}</span>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default MainHeader;