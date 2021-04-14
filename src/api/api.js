import {
  _saveQuestion,
  _getQuestions,
  _saveQuestionAnswer,
  _getUsers,
} from './_DATA'
// a promise function to get the users and question data from the store 
export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}
// a function for saving the answer to the store
export function saveAnswer(authedUser, qid, answer) {
  return _saveQuestionAnswer({ authedUser, qid, answer })
}
// a function for saving saving a question to the store
export function saveQuestion(question) {
  return _saveQuestion(question)
}
