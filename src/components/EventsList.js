import React from "react";
import { Link } from "react-router-dom";

export default class EventsList extends React.Component {
  render() {
    return this.props.events ? (
      <div>
        <ul>
          {this.props.events.map(event => (
            <Link to={`/event/${event.id}`}>
              <li key={event.id}>{event.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    ) : (
      "Loading..."
    );
  }
}
