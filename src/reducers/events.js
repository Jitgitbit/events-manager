const initialState = [];

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case 'EVENTS_FETCHED': {
      return action.payload;
    }
    case 'EVENT_CREATE_SUCCESS': {
      console.log('the action is',action)
      const newArray = [...state, action.payload]
      return newArray;
    }
    default: {
      return state;
    }
  }
}