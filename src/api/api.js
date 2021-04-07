import {
    _saveQuestion,
    _getQuestions,
    _saveQuestionAnswer,
    _getUsers
} from './_DATA'
export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }
  export function saveAnswer (info) {
    return _saveQuestionAnswer(info)
  }
  
  export function saveQuestion (info) {
    return _saveQuestion(info)
  }