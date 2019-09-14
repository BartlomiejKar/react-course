import React from 'react';
import "../TimeboxCreator/TimeboxCreator.css"
import uuid from "uuid"

class TimeboxCreator extends React.Component {
    state = {
        title: "",
        totalTimes: "",
    }
    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    onChangeTotalTimes = (e) => {
        this.setState({
            totalTimes: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.CreateTimebox({
            id: uuid.v4(),
            title: this.state.title,
            totalTimes: this.state.totalTimes
        });
        this.setState({
            title: "",
            totalTimes: ""
        })

    }
    render() {

        return (
            <form onSubmit={this.handleSubmit} className="TimeboxCreator">
                <label>
                    Co robisz?
<input value={this.state.title} onChange={this.onChangeTitle} type="text" />
                </label>
                <br />
                <label>
                    Ile minut?
<input value={this.state.totalTimes} onChange={this.onChangeTotalTimes} type="number" />
                </label>
                <br />
                <button className="TimeboxEditor_button" >
                    Dodaj nowy Timebox
</button>
            </form>
        );
    }
}
export default TimeboxCreator;