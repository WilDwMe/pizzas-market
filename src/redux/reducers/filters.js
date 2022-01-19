const initState = {
    category: 1,
    sortBy: 'popular'
}

const filters = (state = initState, action) => {
    switch(action.type) {
        case 'SET_CATEGORY': 
            return { ...state, category: action.payload };
        
        default:
            return state;
    }
}

export default filters;