import React from 'react';
import TimeboxList from "./TimeboxList/TimeboxList";
import EditorTimeable from "./EditorTimeable/EditorTimeable"
import "../src/styles/style.css"

function App() {
    return (
        <div className="App">
            <TimeboxList />
            <EditorTimeable />
        </div>
    );
}
export default App;