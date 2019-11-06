import React from "react";

export default class EventDetails extends React.Component {
  render() {
    return this.props.event ? (
      <div>
        <h1>{this.props.event.name}</h1>
        <p><strong>{this.props.event.date}</strong></p>
        <p>{this.props.event.description}</p>
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    ) : (
      "Loading..."
    );
  }
}