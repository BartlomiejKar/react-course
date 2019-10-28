import React from 'react';
import GreetingUser from "./GreetingUser"

function Header({ accessToken, logoutUser }) {
    return <header className="Header__email">
        <GreetingUser accessToken={accessToken} />

        <a onClick={logoutUser} className="Header__email-link" href="/#">wyloguj się</a>
    </header>
}

export default Header