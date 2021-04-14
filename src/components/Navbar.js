import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux'
import { authedUser } from '../actions/authenticatedUser'
import { Link } from 'react-router-dom'
//the navbar component enables the user to navigate between menu such as the leaderboard , home and add a new question also a button to logout the current user.
class Navbar extends Component {
  //function to handle the log out button and give it a null value to move back to the login page
  handleLogout = event => {
    event.preventDefault();
    this.props.authedUser(null);
  };

  render() {
    //the authed user must be logged in to able to view the app and the props of the user to dynamiclly get his name and avatar on the menu
    const { user } = this.props
    return (
      <Nav fill variant="tabs" defaultActiveKey="home">
        <Nav.Item className="mynav">
          <Nav.Link className="nav-ele" eventKey="home"></Nav.Link>
          <Link to={'/'} exact="true">Home</Link>
        </Nav.Item>
        <Nav.Item className="mynav">
          <Nav.Link className="nav-ele"></Nav.Link>
          <Link to={'/add'}>New Poll</Link>
        </Nav.Item >
        <Nav.Item className="mynav">
          <Nav.Link className="nav-ele"></Nav.Link>
          <Link to={'/leaderboard'}>Leader Board</Link>
        </Nav.Item >
        <Nav.Item className="mynav">
          <Nav.Link className="nav-ele"></Nav.Link>
          <div className="position-relative ">
            <div>
              <img className='rounded float-left p-0 mb-0'
                src={user.avatarURL}
                alt={user.name}
                width="100" height="40" align="center" /></div>
            <div className='p-0 mb-0 h6 float-center'>Hello, {user.name}</div>
          </div>
        </Nav.Item>
        <Nav.Item className="mynav">
          <Nav.Link className="nav-ele"></Nav.Link>
          <Nav.Link className="p-2 mb-1 bg-primary text-white" onClick={this.handleLogout}>
            Log out
                        </Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }
}
//function to connect the navbar component to the store to get the authedUser as a props 
function mapStateToProps({ users, authedUser }) {
  const user = users[authedUser]
  return {
    user,
    authedUser
  }
}
//connect the navbar component to the store to get the authed user
export default connect(mapStateToProps, { authedUser })(Navbar)