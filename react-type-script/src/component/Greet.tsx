import { type } from "os"
import React from "react"

// Use Type While building application and use interface when building library
type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
    const { messageCount = 15 } = props
    return (
        <div>
            {props.isLoggedIn ? <h1>`Hello {props.name}! You have {props.messageCount} Message!</h1>
             : 'Hello Guest!'}
        </div>
    )
}
export default Greet;