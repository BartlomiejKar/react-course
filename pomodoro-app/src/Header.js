import React from 'react';
import GreetingUser from "./GreetingUser"

function Header({ logoutUser }) {
    return <header className="Header__email">
        <GreetingUser />

        <a onClick={logoutUser} className="Header__email-link" href="/#">wyloguj się</a>
    </header>
}

export default Header