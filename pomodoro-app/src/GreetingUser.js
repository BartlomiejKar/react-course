import React from 'react';
import jwt from "jsonwebtoken"



function GreetingUser({ accessToken }) {
    return <>
        Witaj {getUserEmail(accessToken)}
    </>

}

export default GreetingUser

function getUserEmail(accessToken) {
    const decodeToken = jwt.decode(accessToken)
    return decodeToken.email
}


