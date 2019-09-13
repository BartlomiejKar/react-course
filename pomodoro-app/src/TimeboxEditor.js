import React from 'react';

function TimeboxEditor(props) {
    const {
        title,
        times,
        onChangeTitle,
        onChangeTimes,
        Editable,
        onConfirm
    } = props;
    return (
        <div className={`TimeboxEditor ${Editable ? "" : "inactive"}`}>
            <label>
                Co robisz?
<input
                    disabled={!Editable}
                    onChange={onChangeTitle}
                    defaultValue={title}
                    type="text"
                />
            </label>{" "}
            <br />
            <label>
                Ile minut?
<input
                    disabled={!Editable}
                    onChange={onChangeTimes}
                    defaultValue={times}
                    type="number"
                />
            </label>
            <br />
            <button
                disabled={!Editable}
                onClick={onConfirm}
                className="TimeboxEditor_button"
            >
                Zacznij
</button>
        </div>
    );
}

export default TimeboxEditor;