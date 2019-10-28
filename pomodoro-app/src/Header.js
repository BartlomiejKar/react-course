import React from 'react';
import GreetingUser from "./GreetingUser"
import AuthenticationContext from "./contexts/AuthenticationContext"


function Header(props) {
    return (
        <AuthenticationContext.Consumer>
            {
                ({ logoutUser }) => (
                    <header className="Header__email">
                        <GreetingUser />

                        <a onClick={logoutUser} className="Header__email-link" href="/#">wyloguj się</a>
                    </header>
                )
            }

        </AuthenticationContext.Consumer>
    )
}

export default Header