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

function findIndexByAnyId(id) {
    const result = timeboxes.findIndex((timebox) => timebox.id === id)
    if (result < 0) {
        new Error("timebox o podanym id nie istnieje")
    }
    return result
}

const timeboxesAPI = {
    getAllTimeboxes: async function () {
        await wait(1000);
        console.log("GET all", timeboxes)
        return [...timeboxes]

    },
    addTimebox: async function (timeboxToAdd) {
        await wait(1000);
        const addedTimebox = { ...timeboxToAdd, id: uuid.v4(), }
        timeboxes.push(addedTimebox)
        console.log("post", timeboxes)
    },
    replaceTimebox: async function (timeboxToReplace) {
        await wait(500);
        if (!timeboxToReplace.id) {
            new Error("błędny index timeboxa")
        }
        const index = findIndexByAnyId(timeboxToReplace.id)
        const replacedTimebox = { ...timeboxToReplace }
        timeboxes[index] = replacedTimebox
        console.log("put", timeboxes)
        return replacedTimebox
    },
    removeTimebox: async function (timeboxToRemove) {
        await wait(500);
        if (!timeboxToRemove) {
            new Error("błędny index timeboxa")
        }
        const index = findIndexByAnyId(timeboxToRemove.id)
        timeboxes.splice(index, 1)
        console.log("delete", timeboxes)


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
        timeboxesAPI.removeTimebox(this.state.timeboxes[indexToRemove])
            .then(() => {
                this.setState(prevState => {
                    const timeboxes = prevState.timeboxes.filter(
                        (item, index) => index !== indexToRemove
                    );
                    return { timeboxes };
                });
            })

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
    updateTimebox = (indexUptade, TimeboxToUpdate) => {
        timeboxesAPI.replaceTimebox(TimeboxToUpdate)
            .then((updateTimebox) => {
                this.setState(prevState => {
                    const timeboxes = prevState.timeboxes.map((item, index) =>
                        index === indexUptade ? updateTimebox : item
                    );
                    return { timeboxes };

                });
            })


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