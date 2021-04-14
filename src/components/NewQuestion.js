import React, { Component } from 'react'
import { handleAddQuestion } from '../actions/askedQuestion'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
//a component to make a new question on the route of '/add' and view it on the main page dynamically
class NewQuestion extends Component {
    //the state of the component and it dynamically get the options of the question on optionOne and optionTwo and check the form and the home page after submit the new question
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false,
        checkForm: false,
    }
    //a function to handle the change of the text input areas and set it at the state of the component 
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }
    // a promise function to handle the new question and dispatching it to the store 
    handleSubmit = (event) => {
        event.preventDefault()
        const { authedUser, handleAddQuestion } = this.props
        const { optionOne, optionTwo } = this.state
        new Promise((response, reject) => {
            this.setState({ toHome: true });
            handleAddQuestion(optionOne, optionTwo, authedUser)
            setTimeout(() => response(), 600);
        }).then(() => {
            this.setState({
                optionOne: '',
                optionTwo: ''
            })
            this.setState({ checkForm: true })
        })

    }
    render() {
        //console.log(this.props)
        //console.log(this.state)
        // a function to redirect the user to the home page after check the input of the user
        if (this.state.checkForm === true) {
            return <Redirect to='/' />
        }
        return (
            <div className="card">
                <h3 className="h3 card-title d-flex justify-content-center">Add A New Question </h3>
                <h3 className="h3 card-title d-flex justify-content-center">Would You Rather </h3>
                <form className='form-group' onSubmit={this.handleSubmit}>
                    <div className="card-text">
                        <div className="h4 card-title justify-content-center" onChange={this.handleChange}>
                            <label htmlFor="optionOne">Option One</label>

                            <input id="optionOne" className="form-control" type="text" placeholder="Please Enter Option One" value={this.state.optionOne} onChange={this.handleChange}></input>
                            <br></br>
                            <p className="centered"><label>Or..</label></p>
                            <label htmlFor="optionTwo">Option Two</label>
                            <input id="optionTwo" className="form-control" type="text" placeholder="Please Enter Option Two" value={this.state.optionTwo} onChange={this.handleChange}></input>
                        </div>
                        <p className="centered"><button className="btn btn-primary"
                            disabled={this.state.optionOne === "" || this.state.optionTwo === ""}
                        >
                            Submit</button></p>
                    </div>
                </form>
            </div>
        )
    }
}
// a function to connecting the new question component and get the authed user as a props to manage the form 
function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}
//connecting the new question component to the store to get the authed user and handle adding the new question to the store
export default connect(mapStateToProps, { handleAddQuestion })(NewQuestion)