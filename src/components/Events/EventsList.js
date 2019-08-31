import React, { Component } from 'react'
//import the components we will need
import EventsCard from './EventsCard'
import EventsManager from '../../modules/EventsManager'

class EventsList extends Component {
    //define what this component needs to render
    state = {
        events: [],
    }

    componentDidMount() {
        console.log("Event LIST: ComponentDidMount");
        //getAll from EventsManager and hang on to that data; put it in state
        EventsManager.getAllEvents()
            .then((events) => {
                this.setState({
                    events: events
                })
            })
    }

    deleteEvent = id => {
        EventsManager.deleteEvent(id)
        .then(() => {
          EventsManager.getAllEvents()
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
            {/* the class in h1 is part of the bootstrap styling from home page */}
                <h1 className ="center card">Events</h1>
                <div className="container-cards">
                    {this.state.events.map(event =>
                        <EventsCard
                        key={event.id}
                         event={event}
                         deleteEvent={this.deleteEvent}/>
                    )}
                </div>
            </>
        )
    }

}

export default EventsList