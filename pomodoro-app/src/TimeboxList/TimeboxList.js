import React from 'react';
import uuid from "uuid";
import TimeboxCreator from "../TimeboxCreator/TimeboxCreator";
import Timebox from "../Timebox/Timebox"
class TimeboxList extends React.Component {
    state = {
        timeboxes: [
            { id: uuid.v4(), title: "kurs React", totalTimes: 10 },
            { id: uuid.v4(), title: "kontrolowanie komponentow", totalTimes: 15 },
            { id: uuid.v4(), title: "przekazywanie stanu w gore", totalTimes: 20 }
        ]
    };
    removeTimebox = indexToRemove => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.filter(
                (item, index) => index !== indexToRemove
            );
            return { timeboxes };
        });
    };
    addTimebox = item => {
        this.setState(prevState => {
            const timeboxes = [item, ...prevState.timeboxes];
            return { timeboxes };
        });
    };
    updateTimebox = (indexUptade, updateTimebox) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.map((item, index) =>
                index === indexUptade ? updateTimebox : item
            );
            return { timeboxes };
        });
    };

    handleCreateTimebox = () => {
        this.addTimebox({
            id: uuid.v4(),
            title: "nowy timebox",
            totalTimes: 15
        });
    };
    render() {
        return (
            <>
                <TimeboxCreator CreateTimebox={this.handleCreateTimebox} />
                {this.state.timeboxes.map((item, index) => (
                    <Timebox
                        key={item.id}
                        onEdit={() =>
                            this.updateTimebox(index, {
                                ...item,
                                title: "update timebox"
                            })
                        }
                        onDelete={() => this.removeTimebox(index)}
                        title={item.title}
                        totalTimes={item.totalTimes}
                    />
                ))}
            </>
        );
    }
}

export default TimeboxList;