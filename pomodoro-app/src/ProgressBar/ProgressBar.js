import React from 'react';
import "./ProgressBar.css"

function ProgressBar({ className = "", percent }) {
    return (
        <div className={"ProgressBar " + className}>
            <div style={{ width: `${percent}%` }}></div>
        </div>
    );
}

export default ProgressBar;