const allCartReducer = (elementState, elementAction) => {

    switch (elementAction.type) {

        case 'CART_TOGGLE':
            return {
                ...elementState,
                isCartOpen: elementAction.payload.toggle
            };


        case 'ITEM_ADD_TO_CART':
            const newItemId = elementAction.payload.item.id;
            const itemExist = elementState.cartItems.some(item => item.id === newItemId);

            let updatedCartItems = null;

            if (itemExist) {
                updatedCartItems = elementState.cartItems.map(item => {
                    if (item.id === newItemId) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                });
            } else {
                updatedCartItems = [...elementState.cartItems, elementAction.payload.item];
            }

            return {
                ...elementState,
                cartItems: updatedCartItems
            };


        case 'ITEM_REMOVE_FROM_CART':
            return {
                ...elementState,
                cartItems: elementState.cartItems.filter(item => item.id !== elementAction.payload.itemId)
            };


        case 'INCREMENT_ITEM':
            return {
                ...elementState,
                cartItems: elementState.cartItems.map(item => {
                    if (item.id === elementAction.payload.itemId) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                })
            };


        case 'DECREMENT_ITEM':
            return {
                ...elementState,
                cartItems: elementState.cartItems.map(item => {
                    if (item.id === elementAction.payload.itemId) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        };
                    }
                    return item;
                }).filter(item => item.quantity !== 0)
            };


        case 'CART_CLEAR':
            return {
                ...elementState,
                cartItems: []
            };


        default:
            return elementState;
    }

};

export default allCartReducer;