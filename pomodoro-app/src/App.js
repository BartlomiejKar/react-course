import React from 'react';
import TimeboxList from "./TimeboxList/TimeboxList";
import EditorTimeable from "./EditorTimeable/EditorTimeable"
import "../src/styles/style.css"

function App() {
    return (
        <div className="App">
            <React.StrictMode>
                <TimeboxList />
                <EditorTimeable />
            </React.StrictMode>
        </div>
    );
}
export default App;