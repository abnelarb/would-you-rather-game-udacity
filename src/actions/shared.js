import { getInitialData } from '../api/api'
import { getQuestions } from '../actions/askedQuestion'
//import { authedUser } from '../actions/authenticatedUser'
import { getUsers } from '../actions/users'
import { showLoading , hideLoading } from 'react-redux-loading'
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))
                dispatch(hideLoading())
            })
    }
}