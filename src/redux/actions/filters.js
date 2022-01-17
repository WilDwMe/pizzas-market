// dymanic data action creator
const setSortBy = (name) => ({
    type: 'SET_SORT_BY',
    payload: name
});

// simple action
const setSort = ({
    type: 'SET_SORT_BY',
    // payload: 'some'
});

const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex
});


export default setSortBy;