import React, { Component } from "react"
import TasksManager from "../../modules/TasksManager"
import "./TasksForm.css"

class TasksCheckedForm extends Component {
    //set the initial state
    state = {
      task: "",
      date: "",
      checkedStatus: true,
    };

    

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateCheckedTask = evt => {
      evt.preventDefault()
      this.setState({ checkedStatus: true });
      const checkedTask = {
        id: this.props.match.params.taskId,
        task: this.state.task,
        date: this.state.date
      };

      TasksManager.update(checkedTask)
      .then(() => this.props.history.push("/tasks"))
    }

    componentDidMount() {
      TasksManager.get(this.props.match.params.taskId)
      .then(task => {
          this.setState({
            task: task.task,
            date: task.date,
            checkedStatus: false,
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

              <button
                type="checkbox" disabled={this.state.checkedStatus}
                onClick={this.updateCheckedTask}
                className="chk chk-primary"
              >Mark Task Complete</button>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />
              <label htmlFor="date">Date Completed</label>
            </div>
            <div className="alignRight">
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default TasksCheckedForm