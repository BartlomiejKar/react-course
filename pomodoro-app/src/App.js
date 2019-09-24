import React from 'react';
import TimeboxList from "./TimeboxList/TimeboxList";
import EditorTimeable from "./EditorTimeable/EditorTimeable"
import "../src/styles/style.css"
import ErrorBoundaries from "../src/ErrorBoundaries/ErrorBoundaries"

function App() {
    return (
        <div className="App">
            <ErrorBoundaries message="Nie działa cała aplikacja">
                <React.StrictMode>
                    <TimeboxList />
                    <EditorTimeable />
                </React.StrictMode>
            </ErrorBoundaries>
        </div>
    );
}
export default App;