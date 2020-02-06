import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class EventsList extends Component {
  render() {
    console.log( 'the events list' ,this.props.events)
    return (
      <div>
        <h1>Events List</h1>
        <ul>
          {this.props.events.map((event, index) => (
            <Link to='' key={index}>
              <li>{event.description}</li>
            </Link>
          ))}
        </ul>
      </div>
    )
  }
}
