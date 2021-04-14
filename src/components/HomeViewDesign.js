import React from 'react'
import QuestionView from './QuestionView'
import Question from './Question'
import ResultView from './ResultView'

export const HOME_VIEW = 'HOME_VIEW'
export const RESULTS_VIEW = 'RESULTS_VIEW'
export const QUESTION_VIEW = 'QUESTION_VIEW'
//home view design dynamically depending on the question if it is answered or not and it give the result page after answer
const HomeViewDesign = props => {
    const { PageView,
        question,
        unAnsweredQuestions } = props
    switch (PageView) {
        case HOME_VIEW:
            return <QuestionView question={question} unAnsweredQuestions={unAnsweredQuestions} />
        case QUESTION_VIEW:
            return <Question question={question} />
        case RESULTS_VIEW:
            return <ResultView question={question} />
        default:
            return
    }
}
export default HomeViewDesign