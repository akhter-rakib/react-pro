import React from "react";

type nameListProps = {
    nameList: {
        firstName: string
        lastName: string
    }[]
}

const PersonList = (props: nameListProps) => {
    return (
        <div>
            {props.nameList.map(name => {
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