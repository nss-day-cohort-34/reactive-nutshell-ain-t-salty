import React, { Component } from 'react';
import EventsManager from '../../modules/EventsManager';
import './EventsForm.css'

class EventsForm extends Component {
    state = {
        name: "",
        date: "",
        location:"",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create event object, invoke the EventsManager post method, and redirect to the full eventlist
    */
    constructNewEvent = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.date === ""|| this.state.location === "") {
            window.alert("Please complete all fields");
        } else {
            this.setState({ loadingStatus: true });
            const event = {
                name: this.state.name,
                date: this.state.date,
                location: this.state.location,
                userId: parseInt(sessionStorage.getItem("credentials"))
            };

            // Create the event and redirect user to event list
            EventsManager.postEvent(event)
            .then(() => this.props.history.push("/events"));
        }
    };

    render(){

        return(
            <>
            <h1 className="center card">Event Form</h1>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="name"

                        />
                        <label htmlFor="name">Event</label>
                        <input
                        type="date"
                        required
                        onChange={this.handleFieldChange}
                        id="date"

                        />
                        <label htmlFor="date">Date:</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="location"

                        />
                        <label htmlFor="location">Location:</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewEvent}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default EventsForm