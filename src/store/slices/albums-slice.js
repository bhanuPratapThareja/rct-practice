import { createSlice } from "@reduxjs/toolkit";
import { reset } from '../actions/reset-action'

const albumsSlice = createSlice({
    name: 'albums',
    initialState: [],
    reducers: {
        loadAlbums: (state, action) => {
            // state.albums = action.payload
            // state.push(action.payload)
            state.push(...action.payload)
        },
        // reset(state) {
        //     // console.log(state)
        //     // state = [] // incorrect
        //     return []
        // }
    },
    extraReducers(builder) {
        builder.addCase(reset, state => {
            return []
        })
    }
})

// console.log(albumsSlice.actions.reset.toString())

export const albumsActions = albumsSlice.actions
export default albumsSlice.reducer