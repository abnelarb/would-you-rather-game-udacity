//make a 3 actions to update questions in store depending on user action 

import { saveQuestion } from '../api/api'
import { addQuestion } from '../actions/users'
export const GET_QUESTION = "GET_QUESTION"
export const ADD_ANSWER = "ADD_ANSWER"
export const ADD_QUESTION = "ADD_QUESTION"
//to make the action type to get the questions from the store
export function getQuestions(questions) {
    return {
        type:GET_QUESTION,
        questions
    }
}
//to add action type to add answer to the user 
export function addAnswer(authedUser,qid,answer) {
    return {
        type:ADD_ANSWER,
        authedUser,
        qid,
        answer
    }
}
//to add the action type to add a new question to the store
function addQuestionToAPI(question) {
    return {
        type:ADD_QUESTION,
        question
    }
}
//function to handle adding a new question to the new poll page and give it to options to update the store with a new question for users 
export function handleAddQuestion(optionOneText, optionTwoText, author) {
    return dispatch => {
        return saveQuestion({optionOneText, optionTwoText, author}).then(
            question=>{
                dispatch(addQuestionToAPI(question))
                dispatch(addQuestion(question))
            }
        )
    }
}