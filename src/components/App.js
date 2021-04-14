import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Navbar from "./Navbar";
import { handleInitialData } from '../actions/shared'
import React, { Component, Fragment } from 'react';
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import Footer from './Footer'
import UserView from './UserView';
import NewQuestion from './NewQuestion'
import LeaderBoardView from './LeaderBoard'
import ErrorPage404 from './ErrorPage404';
class App extends Component {
  //get the data after the mount of the app component
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    //console.log(this.props)
  }
  render() {
    const { authedUser } = this.props
    //console.log("props", this.props)
    return (
      //using router and fragment , loading bar to build the main routes of the app
      <Router>
        <Fragment>
          <LoadingBar style={{ backgroundColor: 'blue', height: '5px' }} showFastActions />
          <div className="container-fluid">
            {this.props.loading === true
              ? <Login />
              : <div>
                {authedUser === null
                  ? (
                    <Route
                      render={() => (<Login />)} />
                  )
                  : (<div>
                    <Navbar />
                    <Switch>
                      <Route exact path="/logout" component={Login} />
                      <Route exact path="/" component={Dashboard} />
                      <Route path="/questions/:question_id" component={UserView} />
                      <Route path="/add" component={NewQuestion} />
                      <Route path="/leaderboard" component={LeaderBoardView} />
                      <Route path="" component={ErrorPage404} />
                      <Route path="*" component={ErrorPage404} />
                      <Route component={ErrorPage404} />
                      <Route path="/questions/errorpage" component={ErrorPage404} />
                    </Switch>
                    <Footer /></div>)}

              </div>

            }


          </div>
        </Fragment>
      </Router>
    );
  }
}
//to map the authunticated user to the props
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser,
  }
}
export default connect(mapStateToProps)(App);
