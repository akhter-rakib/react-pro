import React from "react";
import { PersonProps } from "../CommonType";


const Person = (props: PersonProps) => {
    return (
        <p>First Name : {props.name.firstName} and Last Name {props.name.lastName}</p>
    )
}
export default Person