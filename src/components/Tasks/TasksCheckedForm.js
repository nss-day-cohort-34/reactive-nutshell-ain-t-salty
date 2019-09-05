import React, { Component } from "react";
import './TasksForm.css'

class TasksCheckedForm extends Component {
  constructor(props) {
    super(props);
  this.state = {
    task: "",
    date: "",
    selectedOption: "option1"
    };
  }

    handleOptionChange = changeEvent => {
      this.setState({
        selectedOption: changeEvent.target.value
      });
    };
    
    handleFormSubmit = formSubmitEvent => {
      formSubmitEvent.preventDefault();

    }

  render() {
    return (
    
    <form>

      <div className="form-check">
        <label>
          <input
            type="radio"
            name="react-tips"
            value="option1"
            checked={false}
            className="form-check-input"
            checked={this.state.selectedOption === "option1"}
            onChange={this.handleOptionChange}
            onSubmit={this.handleFormSubmit}>
            </input>
          Task Complete
        </label>
      </div>
      <div className="form-group">
                <button className="btn btn-primary mt-2" type="submit">
                  Save Task As Complete
                </button>
              </div>
      </form>
  )}

    }

export default TasksCheckedForm;       
  
