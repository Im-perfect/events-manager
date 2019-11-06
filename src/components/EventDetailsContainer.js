import React from "react";
import { connect } from "react-redux";
import EventDetails from "./EventDetails";
import { loadEvents, loadEvent, updateEvent, deleteEvent } from "../actions/events";
import EventForm from "./EventForm";

class EventDetailsContainer extends React.Component {
  state = {
    editMode: false
  };

  componentDidMount() {
    this.props.loadEvents()
    this.props.loadEvent(Number(this.props.match.params.id));
  }

  onDelete = () => {
    this.props.deleteEvent(this.props.event.id);
    this.props.history.push("/");
  };

  editHandler = () => {
    this.setState({
      editMode: !this.state.editMode,
      value: {
        name: this.props.event.name,
        date: this.props.event.date,
        description: this.props.event.description
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.updateEvent(this.props.event.id, this.state.value);
    this.setState({
      value: {
        name: "",
        date: "",
        description: ""
      }
    });
  };

  onChange = event => {
    this.setState({
      value: {
          ...this.state.value,
        [event.target.name]: event.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <EventDetails event={this.props.event} onDelete={this.onDelete} />
        <button onClick={this.editHandler}>Edit</button>
        {this.state.editMode ? (
          <EventForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state.value}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event
});

export default connect(
  mapStateToProps,
  { loadEvents,loadEvent, updateEvent, deleteEvent }
)(EventDetailsContainer);
