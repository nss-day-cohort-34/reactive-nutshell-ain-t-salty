import React, { Component } from "react"
import EventsManager from "../../modules/EventsManager"
import "./EventsForm.css"

class EventsEditForm extends Component {
    //set the initial state
    state = {
      name: "",
      date: "",
      location:"",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingEvent= evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedEvent = {
        id: this.props.match.params.eventId,
        name: this.state.name,
        date: this.state.date,
        location: this.state.location
      };

      EventsManager.updateEvent(editedEvent)
      .then(() => this.props.history.push("/events"))
    }
    //Below are the fields that populate the edit form
    componentDidMount() {
      EventsManager.getEvent(this.props.match.params.eventId)
      .then(event => {
          this.setState({
            name: event.name,
            date: event.date,
            location: event.location,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
              <label htmlFor="name">Event</label>

              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />
              <label htmlFor="date">Date</label>
              <input
                type="location"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="location"
                value={this.state.location}
              />
              <label htmlFor="location">Location</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEvent}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default EventsEditForm
