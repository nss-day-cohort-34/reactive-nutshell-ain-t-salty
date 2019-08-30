import React, { Component } from "react"
import MessagesManager from "../../modules/MessagesManager"
// import "./MessagesForm.css"

class MessagesEditForm extends Component {
    //set the initial state
    state = {
      message: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingMessage = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedMessage = {
        message: this.state.message,
        id: this.props.match.params.messageId
      };

      MessagesManager.update(editedMessage)
      .then(() => this.props.history.push("/messages"))
    }

    componentDidMount() {
      MessagesManager.get(this.props.match.params.messageId)
      .then(message => {
          this.setState({
            message: message.message,
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
                id="message"
                value={this.state.message}
              />
              <label htmlFor="message">Edit Message</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingMessage}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default MessagesEditForm