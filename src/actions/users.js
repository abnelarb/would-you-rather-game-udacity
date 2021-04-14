//actions types for the users to update the store 
import { saveAnswer } from '../api/api'
import { addAnswer } from './askedQuestion'
export const GET_USERS = "GET_USERS"
export const ADD_ANSWER_TO_TARGET = "ADD_ANSWER_TO_TARGET"
export const ADD_QUESTION_BY_USER = "ADD_QUESTION_BY_USER"
//to make the action type of get the users from the store
export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}
//to make the action type of add answer to the authed user after voting a question 
function addAnswerToTarget(authedUser,qid,answer) {
    return {
        type:ADD_ANSWER_TO_TARGET,
        authedUser,
        qid,
        answer
    }
}
//to make the action type to add a new question depending on generating id and current authed user
export function addQuestion({id , author}) {
    return {
        type: ADD_QUESTION_BY_USER,
        id,
        author
    }
}
//function to handle the adding answer to the store and alert if there is any error
export function handleAddAnswer(authedUser,qid,answer){
    return dispatch => {
        dispatch(addAnswerToTarget(authedUser,qid,answer))
        dispatch(addAnswer(authedUser,qid,answer))
        return saveAnswer(authedUser,qid,answer).catch(error => {
            alert("Error in add your answer please try again",error)
        })
    }
}
