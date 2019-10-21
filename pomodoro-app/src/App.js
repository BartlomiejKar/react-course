import React from 'react';
import TimeboxList from "./TimeboxList/TimeboxList";
import EditorTimeable from "./EditorTimeable/EditorTimeable"
import "../src/styles/style.css"
import ErrorBoundaries from "../src/ErrorBoundaries/ErrorBoundaries"
import "./App.css"
import LoginForm from "./LoginForm/LoginForm"
import AuthenticationApi from "./API/FetchAuthentiactionApi"

class App extends React.Component {

    isLogged() {
        return false
    }

    getUserEmail = () => {
        return "example@example.pl"
    }

    handleLoginAttempt = (credentials) => {
        AuthenticationApi.login(credentials)
            .then((result) => {
                console.log("login result", result)
            })
            .catch(() => {
                console.log("błąd")
            })

        console.log("Login attempt")
    }



    logoutUser = () => {
        console.log("Wylogowane")
    }
    render() {
        return (
            <div className="App">
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
                                errorMessage="Nie udało się zalogować"
                                onLoginAttempt={this.handleLoginAttempt} /></div>

                    }

                </ErrorBoundaries>
            </div>
        );
    }
}
export default App;