import { GET_QUESTION, ADD_ANSWER, ADD_QUESTION } from '../actions/askedQuestion'
//the questions reducer and it handles 3 cases get questions from the store , adding answer to a question on the store , and adding a question to the store
export default function questions(state = {}, action) {
    switch (action.type) {
        //get questions case 
        case GET_QUESTION:
            return {
                ...state,
                ...action.questions
            }
        // add answer case
        case ADD_ANSWER:
            const { authedUser, qid, answer } = action
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authedUser)
                    }
                }
            }
        //add question case
        case ADD_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.id]: question
            }
        default:
            return state
    }

}