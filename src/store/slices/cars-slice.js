import { createSlice, nanoid } from '@reduxjs/toolkit'

const carsFormSlice = createSlice({
    name: 'carsForm',
    initialState: { name: '', cost: 0 },
    reducers: {
        // changeName(state, action) {
        //     state.name = action.payload
        // },
        // changeCost: (state, action) => {
        //     state.cost = action.payload
        // },
        changeInput(state, action) {
            state[action.payload.name] = action.payload.value
        }
    },
    extraReducers(builder) {
        builder.addCase(carsListSlice.actions.addCar, state => {
            state.name = ''
            state.cost = 0
        })
    }
})

const carsListSlice = createSlice({
    name: 'carsList',
    initialState: { searchTerm: '', cars: [] },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar: (state, action) => {
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar(state, action) {
            const filteredCars = state.cars.filter(car => car.id !== action.payload)
            state.cars = filteredCars
        }
    }
})

export const carsFormActions = carsFormSlice.actions
export const carsFormReducer = carsFormSlice.reducer

export const carsListActions = carsListSlice.actions
export const carsListReducer = carsListSlice.reducer