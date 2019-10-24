import React from 'react';
import TimeboxList from "./TimeboxList/TimeboxList";
import EditorTimeable from "./EditorTimeable/EditorTimeable"
import "../src/styles/style.css"
import ErrorBoundaries from "../src/ErrorBoundaries/ErrorBoundaries"
import "./App.css"
import LoginForm from "./LoginForm/LoginForm"
import AuthenticationApi from "./API/FetchAuthentiactionApi"
import jwt from "jsonwebtoken"

class App extends React.Component {

    state = {
        accesToken: null,
        previousLoginAttempt: false
    }

    isLogged() {
        return !!this.state.accesToken
    }

    getUserEmail = () => {
        const decodeToken = jwt.decode(this.state.accesToken)
        return decodeToken
    }

    handleLoginAttempt = (credentials) => {
        AuthenticationApi.login(credentials)
            .then((result) => {
                console.log("result", result)
            })
        // AuthenticationApi.login(credentials)
        //     .then((accesToken) => {
        //         this.setState({
        //             accesToken,
        //             previousLoginAttempt: false
        //         })


        //         console.log("Login attempt", credentials)
        //     })
        console.log("Login attempt", credentials)
    }



    logoutUser = () => {
        console.log("Wylogowane")
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
                                    <TimeboxList accesToken={this.state.accesToken} />
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