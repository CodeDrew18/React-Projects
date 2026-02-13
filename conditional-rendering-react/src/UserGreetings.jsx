function UserGreetings(props) {
    return (
        props.isloggedIn ? <h2 className="login-message">Welcome to the Website {props.username}</h2> : <h2 className="not-login-message">You need to login first.</h2> 
    );
}

export default UserGreetings