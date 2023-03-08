import React from "react";
import { Name } from "./CommonType";

type nameListProps = {
    names: Name[]
}

const PersonList = (props: nameListProps) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h1>
                        Your First Name :  {name.firstName} and Your Last Name :  {name.lastName}
                    </h1>
                )
            })}
        </div>
    )
}

export default PersonList;