import React from 'react';
import "../TimeboxCreator/TimeboxCreator.css"

function TimeboxCreator(props) {
    const { CreateTimebox } = props;
    return (
        <div className="TimeboxCreator">
            <label>
                Co robisz?
<input type="text" />
            </label>{" "}
            <br />
            <label>
                Ile minut?
<input type="number" />
            </label>
            <br />
            <button className="TimeboxEditor_button" onClick={CreateTimebox}>
                Dodaj nowy Timebox
</button>
        </div>
    );
}
export default TimeboxCreator;