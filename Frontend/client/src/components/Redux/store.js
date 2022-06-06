import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import { appendProductReducer } from "./reducers/appendReducer"
import thunk from "redux-thunk"
import { pageReducer } from "./reducers/pageReducer"
const rootReducer=combineReducers({
    products:appendProductReducer,
    page:pageReducer,
})
export const store=createStore(
    rootReducer,
    applyMiddleware(thunk)
)