import React, { createContext, useReducer } from 'react';
import allCartReducer from './allCartReducer';


/* Cart Context */
const cartContext = createContext();


/* Initial State */
const initialState = {
    isCartOpen: false,
    cartItems: []
};


/* Cart-Provider Component */
const CartProvider = ({ children }) => {

    const [elementstate, elementdispatch] = useReducer(allCartReducer, initialState);


    /* elementdispatched Actions */

    const cartToggle = (toggle) => {
        return elementdispatch({
            type: 'CART_TOGGLE',
            payload: {
                toggle
            }
        });
    };


    const itemAdd = (item) => {
        return elementdispatch({
            type: 'ITEM_ADD_TO_CART',
            payload: {
                item
            }
        });
    };

    const itemRemove = (itemId) => {
        return elementdispatch({
            type: 'ITEM_REMOVE_FROM_CART',
            payload: {
                itemId
            }
        });
    };

    const itemIncrement = (itemId) => {
        return elementdispatch({
            type: 'INCREMENT_ITEM',
            payload: {
                itemId
            }
        });
    };

    const itemDecrement = (itemId) => {
        return elementdispatch({
            type: 'DECREMENT_ITEM',
            payload: {
                itemId
            }
        });
    };

    const cartClear = () => {
        return elementdispatch({
            type: 'CART_CLEAR'
        });
    };


    // Context values
    const values = {
        ...elementstate,
        cartToggle,
        itemAdd,
        itemRemove,
        itemIncrement,
        itemDecrement,
        cartClear
    };


    return (
        <cartContext.Provider value={values}>
            {children}
        </cartContext.Provider>
    );

};


export default cartContext;
export { CartProvider };