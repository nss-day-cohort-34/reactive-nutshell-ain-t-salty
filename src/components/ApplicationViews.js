import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import MessagesList from './Messages/MessagesList'
import MessagesDetail from './Messages/MessagesDetail'

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

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

        <Route
          exact path="/messages" render={props => {
            return <MessagesList />
          }}
        />

        <Route path="/messages/:messageId(\d+)" render={(props) => {
          // Pass the messageId to the MessagesDetail Component
          return <MessagesDetail messageId={parseInt(props.match.params.messageId)} {...props}/>
        }} />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
    );
  }
}
