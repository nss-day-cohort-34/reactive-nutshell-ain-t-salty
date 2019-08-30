import React, { Component } from 'react'
//import the components we will need
import MessagesCard from './MessagesCard'
import MessagesManager from '../../modules/MessagesManager'

class MessagesList extends Component {
    //define what this component needs to render
    state = {
        messages: [],
    }

    componentDidMount() {
        console.log("MESSAGE LIST: ComponentDidMount");
        //getAll from MessagesManager and hang on to that data; put it in state
        MessagesManager.getAll()
            .then((messages) => {
                this.setState({
                    messages: messages
                })
            })
    }

    deleteMessage = id => {
        MessagesManager.delete(id)
            .then(() => {
                MessagesManager.getAll()
                    .then((newMessages) => {
                        this.setState({
                            messages: newMessages
                        })
                    })
            })
    }

    render() {
        console.log("MessageList: Render");

        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/messages/new") }}>
                        New Message
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.messages.map(message =>
                        <MessagesCard
                            key={message.id}
                            message={message}
                            deleteMessage={this.deleteMessage}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default MessagesList
