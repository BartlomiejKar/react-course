import React from 'react';
import "./Timebox.css"

class Timebox extends React.Component {
    state = {
        title: "",
        totalTimes: ""
    }
    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleChangeTimes = (e) => {
        this.setState({
            totalTimes: e.target.value
        })
    }
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
                <form className={disabledButton ? "" : "Timebox__formEdit"}>
                    <label> Co robisz
                        <input defaultValue={this.state.title} onChange={this.state.handleChangeTitle} type="text" />
                    </label>
                    <label> ile minut
                        <input defaultValue={this.state.totalTimes} onChange={this.state.handleChangeTimes} type="number" />
                    </label>
                </form>
            </div>
        );
    }
};

export default Timebox;

