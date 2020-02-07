import React from 'react'
import {connect} from 'react-redux'
import {createEvent} from '../actions/events'
import EventForm from './EventForm'

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
    event.preventDefault(event)
    this.props.createEvent(this.state)
    this.setState({
      name: '',
      date: '',
      description: ''
    })
  }
  render() {
    console.log('the events',this.props)
    return (<EventForm
      name={this.state.name}
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}
const mapStateToProps = state => ({
  events: state.eventsReducer
})

export default connect(mapStateToProps, {createEvent})(CreateEventFormContainer)