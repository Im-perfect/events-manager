import React from "react";

export default class EventsList extends React.Component {
  render() {
    return this.props.events ? (
      <div>
        <ul>
          {this.props.events.map(event => (
            <li key={event.id}>{event.name}</li>
          ))}
        </ul>
      </div>
    ) : (
      "Loading..."
    );
  }
}
