import React from 'react';
import TimeboxList from "./TimeboxList/TimeboxList";
import EditorTimeable from "./EditorTimeable/EditorTimeable"
import Header from "./Header"

function AuthenticatedApp() {
    return <>
        <Header />
        <React.StrictMode>
            <TimeboxList />
            <EditorTimeable />
        </React.StrictMode>
    </>
}

export default AuthenticatedApp