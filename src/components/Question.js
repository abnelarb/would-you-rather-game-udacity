import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleAddAnswer } from '../actions/users'
//The question comonent to view the question details on clicking on the main page questions and enabling the user to answer the question 
class Question extends Component {
    //the state of the component has one value of choosing an answer
    state = {
        chooseAnswer: ''
    };
    //a function to handle the choose answer and pass it to the state of the component 
    handleChooseAnswer = (event) => {
        this.setState({ chooseAnswer: event.target.value });
        // console.log("optionOne vote:", this.props.question.optionOne.votes)
        // console.log("optionTwo vote:", this.props.question.optionTwo.votes)
    }
    // a function to handle the answer and passing it to the store and adding the answer to the user answers.
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.chooseAnswer !== '') {
            const { authedUser, question, handleAddAnswer } = this.props;
            handleAddAnswer(authedUser, question.id, this.state.chooseAnswer);
        }
    };

    render() {
        //the props of the component is the question 
        const { question } = this.props
        // console.log(this.props, this.state.chooseAnswer)
        return (
            //the form of the question and it has would you rather and the two options for the user to pick from also the button only enabled after the user pick option
            <div>
                <h3 className="h3 card-title d-flex justify-content-center">Would You Rather </h3>
                <div className="card-text">
                    <div onChange={this.handleChange}>
                        <b><input type="radio" value="optionOne" name="WouldYouRather" checked={this.state.chooseAnswer === "optionOne"} onChange={this.handleChooseAnswer} /> {question.optionOne.text}</b>
                        <b><br /> or...<br /></b>
                        <b><input type="radio" value="optionTwo" name="WouldYouRather" checked={this.state.chooseAnswer === "optionTwo"} onChange={this.handleChooseAnswer} /> {question.optionTwo.text}</b>
                    </div>
                    <button className="btn btn-primary d-flex justify-content-center"
                        disabled={this.state.chooseAnswer === "" ? true : false}
                        onClick={this.handleSubmit}>
                        Submit</button></div>
            </div>
        )
    }
}
//a function to connect to the store to get the authed user as a prop to handle the question form 
function mapStateToProps({ authedUser }, { match }) {
    return {
        authedUser
    };
}
//connecting the question component to the store to get the props and to hanlde adding a new answer to the store 
export default connect(mapStateToProps, { handleAddAnswer })(Question)