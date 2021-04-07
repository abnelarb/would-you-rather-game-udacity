export const GET_QUESTION = "GET_QUESTION"
export function getQuestions(questions) {
    return {
        type:GET_QUESTION,
        questions
    }
}