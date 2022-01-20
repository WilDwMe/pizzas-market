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
                totalPice: state.totalPice + action.payload.price
            };
        case 'SET_TOTAL_COUNT': 
            return { 
                ...state, 
                totalCount: action.payload
            };
        
        default:
            return state;
    }
}

export default cart;