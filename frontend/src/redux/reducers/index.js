import {combineReducers} from 'redux'
import authReducer from './authReducer'
import contactReducer from './contactReducer'


const rootReducer=combineReducers({
    authReducer,
    contactReducer,
});

export default rootReducer;