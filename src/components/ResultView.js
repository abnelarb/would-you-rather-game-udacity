import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ProgressBar from 'react-bootstrap/ProgressBar'
import yourvote from '../images/vote.webp'
//The results view component rendering the results of the question page depending on the users and related answers  by them
class ResultView extends Component {
    // a function to handle the back button to push back to the home page
    handleBackBtn = () => {
        this.props.history.push('/');
    };
    render() {
        //the props of the resultview component is the user and question 
        const { question, user } = this.props;
        //console.log(this.props)
        //the statics object to count the votes of the options of the question on the result page and determine the total votes also which vote the user has picked
        const statics = {
            votesCount1: question.optionOne.votes.length,
            votesCount2: question.optionTwo.votes.length,
            total: question.optionOne.votes.length + question.optionTwo.votes.length,
            userVote: user.answers[question.id]
        }

        //console.log("statics", statics)
        // console.log(question.optionOne.votes)
        // console.log(question.optionTwo.votes)

        return (
            //the results form design 
            <div>
                <h3 className="h3 "> Result :  </h3>
                <h3 className="h4 d-flex justify-content-center p-3 mb-2 bg-primary text-white"> Would You Rather </h3>
                <div className="card result-container">
                    <h4 className="d-flex justify-content-center">{question.optionOne.text}</h4>
                    <b><p className="d-flex justify-content-center">votes percentage :{(statics.votesCount1 / statics.total * 100).toFixed(2)} %</p>
                        {statics.userVote === "optionOne" ? <div className="vote"><img className="vote"
                            src={yourvote}
                            alt="yourvote"
                            width="75px" height="75px" /></div> : null}

                        <ProgressBar striped variant={statics.votesCount1 > statics.votesCount2 ? "success" : "danager" && statics.votesCount1 === statics.votesCount2 ? "info" : null} animated now={(statics.votesCount1 / statics.total * 100).toFixed(2)} />
                        <p className="d-flex justify-content-center">{statics.votesCount1} out of {statics.total} votes</p></b>
                </div>
                <p className="h4 d-flex justify-content-center">Or..</p>
                <div className="card result-container">
                    <h4 className="d-flex justify-content-center"> {question.optionTwo.text}</h4>
                    <b><p className="d-flex justify-content-center">votes percentage : {(statics.votesCount2 / statics.total * 100).toFixed(2)} % </p>
                        {statics.userVote === "optionTwo" ? <img className="vote"
                            src={yourvote}
                            alt="yourvote"
                            width="75px" height="75px" /> : null}
                        <ProgressBar striped variant={statics.votesCount2 > statics.votesCount1 ? "success" : "danager" && statics.votesCount1 === statics.votesCount2 ? "info" : null} animated now={(statics.votesCount2 / statics.total * 100).toFixed(2)} />
                        <p className="d-flex justify-content-center">{statics.votesCount2} out of {statics.total} votes</p></b>
                </div>
                
                {statics.votesCount1 === statics.votesCount2 ? <p className="h4 d-flex justify-content-center bg-danger p-3 mb-2" >TIE : Both options got the same votes</p> : null}
                {statics.votesCount1 > statics.votesCount2 ? <p className="h4 d-flex justify-content-center bg-danger" >Option One Got The Most Votes</p> : null}
                {statics.votesCount2 > statics.votesCount1 ? <p className="h4 d-flex justify-content-center bg-danger" >Option Two Got The Most Votes</p> : null}
                <button className="d-flex justify-content-center bg-primary text-white p-3 mb-2" onClick={this.handleBackBtn}>Back</button>
            </div>
        )
    }
}
// function to map the states to the component to get the user as a props
function mapStateToProps({ users, authedUser }) {
    const user = users[authedUser]
    return {
        user
    }
}
//connecting the component to the store to get the props with router to handle the routs 
export default withRouter(connect(mapStateToProps)(ResultView))