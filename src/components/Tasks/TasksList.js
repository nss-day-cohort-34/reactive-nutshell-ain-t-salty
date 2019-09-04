import React, { Component } from "react";
//import the components we will need
import TasksCard from "./TasksCard";
import TasksManager from "../../modules/TasksManager";

class TasksList extends Component {
  //define what this component needs to render
  state = {
    tasks: []
  };

  componentDidMount() {
    console.log("TASK LIST: ComponentDidMount");
    //getAll from TasksManager and hang on to that data; put it in state
    TasksManager.getAll()
        .then(tasks => {
            this.setState({
                tasks: tasks
        //we may want to rename as tasksObj after tasks: AS WELL AS SINGULAR TASKCARD,etc.
      });
    });
  }
  
  deleteTask = id => {
    TasksManager.delete(id).then(() => {
      TasksManager.getAll().then(newTasks => {
        this.setState({
            tasks: newTasks
        });
      });
    });
  };

  render(){
    console.log("TasksList: Render");

    return (
        <>
            <section className="section-content">
            <button type="button"
                className="btn"
                onClick={() => {this.props.history.push("/tasks/new") }}>
                Add Task
            </button>
            </section>
            <div className="container-cards">
                {this.state.tasks.map(task => 
                    <TasksCard 
                         key={task.id} 
                         task={task} 
                          deleteTask={this.deleteTask} 
                          {...this.props}
                    />
                )}
            </div>
        </>
        )
    }
  





  
}
export default TasksList;
