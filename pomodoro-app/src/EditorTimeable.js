import React from 'react';
import { TimeboxEditor, CurrentTimebox } from "./Components"
class EditorTimeable extends React.Component {
    state = {
        title: "Uczę się Reacta",
        times: "20",
        isEditable: true
    };
    handleChangeTitle = e => {
        this.setState({
            title: e.target.value
        });
    };
    handleChangeTimes = e => {
        this.setState({
            times: e.target.value
        });
    };
    handleChangeOnConfirm = () => {
        this.setState({
            isEditable: false
        });
    };
    handleChangeEditable = () => {
        this.setState({
            isEditable: true
        });
    };

    render() {
        const { title, times, isEditable } = this.state;
        return (
            <>
                <TimeboxEditor
                    title={title}
                    times={times}
                    onChangeTitle={this.handleChangeTitle}
                    onChangeTimes={this.handleChangeTimes}
                    onConfirm={this.handleChangeOnConfirm}
                    Editable={isEditable}
                />
                <CurrentTimebox
                    changeEditable={this.handleChangeEditable}
                    title={title}
                    times={times}
                    Editable={isEditable}
                />
            </>
        );
    }
}

export default EditorTimeable;