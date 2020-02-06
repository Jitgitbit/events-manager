const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'events/EVENTS_FETCHED': {
      return action.events;
    }
    
    default: {
      return state;
    }
  }
}