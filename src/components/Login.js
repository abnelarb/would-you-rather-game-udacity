import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import { authedUser } from '../actions/authenticatedUser'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
//the Login component it's a simple pick user component the users get in a select list and user can pick his user from the dropdown menu 
class Login extends Component {
    //the state of the login component and it has 2 values the loading value and the selected user value
    state = {
        loading: false,
        selectedUser: null
    }
    handleChangeUser = (event) => {
        this.setState({ selectedUser: event.target.value })
        //This to debug a bug happened with me 
        //while try to go back to the null select option it is stored to the state as null so i disabled it after change the attribute to prevent that
        document.getElementById("select").setAttribute("disabled", "disabled");
        //console.log(this.state.selectedUser)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        //getting the dispatch action creator as a props to handle the authenticated user from the users object 
        //and also it alerts the user to pick up a user if he press the submit without pick user
        const { dispatch } = this.props
        const value = this.state.selectedUser
        if (value !== null) {
            dispatch(authedUser(value))
            //console.log("value:", value, "props:", this.props, "state:", this.state, "dispatch ", dispatch)
            this.setState(() => ({
                loading: true,
            }))
            //console.log("authedUser :", this.state.selectedUser, this.props)
        } else {
            alert("please choose a username from the dropdown list")
        }
    }
    render() {
        const { users } = this.props
        const { loading } = this.state
        //get the state and the props 
        // a function to redirect the user to the home page after authenticated successfully
        if (loading === true) {
            return <Redirect to='/' />
        }
        return (
            // the login form dynamically get the users from the users props
            <div className="Login">
                <h1 className="h1 d-flex justify-content-center"> Welcome To Would You Rather Game</h1>
                <h3 className="h3 d-flex justify-content-center">Please Login: </h3>

                <Form className="container p-3 my-3 bg-dark text-white" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Control as="select" custom onChange={this.handleChangeUser}>
                            <option id="select" value="null">Select Your username</option>
                            {users.map(user =>
                            (<option key={user.id}
                                className="dropdown-item"
                                value={user.id}
                            >{user.name}
                            </option>

                            )
                            )}
                        </Form.Control>
                        <img className='rounded mx-auto d-block photo'
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                            alt="mohammed"
                            width="100" height="100" align="center" />

                    </Form.Group>

                    <Button block size="lg" type="submit">
                        Login
                    </Button>
                </Form>

            </div>
        )
    }
}
//function to the store to get the users and giving it to the props to loop and pick the authenticated user
function mapStateToProps({ users }) {
    return {
        users: Object.values(users),
    }
}

//connect the login component to the store
export default connect(mapStateToProps)(Login)