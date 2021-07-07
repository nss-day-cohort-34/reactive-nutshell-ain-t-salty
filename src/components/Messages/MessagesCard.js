import React, { Component } from 'react'
import '../Nutshell.css'

import { Link } from "react-router-dom";

class MessagesCard extends Component {
    render() {
        return (
            <>
                <div className="card">
                    {this.props.message.user.username}: {this.props.message.message}
                    <div className="btnParent">
                        <div className="edit"><button type="button" onClick={() => { this.props.history.push(`/messages/${this.props.message.id}/edit`) }}>Edit</button></div>
                        <div className="delete"><button type="button" onClick={() => this.props.deleteMessage(this.props.message.id)}>Delete</button></div>
                    </div>
                </div>

            </>
        );
    }
}

export default MessagesCard;