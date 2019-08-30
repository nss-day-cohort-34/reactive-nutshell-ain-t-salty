import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from "react";
import MessagesList from './Messages/MessagesList'
import MessagesDetail from './Messages/MessagesDetail'
import MessagesForm from './Messages/MessagesForm'
import MessagesEditForm from './Messages/MessagesEditForm'
import Login from './Authentication/Login'
import Welcome from "./Authentication/Welcome";
import Registration from "./Authentication/Registration";

export default class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>

        <Route exact path="/" component={Welcome} />

        {/* <Route exact path="/Welcome" render={(props) => {
          return <Welcome />
        }} /> */}

        <Route path="/Registration" component={Registration} />

        <Route path="/Login" component={Login} />

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

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

        <Route
          path="/news" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
    );
  }
}
