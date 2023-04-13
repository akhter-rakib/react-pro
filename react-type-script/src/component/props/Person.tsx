import React from "react";

type personProps = {
    name: {
        firstName: string
        lastName: string
    }
}

const Person = (props: personProps) => {
    return (
        <p>First Name : {props.name.firstName} and Last Name {props.name.lastName}</p>
    )
}
export default Person