import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from "react";
import MessagesList from './Messages/MessagesList'
import MessagesDetail from './Messages/MessagesDetail'
import MessagesForm from './Messages/MessagesForm'
import MessagesEditForm from './Messages/MessagesEditForm'
import Login from './Authentication/Login'
import Welcome from "./Authentication/Welcome";
import Registration from "./Authentication/Registration";
import TasksList from "./Tasks/TasksList";
import TasksDetail from './Tasks/TasksDetail'
import TasksForm from './Tasks/TasksForm'
import TasksEditForm from './Tasks/TasksEditForm'
import TasksCheckedForm from "./Tasks/TasksCheckedForm";

export default class ApplicationViews extends Component {

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  render() {
    return (
      <>

        <Route exact path="/" component={Welcome} />

        {/* <Route exact path="/Welcome" render={(props) => {
          return <Welcome />
        }} /> */}

        <Route exact path="/Registration" component={Registration} />

        <Route exact path="/Login" component={Login} />

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route exact path="/messages" render={props => {
          if (this.isAuthenticated()) {
            return <MessagesList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/messages/:messageId(\d+)" render={(props) => {
          // Pass the messageId to the MessagesDetail Component
          return <MessagesDetail messageId={parseInt(props.match.params.messageId)} {...props} />
        }} />

        <Route path="/messages/new" render={(props) => {
          return <MessagesForm {...props} />
        }} />

        <Route
          path="/messages/:messageId(\d+)/edit" render={props => {
            return <MessagesEditForm {...props} />
          }}
        />

        <Route exact path="/tasks" render={props => {
            if (this.isAuthenticated()) {
              return <TasksList {...props} />
            } else {
              return <Redirect to="/login" />
            }
          }}
        />

        <Route exact path="/tasks/:taskId(\d+)" render={props => {
          // Pass the taskId to the TasksDetail Component
          return <TasksDetail taskId={parseInt(props.match.params.taskId)} {...props}/>
        }} />

         {/* Our shiny new route. */}
        <Route path="/tasks/new" render={(props) => {
          return <TasksForm {...props} />
        }} />

        <Route
          exact path="/tasks/:taskId(\d+)/edit" render={props => {
            return <TasksEditForm {...props} />
          }}
        />

        <Route
          path="/tasks/:taskId(\d+)/checked" render={props => {
            return <TasksCheckedForm {...props} />
          }}
        />

        {/*
          This is a new route to handle a URL with the following pattern:
          http://localhost:3000/tasks/1
          
          It will not handle the following URL because the `(\d+)`
          matches only numbers after the final slash in the URL
          http://localhost:3000/tasks/jack
        */}

        <Route
          path="/news" render={props => {
            return null
            // Remove null and return the component which will show the user's news
          }}
        />


      </>
    );
}}
