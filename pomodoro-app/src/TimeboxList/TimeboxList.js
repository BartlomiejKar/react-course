import React from 'react';
import uuid from "uuid";
import TimeboxCreator from "../TimeboxCreator/TimeboxCreator";
import Timebox from "../Timebox/Timebox"



function wait(ms = 1000) {
    return new Promise(
        (resolve) => {
            setTimeout(resolve, ms)
        }
    )
}

const timeboxes = [
    { "id": uuid.v4(), "title": "kurs React", "totalTimes": 10 },
    { "id": uuid.v4(), "title": "kontrolowanie komponentow", "totalTimes": 15 },
    { "id": uuid.v4(), "title": "przekazywanie stanu w gore", "totalTimes": 20 }
]


const timeboxesAPI = {
    getAllTimeboxes: async function () {
        await wait(1000);
        return [...timeboxes]
    },
    addTimebox: async function (timeboxToAdd) {
        await wait(1000);
        const addedTimebox = { ...timeboxToAdd, id: uuid.v4(), }
        timeboxes.push(addedTimebox)
    }

}

class TimeboxList extends React.Component {
    state = {
        timeboxes: [],
        loading: true,
        error: null
    }

    componentDidMount() {
        timeboxesAPI.getAllTimeboxes()
            .then((timeboxes) => this.setState({ timeboxes }))
            .catch(
                (error) => (this.setState({ error }))
            )
            .finally(
                () => this.setState({
                    loading: false
                }))


    }
    removeTimebox = indexToRemove => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.filter(
                (item, index) => index !== indexToRemove
            );
            return { timeboxes };
        });
    };
    addTimebox = item => {
        timeboxesAPI.addTimebox(item)
            .then((addedTimebox) => {
                this.setState(prevState => {
                    const timeboxes = [item, ...prevState.timeboxes];
                    return { timeboxes };
                })
            }
            )
    };
    updateTimebox = (indexUptade, updateTimebox) => {
        this.setState(prevState => {
            const timeboxes = prevState.timeboxes.map((item, index) =>
                index === indexUptade ? updateTimebox : item
            );
            return { timeboxes };

        });

    };

    handleCreateTimebox = (item) => {
        this.addTimebox(item)
    };


    render() {

        return (
            <>
                <TimeboxCreator
                    CreateTimebox={this.handleCreateTimebox} />
                {this.state.loading ? "Ładuję listę zadań" : null}
                {this.state.error ? "Coś poszło nie tak" : null}
                {this.state.timeboxes.map((item, index) => (
                    <Timebox
                        key={item.id}
                        onEdit={this.updateTimebox}
                        onDelete={() => this.removeTimebox(index)}
                        title={item.title}
                        totalTimes={item.totalTimes}
                        confirmChanges={this.handleDisabled}
                        disabledButton={this.state.disabledButton}
                        item={item}
                        index={index}
                    />
                ))}
            </>
        );
    }
}

export default TimeboxList;