import React from 'react'
import EventForm from './EventForm'
import {Link} from 'react-router-dom'


export default (props) => {
    const { event, toggleEdit, editMode } = props
    if(!event.name) return <h1>Loading</h1>

    if(editMode) {
        return (
            <>
                <EventForm
                    name={event.name}
                    date={event.date}
                    description={event.description}
                    onChange={props.onChange}
                    onSubmit={props.onSubmit}
                />
                <button onClick={toggleEdit}>Edit</button>
            </>
        )
    }

    return (
        <div>
            <h1>{event.name}</h1>
            <i>{event.date}</i>
            <p>{event.description}</p>
            <button onClick={props.delete}>Delete this event</button>
            <button onClick={toggleEdit}>Edit</button>
            <br></br>
            <button><Link to={'/'}>Back to the list</Link></button>
        </div>
    )
}
