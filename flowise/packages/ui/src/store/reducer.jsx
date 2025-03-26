import { combineReducers } from 'redux'

// reducer import
import customizationReducer from './reducers/customizationReducer'
import canvasReducer from './reducers/canvasReducer'
import notifierReducer from './reducers/notifierReducer'
import dialogReducer from './reducers/dialogReducer'
import userReducer from './reducers/userReducer'

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    user: userReducer,
    customization: customizationReducer,
    canvas: canvasReducer,
    notifier: notifierReducer,
    dialog: dialogReducer
})

export default reducer
