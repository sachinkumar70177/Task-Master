
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {thunk as reduxthunk} from 'redux-thunk'
// import {reducer as projectReducer} from './ProjectReducer/reducer'
import {reducer as taskReducer} from './TaskReducer/reducer'
import {reducer as authReducer} from './Authentication/reducer'




const rootReducer= combineReducers({ taskReducer,authReducer})
export const store = legacy_createStore(rootReducer, applyMiddleware(reduxthunk))

