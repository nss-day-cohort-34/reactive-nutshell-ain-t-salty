import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "../Nutshell.css"


class Welcome extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <h1 className ="center">Welcome to Nutshell</h1>
                    <p className ="center">An Interactive Dashboard Application</p>
                </div>
                <div className="welcome--btns">
                    <Link to="/Registration"><button className="register--btn">Register New Account</button></Link>
                    <Link to="/Login"><button className="login--btn">Login</button></Link>
                </div>

                <picture>
                    <img src={('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnbaMgG4nsi4XyGxPf2HgFpPIiGvrmQCqI3sfSYIlCSvH6UB_')} alt="My Dog" />
                </picture>
            </>
        );
    }
}

export default Welcome;