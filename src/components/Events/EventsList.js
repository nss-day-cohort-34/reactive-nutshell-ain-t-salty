import React, { Component } from 'react'
//import the components we will need
import EventsCard from './EventsCard'
import EventsManager from '../../modules/EventsManager'
import "./Events.css"

class EventsList extends Component {
    //define what this component needs to render
    state = {
        events: [],
    }
loggedInUser = parseInt(sessionStorage.getItem("credentials"))
    componentDidMount() {
        console.log("Event LIST: ComponentDidMount");
        //getAll from EventsManager and hang on to that data; put it in state
        EventsManager.getAllEvents(this.loggedInUser)
            .then((events) => {
                this.setState({
                    events: events
                })
            })
    }

    deleteEvent = id => {
        EventsManager.deleteEvent(id)
            .then(() => {
                EventsManager.getAllEvents(this.loggedInUser)
                    .then((newEvents) => {
                        this.setState({
                            events: newEvents
                        })
                    })
            })
    }

    render() {
        console.log("EventsList: Render");

        return (
            <>
                <h1 className="center card">Events</h1>
                <section className="section-content">
                    <button type="button"
                        className="card"
                        onClick={() => { this.props.history.push("/events/new") }}>
                        Add Event
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.events.map(event =>
                        <EventsCard
                            key={event.id}
                            event={event}
                            deleteEvent={this.deleteEvent}
                            {...this.props} />
                    )}
                </div>
            </>
        )
    }

}

export default EventsList