import React, { Component } from 'react'

export default class EventForm extends Component {
  render() {
    return (
      <div>
        <p>
          New event:
          <input
            value={this.props.name}
            onChange={event => {
              this.props.onChange(event);
            }}
          />
          {/* <button onClick={this.handleAddClick}>Add</button> */}
        </p>
      </div>
    )
  }
}
