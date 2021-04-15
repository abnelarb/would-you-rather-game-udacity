import React, { Component } from 'react'
import { connect } from 'react-redux'
import gold from '../images/gold.jpg'
import silver from '../images/silver.png'
import bronze from '../images/bronze.png'
import medal from '../images/medal.jpg'
//leaderboard Component which views the count of asked question and answers per user and his score organised and there is also trophies to the best 10
class LeaderBoardView extends Component {
    render() {
        //the users props to loop over it to get the statics to build the component 
        const { users,authedUser } = this.props
        //the assignment of a trophies array to give the best 3 users golden,silver and bronze cup also there is a medal to users from 4 to 10
        let trophies = [gold, silver, bronze]
        for (let i = 0; i < 10; i++) {
            if (i > 2) {
                trophies[i] = medal;
            }
        }
//the statics functions returns object with username,avatar,id , total questions ,total answers and the score for each user then sort it depending on score from top to least
        const usersStatics = users.map(user => ({
            id: user.id,
            username: user.name,
            useravatarURL: user.avatarURL,
            totalanswers: Object.values(user.answers).length,
            totalquestions: user.questions.length,
            score: Object.values(user.answers).length + user.questions.length,
        }))
            .sort((a, b) => b.score - a.score)

        console.log(this.props.authedUser)
        //console.log("this statics ", usersStatics)
        return (
            <div className="string">
                <div>
                    <h1 className="h1 justify-content-center" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }} >Leaderboard </h1>
                    <div>
                        <table className="container">
                            <thead>
                                <tr>
                                    <th>Avatar</th>
                                    <th>User Name</th>
                                    <th>Answered Questions</th>
                                    <th>Created Questions</th>
                                    <th>Score</th>
                                    <th>Trophie</th>


                                </tr>
                            </thead>
                            <tbody>
                                {/* looping over the object to fill the table of the leaderboard  */}
                                {usersStatics.map((user, trophie) => (
                                    <tr key={user.id}>
                                        <td ><strong><img src={user.useravatarURL} className="card-img avatar" alt={user.username} /></strong></td>
                                        <td className="justify-content-center h5"><strong>{user.username} {(authedUser===user.id)&&<span style={{color:'blue'}}>(You)</span>}</strong></td>
                                        <td className="justify-content-center h5">{user.totalanswers}</td>
                                        <td className="justify-content-center h5"><strong>{user.totalquestions}</strong></td>
                                        <td className="justify-content-center h5"> <strong>{user.score}</strong></td>
                                        <td className="justify-content-center h5"><strong><img src={trophies[trophie]} className="avatar " alt={user.username} style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }} /></strong></td>

                                    </tr>))}

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        );
    }
}
//get the users from the state as props to build the component
function mapStateToProps({ users,authedUser }) {
    return {
        users: Object.values(users),
        authedUser
    }
}
//connect the LeaderBoardView component to the store to get the users state 
export default connect(mapStateToProps)(LeaderBoardView)