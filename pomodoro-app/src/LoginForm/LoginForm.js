import React from 'react';
import "./LoginForm.scss"
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onLoginAttempt({
            email: this.emailInput.current.value,
            password: this.passwordInput.current.value
        });
        this.emailInput.current.value = ""
        this.passwordInput.current.value = ""

    }
    render() {
        return (
            <form className="LoginForm" onSubmit={this.handleSubmit}>
                {this.props.errorMessage ?
                    <div className="LoginForm__errorMessage">{this.props.errorMessage}</div>
                    : <></>
                }
                <label>
                    Podaj email
<input ref={this.emailInput} defaultValue="bolo@example.pl" type="email" />
                </label>
                <br />
                <label>
                    Podaj hasło
<input ref={this.passwordInput} defaultValue="qwerty" type="password" />
                </label>
                <br />
                <button className="" >
                    Zaloguj
</button>
            </form>
        )
    }
}

export default LoginForm