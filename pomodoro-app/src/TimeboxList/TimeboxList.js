import React, { useEffect, useContext, useReducer } from 'react';

import TimeboxCreator from "../TimeboxCreator/TimeboxCreator";
import TaskList from "../TimeboxList/TaskList"
import timeboxesAPI from "../API/FetchApiTimeboxes"
import AuthenticationContext from "../contexts/AuthenticationContext"

const stateReducer = (prevState, stateChange) => {
    return {
        ...prevState,
        ...stateChange
    }
}
function TimeboxList() {
    const initialState = {
        "timeboxes": [],
        loading: true,
        error: null
    }
    const [state, setState] = useReducer(stateReducer, initialState)


    const accessToken = useContext(AuthenticationContext)
    useEffect(() => {
        timeboxesAPI.getAllTimeboxes(accessToken)
            .then((timeboxes) => setState({ timeboxes }))
            .catch(
                (error) => (setState({ error }))
            )
            .finally(
                () => setState({
                    loading: false
                }))
    })
    function componentDidMount() {

    }
    const removeTimebox = indexToRemove => {
        timeboxesAPI.removeTimebox(this.state.timeboxes[indexToRemove], this.context.accessToken)
            .then(() => {
                setState(prevState => {
                    const timeboxes = prevState.timeboxes.filter(
                        (item, index) => index !== indexToRemove
                    );
                    return { timeboxes };
                });
            })

    };
    const addTimebox = item => {
        timeboxesAPI.addTimebox(item, this.context.accessToken)
            .then((addedTimebox) => {
                setState(prevState => {
                    const timeboxes = [item, ...prevState.timeboxes];
                    return { timeboxes };
                })
            }
            )
    };
    const updateTimebox = (indexUptade, TimeboxToUpdate) => {
        timeboxesAPI.replaceTimebox(TimeboxToUpdate, this.context.accessToken)
            .then((updateTimebox) => {
                setState(prevState => {
                    const timeboxes = prevState.timeboxes.map((item, index) =>
                        index === indexUptade ? updateTimebox : item
                    );
                    return { timeboxes };

                });
            })


    };



    const handleCreateTimebox = (item) => {
        this.addTimebox(item)
    };

    return (
        <>
            <TimeboxCreator
                CreateTimebox={handleCreateTimebox} />
            {state.loading ? "Ładuję listę zadań" : null}
            {state.error ? "Coś poszło nie tak" : null}
            <TaskList
                timeboxes={state.timeboxes}
                TaskDelete={removeTimebox}
                TaskEdit={updateTimebox} />

        </>
    );

}

// TimeboxList.contextType = AuthenticationContext

export default TimeboxList;

