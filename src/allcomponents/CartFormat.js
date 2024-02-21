import React, { useContext, useEffect } from 'react';
import allCartContext from '../allcontext/allCartContext';


const MainCart = () => {

    const { isCartOpen, cartItems, cartToggle, itemRemove, itemIncrement, itemDecrement } = useContext(allCartContext);


    // disable the body-scroll when the Cart is open
    useEffect(() => {
        const docBody = document.body;

        isCartOpen ? (
            docBody.classList.add('overflow_hide')
        ) : (
            docBody.classList.remove('overflow_hide')
        );

    }, [isCartOpen]);


    // closing the Cart on clicking outside of it
    useEffect(() => {
        const outsideClose = (e) => {
            if (e.target.id === 'cart') {
                cartToggle(false);
            }
        };

        window.addEventListener('click', outsideClose);

        return () => {
            window.removeEventListener('click', outsideClose);
        };
    }, [cartToggle]);


    const cartQuantity = cartItems.length;

    const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);


    return (
        <>
            {
                isCartOpen && (
                    <div id="carts">
                        <div className="cart_contents">
                            <div className="cart_heads">
                                <h2>Cart <small>({cartQuantity})</small></h2>
                                <div
                                    title="Close"
                                    className="close_btn"
                                    onClick={() => cartToggle(false)}
                                >
                                    <span>&times;</span>
                                </div>
                            </div>

                            <div className="cart_bodies">
                                {
                                    cartQuantity === 0 ? (
                                        <h2>Cart Is Empty</h2>
                                    ) : (
                                        cartItems.map(item => {
                                            const { id, img, title, price, quantity } = item;
                                            const itemTotal = price * quantity;

                                            return (
                                                <div className="cart_item" key={id}>
                                                    <figure className="cart_items_img">
                                                        <img src={img} alt="product-img" />
                                                    </figure>

                                                    <div className="cart_item_info">
                                                        <h4>{title}</h4>
                                                        <h3 className="price">₹ {itemTotal.toLocaleString()}</h3>
                                                    </div>

                                                    <div className="cart_item_quantity">
                                                        <span onClick={() => itemDecrement(id)}>&#8722;</span>
                                                        <b>{quantity}</b>
                                                        <span onClick={() => itemIncrement(id)}>&#43;</span>
                                                    </div>

                                                    <div
                                                        title="Remove Item"
                                                        className="cart_item_delete"
                                                        onClick={() => itemRemove(id)}
                                                    >
                                                        <span>&times;</span>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    )}
                            </div>

                            <div className="cart_footers">
                                <h3>
                                    <small>Total:</small>
                                    <b>₹ {cartTotal.toLocaleString()}</b>
                                </h3>

                                <button
                                    type="button"
                                    className="checkout_butn"
                                    disabled={cartQuantity === 0}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default MainCart;