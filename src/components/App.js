import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import Navbar from "./Navbar";
import { handleInitialData } from '../actions/shared'
import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    console.log(this.props)
  }
  render() {
    return (
      <Router>
        <LoadingBar />

        <div className="container">
          <Navbar />
          {this.props.loading === true
            ? null
            : <div>
              <Login />
            </div>
          }
        </div>
      </Router>

    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
export default connect (mapStateToProps)(App);
