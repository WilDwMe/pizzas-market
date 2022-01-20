const initState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_PIZZA_CART':

            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id] 
                ? [action.payload] 
                : [...state.items[action.payload.id], action.payload]
             };

            const allInCart = [].concat.apply([], Object.values(newItems));
            const totalPrice = allInCart.reduce((sum, item) => item.price + sum, 0);

            return { 
               ...state,
               items: newItems,
                totalCount: allInCart.length,
                totalPrice: totalPrice,
                // state.totalPrice + action.payload.price;
            };
        
        default:
            return state;
    }
}

export default cart;