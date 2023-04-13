import React from "react"
import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}

const User = () => {

    const [user, setUser] = useState<AuthUser | null>(null)

    const handleLogin = () => {
        setUser({
            name: 'Rakib',
            email: 'rakibccj@gmail.com'
        })
    }

    const handleLogOut = () => {
        setUser(null)
    }
    return (
        <div>
            <div>User Name is {user?.name} </div>
            <div>User Email {user?.email}</div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    )
}
export default User