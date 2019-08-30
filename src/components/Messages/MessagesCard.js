import React, { Component } from 'react'
// import './Message.css'
import { Link } from "react-router-dom";

class MessagesCard extends Component {
    render() {
        return (
            <>
                <div className="card">
                    {this.props.message.userId}: {this.props.message.message}
                </div>
                <button type="button" onClick={() => { this.props.history.push(`/messages/${this.props.message.id}/edit`) }}>Edit</button>
                <button type="button" onClick={() => this.props.deleteMessage(this.props.message.id)}>Delete</button>
                <Link to={`/messages/${this.props.message.id}`}><button>Details</button></Link>
            </>
        );
    }
}

export default MessagesCard;