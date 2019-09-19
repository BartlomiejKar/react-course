import React from 'react';
import "./EditForm.css"


class EditForm extends React.Component {
    state = {
        title: "",
        totalMinutes: "",
    }

    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleChangeTotalMinutes = (e) => {
        this.setState({
            totalMinutes: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("klik")
        this.props.confirmChanges()
        this.props.onEdit(this.props.index, {
            ...this.props.item,
            title: this.state.title,
            totalTimes: this.state.totalMinutes
        })
        this.setState({
            title: "",
            totalMinutes: ""
        })
    }


    render() {
        const { formIsVisible } = this.props
        return (
            <>

                <form onSubmit={this.handleSubmit} className={formIsVisible ? "" : "Timebox__formEdit"}>
                    <label> Co robisz
                        <input onChange={this.handleChangeTitle} value={this.state.title} type="text" />
                    </label>
                    <label> ile minut
                        <input onChange={this.handleChangeTotalMinutes} value={this.state.totalMinutes} type="number" />
                    </label>
                    <button >Zatwierdź zmiany</button>
                </form>
            </>
        )
    }
}

export default EditForm