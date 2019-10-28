import React from 'react';
import "../src/styles/style.css"
import ErrorBoundaries from "../src/ErrorBoundaries/ErrorBoundaries"
import "./App.css"
import LoginForm from "./LoginForm/LoginForm"
import FetchApi from "./API/FetchAuthentiactionApi"
import AuthenticatedApp from "./AuthenticatedApp";

class App extends React.Component {

    state = {
        accessToken: null,
        previousLoginAttempt: false
    }

    isLogged() {
        return !!this.state.accessToken;

    }

    handleLoginAttempt = (credentials) => {
        FetchApi.login(credentials)
            .then(({ accessToken }) => {
                this.setState({
                    accessToken,
                    previousLoginAttempt: false
                })
            }).catch(() => {
                this.setState({
                    previousLoginAttempt: true
                })
                console.log("catch źle")
            })
    }



    logoutUser = () => {
        console.log("Wylogowane")
        this.setState({
            accessToken: null,
            previousLoginAttempt: false
        })
    }
    render() {
        return (
            <div className="App" >
                <ErrorBoundaries message="Nie działa cała aplikacja">
                    {
                        this.isLogged() ?
                            <>
                                <AuthenticatedApp accessToken={this.state.accessToken} logoutUser={this.logoutUser} />

                            </> :
                            <div><LoginForm
                                errorMessage={this.state.previousLoginAttempt ? "Nie udało się zalogować" : null}
                                onLoginAttempt={this.handleLoginAttempt} /></div>

                    }

                </ErrorBoundaries>
            </div>
        );
    }
}
export default App;