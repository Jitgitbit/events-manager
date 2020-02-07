import React from 'react'
import {connect} from 'react-redux'
import { createEvent } from '../actions/events'
import EventForm from './EventForm'
import {Link} from 'react-router-dom'


class CreateEventFormContainer extends React.Component {
  state = {
    name: '',
    date: '',
    description: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      name: '',
      date: '',
      description: ''
    })
    
    this.props.createEvent(this.state)
    this.props.history.push('/')
  }

  render() {
    return (
    <div>
    <EventForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
    <button><Link to={'/'}>Back to the list</Link></button>
    </div>
    )
  }
}

export default connect(null, {createEvent})(CreateEventFormContainer)