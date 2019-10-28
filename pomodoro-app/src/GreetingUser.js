import React from 'react';
import jwt from "jsonwebtoken"
import AuthenticationContext from "./contexts/AuthenticationContext"



function GreetingUser(props) {
    return (
        <AuthenticationContext.Consumer>
            {
                ({ accessToken }) => <>Witaj {getUserEmail(accessToken)}</>

            }
        </AuthenticationContext.Consumer>
    )
}

export default GreetingUser

function getUserEmail(accessToken) {
    const decodeToken = jwt.decode(accessToken)
    return decodeToken.email
}


