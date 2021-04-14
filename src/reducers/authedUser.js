import { AUTHED_USER } from '../actions/authenticatedUser'
//the athunticated user reducer and it takes states of null and action and return action.id
export default function authedUser(state = null, action) {
    switch (action.type) {
        case AUTHED_USER:
            return action.id
        default:
            return state
    }
}