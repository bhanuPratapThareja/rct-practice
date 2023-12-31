const albumsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALBUMS':
            return [...state, ...action.payload]
        default:
            return state
    }
}

export default albumsReducer