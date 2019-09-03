import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Welcome extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>Welcome to Nutshell</h1>
                </div>
                <div className="content">    
                    <Link to="/Login"><button>Login</button></Link>
                    <Link to="/Registration"><button>Register New Account</button></Link>
                </div>
            </>
        );
    }
}

export default Welcome;