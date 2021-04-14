import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import ask from '../images/ask.png'
import HomeViewDesign, { HOME_VIEW, RESULTS_VIEW, QUESTION_VIEW } from './HomeViewDesign'
import ErrorPage404 from './ErrorPage404';
//the user view component page depending on users and there answers 
//it also handle different views such as the home view and the results view and the question view also the error page if the question id is wrong
class UserView extends Component {
    render() {
        //the props of the component is the current view of the 3 views , the unansweredquestions , the question , and authed user
        const { authUser, question, unAnsweredQuestions = null, currHomeView } = this.props
        //console.log(this.props)
        //a function to handle the wrong path questions ids to an error page
        if (question === undefined) {
            return <ErrorPage404 />
        }
        return (
            //the main user and avatar view card 
            <div className="row">
                <div className="col-sm-4">

                    <div className="card w-100" >
                        <div className="card-header">
                            <b className="h4">{` ${authUser.name} asks:`}</b>

                        </div>
                        <div className="row">
                            <div className="col-md-5 user-container">
                                <img className="ask"
                                    src={ask}
                                    alt="ask icon"
                                    width="75" height="75" />
                                <img className="avatar "
                                    src={authUser.avatarURL}
                                    alt={authUser.name}
                                    width="200" height="150" />

                            </div>
                        </div>
                    </div>

                </div>
                {/* the main question per user view depending on 3 views the results page , the question , the details page */}
                <div className="col-sm-8">

                    <div className="card w-100" >
                        <div className="card-header">
                            <HomeViewDesign PageView={currHomeView}
                                question={question}
                                unAnsweredQuestions={unAnsweredQuestions} />
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
//function to connect the userview component to the store to get the props users , autheduser,questions also to match the id of the question 
function mapStateToProps({ users, authedUser, questions }, { match, question_id }) {
    let question
    let currHomeView
    let author;
    //here we define the home view depending on the question id
    if (question_id !== undefined) {
        question = questions[question_id]
        author = users[question.author]
        currHomeView = HOME_VIEW
        //a function to match the params of the props to validate the question id and also redirect the user to the error page if he enter wrong url
    } else {
        const { question_id } = match.params
        //console.log(question_id)
        question = questions[question_id]
        const userID = users[authedUser];
        if (question === undefined) {
            return <Redirect push to="/questions/errorpage" />

        } else {
            author = users[question.author]
            //setting the question view function if the user already answered the question 
            currHomeView = QUESTION_VIEW
            //setting the result view function
            if (Object.keys(userID.answers).includes(question.id)) {
                currHomeView = RESULTS_VIEW
            }
        }
    }

    const authUser = users[question.author];
    //console.log("users :", users, "currAuth: ", question.author, "authuser : ", authUser)
    return {
        question,
        authUser,
        currHomeView,
        author
    };
}
//connecting the userview component to the store to get the props to handle the page
export default connect(mapStateToProps)(UserView)