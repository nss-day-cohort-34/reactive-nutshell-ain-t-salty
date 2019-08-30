import React, { Component } from 'react';
import MessagesManager from '../../modules/MessagesManager';
// import './MessagesDetail.css'

class MessagesDetail extends Component {

    state = {
        message: "",
        loadingStatus: true,
    }

    componentDidMount() {
        console.log("MessagesDetail: ComponentDidMount");
        //get(id) from MessagesManager and hang on to the data; put it into state
        MessagesManager.get(this.props.messageId)
            .then((message) => {
                this.setState({
                    message: message.message,
                    loadingStatus: false
                });
            });
    }

    handleDelete = () => {
        //invoke the delete function in MessagesManger and re-direct to the message list.
        this.setState({loadingStatus: true})
        MessagesManager.delete(this.props.messageId)
        .then(() => this.props.history.push("/messages"))
    }

    render() {
        return (
            <>
                <div className="card">
                    {this.props.message.message}
                </div>
                <button type="button" onClick={() => { this.props.history.push(`/messages/${this.props.message.id}/edit`) }}>Edit</button>
                <button type="button" disabled={this.state.loadingStatus} onClick={() => this.props.deleteMessage(this.props.message.id)}>Delete</button>
            </>
        );
    }
}

export default MessagesDetail;