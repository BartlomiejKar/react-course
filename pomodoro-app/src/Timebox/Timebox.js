import React from 'react';
import "./Timebox.css";
import EditForm from "../EditForm/EditForm"
import propTypes from "prop-types"

class Timebox extends React.Component {
    state = {
        disabledButton: true,
        formIsVisible: false
    }
    formIsVisible = () => {
        this.setState({
            formIsVisible: true
        })
    }
    confirmChanges = (e) => {
        this.setState({
            formIsVisible: false
        })
    }

    render() {

        const { title, totalTimes, onEdit, onDelete, index, item } = this.props
        return (
            <div key={index} className="Timebox">
                <h3>
                    {title} - {`${totalTimes} min`}
                </h3>
                <button onClick={this.formIsVisible} >Edytuj</button>
                <button onClick={onDelete}>Usun</button>
                <EditForm
                    formIsVisible={this.state.formIsVisible}
                    confirmChanges={this.confirmChanges}
                    onEdit={onEdit}
                    index={index}
                    item={item} />
            </div>
        );
    }
};

Timebox.propTypes = {
    title: propTypes.string,
    totalTimes: propTypes.number,

}

export default Timebox;

