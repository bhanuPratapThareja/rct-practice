import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../store/slices/counter-slice'
import usersReducer from './slices/users-slice'
import albumsReducer from '../store/slices/albums-slice'
import { carsFormReducer, carsListReducer } from './slices/cars-slice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
        albums: albumsReducer,
        carsForm: carsFormReducer,
        carsList: carsListReducer
    }
})

// export const { increment, decrement, toggleCounter } = './slices/counter-slice'