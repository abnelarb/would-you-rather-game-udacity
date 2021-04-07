import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";

const Login = () => {
    return (
        <div className="Login">
            <h1 className="h1"> Welcome To Would You Rather Game</h1>
            <h3 className="h3">Please Login: </h3>
            <div className="avatar-group">
                <img
                    className='rounded mx-auto d-block photo'
                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                    alt="Mohammed"
                />
            </div>
            <Form className="container p-3 my-3 bg-dark text-white">
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Select your username : </Form.Label>

                    <Form.Control as="select" custom >
                        <option className="dropdown-item">Mohammed</option>
                        <option className="dropdown-item">Marwa</option>
                        <option className="dropdown-item">Adam</option>
                    </Form.Control>
                    
                </Form.Group>
                <Button block size="lg" type="submit" /* disabled={!validateForm()} */>
          Login
        </Button>
            </Form>

        </div>
    )
}
export default Login