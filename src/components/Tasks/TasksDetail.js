import React, { Component } from 'react';
import TasksManager from '../../modules/TasksManager';
import './TasksDetail.css'

class TasksDetail extends Component {

  state = {
      task: "",
      date: "",
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
        checkedStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in TasksManager and re-direct to the task list.
    this.setState({loadingStatus: true})
    TasksManager.delete(this.props.taskId)
    .then(() => this.props.history.push("/tasks"))
}

handleCheckbox = () => {
    this.setState({checkedStatus: true})
    TasksManager.checked(this.props.taskId)
    .then(() => this.props.history.push("/tasks"))
}

  render() {
    return (
        <>
      <div className="card">
          {this.props.task.task}
      </div>
        <input type="checkbox" checked={this.state.checked} onChange={this.onChangeAction.bind(this)}/>
        <button type="button" onClick={() => { this.props.history.push(`/tasks/${this.props.task.id}/edit`) }}>Edit</button>
        <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Task</button>
        </>
        
    );
  }
}

export default TasksDetail;