import React from 'react';
import TimeboxList from "./TimeboxList/TimeboxList";
import EditorTimeable from "./EditorTimeable/EditorTimeable"
import "../src/styles/style.css"
import ErrorBoundaries from "../src/ErrorBoundaries/ErrorBoundaries"
import "./App.css"
import LoginForm from "./LoginForm/LoginForm"
import FetchApi from "./API/FetchAuthentiactionApi"
import jwt from "jsonwebtoken"

class App extends React.Component {

    state = {
        accessToken: null,
        previousLoginAttempt: false
    }

    isLogged() {
        return !!this.state.accessToken;

    }

    getUserEmail = () => {
        const decodeToken = jwt.decode(this.state.accesToken)
        return decodeToken
    }

    handleLoginAttempt = (credentials) => {
        FetchApi.login(credentials)
            .then(({ accessToken }) => {
                console.log("accesstoken", accessToken)
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
                                <header className="Header__email">
                                    Witaj {this.getUserEmail()}
                                    <a onClick={this.logoutUser} className="Header__email-link" href="/#">wyloguj się</a>
                                </header>
                                <React.StrictMode>
                                    <TimeboxList />
                                    <EditorTimeable />
                                </React.StrictMode>
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