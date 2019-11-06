import React from "react";

export default class EventsForm extends React.Component {
  state = {
    name: "",
    date: "",
    description: ""
  };

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Name: <input type="text" name='name' onChange={this.props.onChange} value={this.props.values.name} />
        </label>
        <label>
          Date: <input type="text" name='date' onChange={this.props.onChange} value={this.props.values.date} />
        </label>
        <label>
          Description: <input type="text" name='description' onChange={this.props.onChange} value={this.props.values.description} />
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}
