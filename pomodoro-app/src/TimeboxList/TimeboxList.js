import React from 'react';

import TimeboxCreator from "../TimeboxCreator/TimeboxCreator";
import Timebox from "../Timebox/Timebox"
import timeboxesAPI from "../API/FetchApiTimeboxes"
import AuthenticationContext from "../contexts/AuthenticationContext"

// const stateReducer = (prevState, stateChange) => {
//     return {
//         ...prevState,
//         ...stateChange
//     }
// }
class TimeboxList extends React.Component {
    state = {
        "timeboxes": [],
        loading: true,
        error: null
    }
    // const[state, setState] = useReducer(stateReducer, initialState)


    // const accessToken = useContext(AuthenticationContext)
    // useEffect(() => {
    //     timeboxesAPI.getAllTimeboxes(accessToken)
    //         .then((timeboxes) => setState({ timeboxes }))
    //         .catch(
    //             (error) => (setState({ error }))
    //         )
    //         .finally(
    //             () => setState({
    //                 loading: false
    //             }))
    // })
    componentDidMount() {
        timeboxesAPI.getAllTimeboxes(this.context.accessToken)
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
        timeboxesAPI.removeTimebox(this.state.timeboxes[indexToRemove], this.context.accessToken)
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
        timeboxesAPI.addTimebox(item, this.context.accessToken)
            .then((addedTimebox) => {
                this.setState(prevState => {
                    const timeboxes = [item, ...prevState.timeboxes];
                    return { timeboxes };
                })
            }
            )
    };
    updateTimebox = (indexUptade, TimeboxToUpdate) => {
        timeboxesAPI.replaceTimebox(TimeboxToUpdate, this.context.accessToken)
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
                {
                    this.state.timeboxes.map((item, index) => (
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
        )
    };

}

TimeboxList.contextType = AuthenticationContext

export default TimeboxList;

