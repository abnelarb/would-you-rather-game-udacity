import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import UserView from './UserView'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
//the main view component which holds userView Component and it's props
class Dashboard extends Component {
    render() {
        //looping on the userQuestions array to build the user view after getting and dispatching it at the state
        const { userQuestions } = this.props
        return (
            <div>
                <h1 className="h1 d-flex justify-content-center"> Would You Rather Game </h1>
                <div className="h4 justify-content-center card-header">
                    <Tabs fill variant="tabs" defaultActiveKey="Unanswered Questions" id="Questions">

                        {/* the unanswered questions tap and it take the question id
                         and the boolen of true or false depeneding or answered questions or not */}

                        <Tab eventKey="Unanswered Questions" title="Unanswered Questions">
                            {userQuestions.unAnsweredQuestions.map(question => (
                                <UserView
                                    key={question.id}
                                    question_id={question.id}
                                    unAnsweredQuestions={true}

                                />
                            ))}
                        </Tab>
                        {/* the answered questions tap and it take the question id
                         and the boolen of true or false depeneding or answered questions or not */}
                        <Tab eventKey="Answered Questions" title="Answered Questions">
                            {userQuestions.answeredQuestions.map(question => (
                                <UserView
                                    key={question.id}
                                    question_id={question.id}
                                    unAnsweredQuestions={false}

                                />
                            ))}
                        </Tab>
                    </Tabs>
                </div>
                {/* hidden function to give a message if the user has answered
                 all the questions or if he didn't answer any questions and it links him to add more questions of check the leaderboard */}
                {userQuestions.unAnsweredQuestions.length === 0 ?
                    <div className="centered h4 justify-content-center card-header">
                        <h4>Awesome you have answered all the available questions
                         <br></br> check <Link to={'/leaderboard'}>leaderboard </Link> or add a <Link to={'/add'}>New Poll </Link></h4>
                    </div> : null}
                {userQuestions.answeredQuestions.length === 0 ?
                    <div className="centered h4 justify-content-center card-header" >
                        <h4>You Haven't Answer any question yet
                            <br></br> check unAnsweredQuestions</h4>
                    </div> : null}

            </div>
        )
    }
}
//function to get the state of the authed user , users, questions and using map and filter over them to get the questions on the correct order
function mapStateToProps({ authedUser, users, questions }) {
    const userAnswers = Object.keys(users[authedUser].answers)
    const answeredQuestions = Object.values(questions).filter(question => userAnswers.includes(question.id)).sort((a, b) => b.timestamp - a.timestamp)
    const unAnsweredQuestions = Object.values(questions).filter(question => !userAnswers.includes(question.id)).sort((a, b) => b.timestamp - a.timestamp)
    return {
        userQuestions: {
            answeredQuestions,
            unAnsweredQuestions
        }

    }
}
//connecting the dashboard component with the mapstatetoprops function
export default connect(mapStateToProps)(Dashboard)