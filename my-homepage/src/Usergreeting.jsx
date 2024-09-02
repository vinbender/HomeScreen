

function UserGreeting(props) {
    //
    //  if(props.isLoggedIn){
    //    return <h1>Welcome, {props.user}!</h1>
    //  } else {
    //    return <h1>Sign up or log in!</h1>
    //  }

    //or
    const WelcomeMessage = <h2 className="welcome-message"> Welcome {props.username}</h2>

    const loginPrompt = <h2 className="login-prompt"> sign in to continue</h2>

    return(props.isLoggedIn ? WelcomeMessage : loginPrompt)
}
export default UserGreeting;