import { getInitialData } from '../api/api'
import { getQuestions } from '../actions/askedQuestion'
import { getUsers } from '../actions/users'
import { showLoading , hideLoading } from 'react-redux-loading'
//function to handle and despatch intial data to get the users and questions and also to handle the loading bar
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