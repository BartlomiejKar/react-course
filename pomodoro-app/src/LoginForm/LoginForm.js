import React from 'react';
import "./LoginForm.scss"
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onLoginAttempt({
            email: this.email.current.value,
            password: this.password.current.value
        });
        this.email.current.value = ""
        this.password.current.value = ""

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
<input ref={this.email} defaultValue="bolo@example.com" type="email" />
                </label>
                <br />
                <label>
                    Podaj hasło
<input ref={this.password} defaultValue="qwerty" type="password" />
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