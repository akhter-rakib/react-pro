import React from "react";

type statusProps = {
    status: 'Success' | 'Loading' | 'Error'
}
const Status = (props: statusProps) => {
    let message;
    if (props.status == 'Success') {
        message = 'Loading ....'
    } else if (props.status == 'Loading') {
        message = 'Loading...'
    } else if (props.status == 'Error') {
        message = 'Error Is Going On !'
    }
    return (
        <div>
            Status - {message}
        </div>
    )
}
export default Status;