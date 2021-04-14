//the users  reducer handles 3 cases geting the users from the store , adding answer to question user on the store and adding a new question to the user on the store
import { GET_USERS, ADD_ANSWER_TO_TARGET , ADD_QUESTION_BY_USER } from '../actions/users'
export default function users(state = {}, action) {
    switch (action.type) {
        //get users case
        case GET_USERS:
            return {
                ...state,
                ...action.users,
            }
        // add answer case
        case ADD_ANSWER_TO_TARGET:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
            //add question case
        case ADD_QUESTION_BY_USER:
            const { id, author } = action
            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat(id)
                }
            }
        default:
            return state;
    }
}