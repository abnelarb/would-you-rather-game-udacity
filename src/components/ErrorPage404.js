import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import error from '../images/404.webp'
// a component to view an error page if the user go to a wrong path
class ErrorPage404 extends Component {
render()   {
    return (
        <div className="h2">
                <img style={{alignSelf:'center',alignContent:"center",left:"25%", position:'absolute'}} src={error} alt="error 404 page"/>
        <div style={{position:'absolute' , top:"60%",right:"5%"}} className="centered" >Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?</div>
        <p style={{position:'absolute' , top:"70%",right:"40%"}} className="centered">Let's go <Link to="/" exact="true"> home</Link> and try from there.</p>
      </div>
    )
}
}
export default ErrorPage404