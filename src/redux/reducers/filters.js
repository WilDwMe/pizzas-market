const initState = {
    category: null,
    sortBy: {
      type: 'popular',
      order: 'desc',
    },
  };

const filters = (state = initState, action) => {
    switch(action.type) {
        case 'SET_CATEGORY': 
            return { ...state, category: action.payload };

        case 'SET_SORT_BY': 
            return { ...state, sortBy: action.payload };
            
        default:
            return state;
    }
}

export default filters;