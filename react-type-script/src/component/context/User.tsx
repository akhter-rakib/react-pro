import { useContext } from "react"
import { UserContext } from "./UserContext"


export const user = () => {
    const userContext = useContext(UserContext);

    const handleLogin = () => {
        userContext.setUser({
            name: 'rakib',
            email: 'rakibccj@gmail.com'
        })
    }

    const handleLogout = () => {
        userContext.setUser(null);

    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User Name {userContext.user?.name}</div>
            <div>User Email {userContext.user?.email}</div>
        </div>
    )
}