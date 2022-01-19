// dymanic data action creator
export const setSortBy = ({type, order}) => ({
    type: 'SET_SORT_BY',
    payload: { type, order }
});

// simple action
// export const setSort = ({
//     type: 'SET_SORT_BY',
//     // payload: 'some'
// });

export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex
});