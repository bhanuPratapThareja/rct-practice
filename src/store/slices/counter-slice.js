import { createSlice } from '@reduxjs/toolkit'
// import { albumsActions } from './albums-slice'
import { reset } from '../actions/reset-action'

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            state.counter++
        },
        decrement(state, action) {
            state.counter = state.counter - action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        },
        reset(state) {
            state.counter = 0
            state.showCounter = true
        }
    },
    extraReducers(builder) {
        // builder.addCase(albumsActions.reset, (state, action) => {
        //     state.counter = 0
        //     state.showCounter = true
        // })
        builder.addCase(reset, state => {
            state.counter = 0
            state.showCounter = true
        })
    }
})

// console.log(albumsActions.reset.toString())

// export const { increment, decrement, toggleCounter } = counterSlice.actions
export const counterActions = counterSlice.actions
export default counterSlice.reducer