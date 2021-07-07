import React, { Component } from 'react';
import "./Events.css"
// import "../Nutshell.css"

class EventsCard extends Component {
    render() {
        return (


            <div className="card">
                <div className="card-content">
                    <h3><span className="card-petname"></span>{this.props.event.name}</h3>
                    <p>Location: {this.props.event.location}</p>
                    <p>Date: {this.props.event.date}</p>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/events/${this.props.event.id}/edit`) }}>Edit</button>
                    <button type="button" onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete
                    Event</button>

                </div>
            </div>

        );
    }
}

export default EventsCard;