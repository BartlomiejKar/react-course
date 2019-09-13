import React from 'react';

function ProgressBar({ className = "", percent }) {
    return (
        <div className={"ProgressBar " + className}>
            <div style={{ width: `${percent}%` }}></div>
        </div>
    );
}

export default ProgressBar;