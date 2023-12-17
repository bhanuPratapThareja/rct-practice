import { combineReducers } from "redux";

import CounterReducer from './counter-reducer'
import AlbumsReducer from './albums-reducer'

const rootReducer = combineReducers({
    counter: CounterReducer, 
    albums: AlbumsReducer
})

export default rootReducer