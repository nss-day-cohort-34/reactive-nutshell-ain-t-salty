import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from "react";
import MessagesList from './Messages/MessagesList'
import MessagesDetail from './Messages/MessagesDetail'
import MessagesForm from './Messages/MessagesForm'
import MessagesEditForm from './Messages/MessagesEditForm'
import Login from './Authentication/Login'
import Welcome from "./Authentication/Welcome";
import Registration from "./Authentication/Registration";
import NewsList from "./News/NewsList";
import NewsForm from "./News/NewsForm"
import NewsEditForm from "./News/NewsEditForm"
import TasksList from "./Tasks/TasksList"
import TasksDetail from "./Tasks/TasksDetail"
import TasksForm from "./Tasks/TasksForm"
import TasksEditForm from "./Tasks/TasksEditForm"
import TasksCheckedForm from "./Tasks/TasksCheckedForm"
import EventsList from './Events/EventsList'
import EventsForm from './Events/EventsForm'
import EventsEditForm from './Events/EventsEditForm'

export default class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Welcome} />
        <Route path="/Registration" component={Registration} />
        <Route path="/Login" component={Login} />
        <Route exact path="/events" render={props => {
          if (this.isAuthenticated()) {
            return <EventsList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/events/:eventId(\d+)/edit" render={props => {
          return <EventsEditForm {...props} />
        }}
        />
        <Route path="/events/new" render={(props) => {
          return <EventsForm {...props} />
        }} />
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
        <Route path="/messages/:messageId(\d+)/edit" render={props => {
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
          return <TasksDetail taskId={parseInt(props.match.params.taskId)} {...props} />
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
          exact path="/tasks/:taskId(\d+)/checked" render={props => {
            return <TasksCheckedForm {...props} />
          }}
        />
        <Route exact path="/news" render={props => {
          if (this.isAuthenticated()) {
            return <NewsList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route
          path="/news/:articleId(\d+)/edit" render={props => {
            return <NewsEditForm {...props} />
          }}
        />
        <Route path="/news/new" render={(props) => {
          return <NewsForm {...props} />
        }} />
      </React.Fragment>
    );
  }
}














