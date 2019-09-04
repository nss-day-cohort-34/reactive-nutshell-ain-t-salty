import React, { Component } from 'react';
import TasksManager from '../../modules/TasksManager';
import './TasksForm.css'

class TasksForm extends Component {
    state = {
        task: "",
        date: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create task object, invoke the TasksManager post method, and redirect to the full task list
    */
    constructNewTask = evt => {
        evt.preventDefault();
        if (this.state.task === "" || this.state.date === "") {
            window.alert("Please input an task and date");
        } else {
            this.setState({ loadingStatus: true });
            const task = {
                name: this.state.task,
                breed: this.state.date,
            };

            // Create the task and redirect user to task list
            TasksManager.post(task)
            .then(() => this.props.history.push("/tasks"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="task"
                        placeholder="Task"
                        />
                        <label htmlFor="task">Task</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="date"
                        placeholder="Date"
                        />
                        <label htmlFor="date">Date</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewTask}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default TasksForm