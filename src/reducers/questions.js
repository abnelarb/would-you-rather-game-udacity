import { GET_QUESTION } from '../actions/askedQuestion'
export default function questions(state = {}, action) {
    switch (action.type) {
        case GET_QUESTION:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state
    }

}