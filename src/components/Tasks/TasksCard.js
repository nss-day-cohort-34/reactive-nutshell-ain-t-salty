import React, { Component } from 'react';
import './Tasks.css'
import { Link } from "react-router-dom";

class TasksCard extends Component {
  render() {
    return (
        <>
      <div className="card">
          {this.props.task.task}
          </div>
          <button type="checkbox" onClick={() => {this.props.history.push(`/tasks/${this.props.task.id}/checked`)}}>Mark Task Complete</button>
          <button type="button" onClick={() => {this.props.history.push(`/tasks/${this.props.task.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteTask(this.props.task.id)}>Delete Task</button>
          </>
    );
  }
}

export default TasksCard;