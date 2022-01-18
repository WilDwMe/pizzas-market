// dymanic data action creator
export const setSortBy = (name) => ({
    type: 'SET_SORT_BY',
    payload: name
});

// simple action
export const setSort = ({
    type: 'SET_SORT_BY',
    // payload: 'some'
});

export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex
});