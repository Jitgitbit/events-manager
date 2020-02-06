const initialState = [];

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case 'EVENTS_FETCHED': {
      return action.payload;
    }
    case 'EVENT_CREATE_SUCCESS': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}