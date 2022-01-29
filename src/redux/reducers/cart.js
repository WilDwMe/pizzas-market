const initState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalPrice = arr => arr.reduce((sum, item) => item.price + sum, 0);

const cart = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_PIZZA_CART':
            const currentItems = !state.items[action.payload.id] 
            ? [action.payload] 
            : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItems,
                    totalPrice: getTotalPrice(currentItems)
                }
             };

            const items = Object.values(newItems).map(obj => obj.items);
            const allInCart = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allInCart);
        
            return { 
               ...state,
               items: newItems,
                totalCount: allInCart.length,
                totalPrice: totalPrice,
                // state.totalPrice + action.payload.price;
            };

        case 'CLEAR_CART':
            return initState;
        
        default:
            return state;
    }
}

export default cart;