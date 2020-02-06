import React from 'react'

export default function EventForm(props) {
  
    return (
      <div>
        <form onSubmit={event => props.onSubmit(event)}>
        <label>
          New event: Name
          <input
            type='text'
            name='name'
            value={props.values.name}
            onChange={event => {
              props.onChange(event);
            }}
          />
        </label>
        <label>
          Date
          <input
            type='date'
            name='date'
            value={props.values.name}
            onChange={event => {
              props.onChange(event);
            }}
          />
        </label>
        <label>
          Description
          <input
            type='textarea'
            name='description'
            value={props.values.description}
            onChange={event => {
              props.onChange(event);
            }}
          />
        </label>
                  <button type='submit'>Add Event</button>
        </form>
      </div>
    )
  
}
