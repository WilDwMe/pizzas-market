const initState = {
    items: {},
    totalPrice: 100,
    totalCount: 101,
}

const cart = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_PIZZA_CART': 
            return { 
               ...state,
               items: {
                   [action.payload.id]: [
                       ...state.items[action.payload.id],
                       action.payload
                   ]
                }
            };
        
        default:
            return state;
    }
}

export default cart;