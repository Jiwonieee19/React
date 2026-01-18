import PropTypes from 'prop-types'

function UserGreeting({ isLoggedIn = false, username = "Guest" }) {

    // if (props.isLoggedIn) {
    //     return <h2>Welcome, {props.username}</h2>
    // } else {
    //     return <h2>Please Log In First! </h2>
    // }

    // return (props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2>
    //     : <h2 className="login-prompt">Please Login</h2>
    // )

    const welcomeMessage = <h2 className="welcome-message">Welcome pu {username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please Login Sa Guro</h2>

    return (isLoggedIn ? welcomeMessage : loginPrompt)

}

//by using const, its a lot easier to read

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string,
}
// If your project was recently created or updated to React 19, PropTypes have been entirely removed from the React core and are now silently ignored. 
// which is react19 na ni, checked on package.json

// UserGreeting.defaultProps = {
//     isLoggedIn: false,
//     username: "Guest",
// }
// defaultProps is being deprecated for functional components in React 18.3 and will be removed in future versions.

export default UserGreeting