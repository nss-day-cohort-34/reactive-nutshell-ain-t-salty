import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Welcome extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <h1>Welcome to Nutshell</h1>
                </div>

                <Link to="/Registration"><button>Register New Account</button></Link>
                <Link to="/Login"><button>Login</button></Link>
            </>
        );
    }
}

export default Welcome;