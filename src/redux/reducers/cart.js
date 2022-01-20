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

            return { 
               ...state,
               items: newItems,
                totalCount: [].concat.apply([], Object.values(newItems)).length,
                totalPrice: state.totalPrice + action.payload.price,
            };
        
        default:
            return state;
    }
}

export default cart;