import React from 'react';
import "./Timebox.css"

function Timebox({ title, totalTimes, onEdit, onDelete, index }) {

    return (
        <div key={index} className="Timebox">
            <h3>
                {title} - {`${totalTimes} min`}
            </h3>
            <button onClick={onEdit}>Edytuj</button>
            <button onClick={onDelete}>Usun</button>
        </div>
    );

};

export default Timebox;

