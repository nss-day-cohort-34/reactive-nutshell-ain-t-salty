import React, { Component } from 'react';
import TasksManager from '../../modules/TasksManager';
import './TasksDetail.css'

class TasksDetail extends Component {

  state = {
      task: "",
      date: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("TaskDetail: ComponentDidMount");
    //get(id) from TasksManager and hang on to the data; put it into state
    TasksManager.get(this.props.taskId)
    .then((task) => {
      this.setState({
        task: task.task,
        date: task.date,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in TasksManager and re-direct to the task list.
    this.setState({loadingStatus: true})
    TasksManager.delete(this.props.taskId)
    .then(() => this.props.history.push("/tasks"))
}

  render() {
    return (
        <>
      <div className="card">
          {this.props.task.task}
      </div>
      <label>
          <input
            type="radio"
            name="react-tips"
            value="option1"
            checked={true}
            className="form-check-input"
            checked={this.state.selectedOption === "option1"}
            onChange={this.handleOptionChange}
            onSubmit={this.handleFormSubmit}>
            </input>
          Task Complete
        </label>
        <button type="button" onClick={() => { this.props.history.push(`/tasks/${this.props.task.id}/edit`) }}>Edit</button>
        <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Task</button>
        </>
        
    );
  }
}

export default TasksDetail;