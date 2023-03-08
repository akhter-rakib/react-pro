import { useState } from "react"


const LoggedIn = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const loggedInFn = () => {
        setLoggedIn(true);
    }
    const loggedOut = () => {
        setLoggedIn(false)
    }
    return (
        <div>
            {/* {loggedIn && } */}
            {loggedIn ? <div>User Logged In ....</div> : <div>Please LoggedIn ....</div>}
            <button onClick={loggedInFn}>Logged In Please</button>
            <button onClick={loggedOut}>LogOut</button>
        </div>
    )
}
export default LoggedIn