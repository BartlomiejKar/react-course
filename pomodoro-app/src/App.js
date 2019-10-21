import React from 'react';
import TimeboxList from "./TimeboxList/TimeboxList";
import EditorTimeable from "./EditorTimeable/EditorTimeable"
import "../src/styles/style.css"
import ErrorBoundaries from "../src/ErrorBoundaries/ErrorBoundaries"
import "./App.css"

function App() {
    return (
        <div className="App">
            <ErrorBoundaries message="Nie działa cała aplikacja">
                <header className="Header__email">
                    Witaj example@example.pl
            <a className="Header__email-link" href="/#">wyloguj się</a>
                </header>
                <React.StrictMode>
                    <TimeboxList />
                    <EditorTimeable />
                </React.StrictMode>
            </ErrorBoundaries>
        </div>
    );
}
export default App;