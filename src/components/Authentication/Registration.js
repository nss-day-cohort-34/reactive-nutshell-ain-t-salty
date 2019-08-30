import React, { Component } from "react"
import LoginManager from "../../modules/LoginManager";

class Registration extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
        confirmPassword: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createNewUserHandler = evt => {
        evt.preventDefault();
        if (this.state.username === "" || this.state.email === "" || this.state.password === "") {
            window.alert("Please enter all fields");
        } else {
            // this.setState({ loadingStatus: true });
            const user = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            };

            // Create the animal and redirect user to animal list
            LoginManager.createNewUser(user)
            .then(() => this.props.history.push("/news"));
        }
    };

    render() {
        return (
            <form>
                <fieldset>
                    <h3>Please sign in</h3>
                    <div className="formgrid">
                        <input onChange={this.handleFieldChange} type="text"
                            id="username"
                            placeholder="Username"
                            required="" autoFocus="" />
                        <label htmlFor="inputUsername">Username</label>

                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email address"
                            required="" />
                        <label htmlFor="inputEmail">Email address</label>

                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <label htmlFor="inputPassword">Password</label>

                        <input onChange={this.handleFieldChange} type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            required="" />
                        <label htmlFor="inputPassword">Confirm Password</label>
                    </div>
                    <button type="submit">
                        Register New Account
                    </button>
                </fieldset>
            </form>
        )
    }

}

export default Registration