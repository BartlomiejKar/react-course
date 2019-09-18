import React from 'react';
import "./Timebox.css"

class Timebox extends React.Component {


    render() {
        const { title, totalTimes, onEdit, onDelete, index, confirmChanges, disabledButton } = this.props
        return (
            <div key={index} className="Timebox">
                <h3>
                    {title} - {`${totalTimes} min`}
                </h3>
                <button onClick={onEdit}>Edytuj</button>
                <button onClick={onDelete}>Usun</button>
                <button className={disabledButton ? "" : "Timebox__buttonConfirm"} disabled={!disabledButton} onClick={confirmChanges}>Zatwierdź zmiany</button>
            </div>
        );
    }
};

export default Timebox;

