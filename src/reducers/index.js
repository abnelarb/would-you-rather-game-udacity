import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import  questions  from '../reducers/questions'
import  users  from '../reducers/users'
import  authedUser from '../reducers/authedUser'
export default combineReducers({
    authedUser,
    questions,
    users,
    loadingBar : loadingBarReducer,
})