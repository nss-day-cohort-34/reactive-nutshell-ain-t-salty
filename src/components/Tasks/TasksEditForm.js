import React, { Component } from "react"
import TasksManager from "../../modules/TasksManager"
import "./TasksForm.css"

class TasksEditForm extends Component {
    //set the initial state
    state = {
      task: "",
      date: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingTask = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedTask = {
        task: this.state.task,
        date: this.state.date,
        id: this.props.match.params.taskId
      };

      TasksManager.update(editedTask)
      .then(() => this.props.history.push("/tasks"))
    }

    componentDidMount() {
      TasksManager.get(this.props.match.params.taskId)
      .then(task => {
          this.setState({
            task: task.task,
            date: task.date,
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
                id="task"
                value={this.state.task}
              />
              <label htmlFor="task">Task</label>

              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />
              <label htmlFor="date">Date</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingTask}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default TasksEditForm