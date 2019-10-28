import React from 'react';
import TimeboxList from "./TimeboxList/TimeboxList";
import EditorTimeable from "./EditorTimeable/EditorTimeable"
import Header from "./Header"

function AuthenticatedApp({ accessToken, logoutUser }) {
    return <>
        <Header accessToken={accessToken} logoutUser={logoutUser} />
        <React.StrictMode>

            <TimeboxList accessToken={accessToken} />
            <EditorTimeable />
        </React.StrictMode>
    </>
}

export default AuthenticatedApp