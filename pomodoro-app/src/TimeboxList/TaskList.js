import React from 'react';
import Timebox from "../Timebox/Timebox"


function TaskList({ timeboxes, TaskDelete, TaskEdit }) {

    return timeboxes.map((item, index) => (
        <Timebox
            key={item.id}
            onEdit={TaskEdit}
            onDelete={() => TaskDelete(index)}
            title={item.title}
            totalTimes={item.totalTimes}
            confirmChanges={this.handleDisabled}
            disabledButton={this.state.disabledButton}
            item={item}
            index={index}
        />
    ))
}

export default TaskList