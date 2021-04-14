import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
//the Question view page it only showing the questions on the main page without details 
class QuestionView extends Component {
    //the state has only one value of currView to change later depending on the user answering a question or viewing a result
    state = {
        currView: false,
    }
    //a function to reserve the state of the currView state to push the user to the details of the question 
    handleQuestion = event => {
        this.setState(prevState => ({
            currView: !prevState.currView
        }))
    }
    render() {
        //the props of the component is the question and the unAnsweredQuestions 
        const { question, unAnsweredQuestions } = this.props
        //console.log(this.props)
        // a function to redirect the user to the question details page and dynamically creating links depending on the question id
        if (this.state.currView === true) {
            return <Redirect push to={`/questions/${question.id}`} />;
        }

        return (
            //the question view design only has the first option and a button to go to the question details or the result page if it is answered question 
            <div>
                <h4 className="h4 d-flex justify-content-center p-3 mb-2 bg-primary text-white">Would You Rather </h4>
                <div className="card-text">
                    <div className="justify-content-center">
                        <p className="d-flex">{question.optionOne.text}</p>
                        <p>or...</p>
                        <button className="float-right btn btn-primary mnbhj"
                            onClick={this.handleQuestion}>
                            {unAnsweredQuestions === true ? "Answer Question" : "Results"}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionView