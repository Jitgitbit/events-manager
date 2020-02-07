import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import EventsListContainer from './components/EventsListContainer'
import CreateEventFormContainer from './components/CreateEventFormContainer'
import Home from './components/Home';
import EventDetailsContainer from './components/EventDetailsContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/event/:id" component={EventDetailsContainer} />
          <EventsListContainer/>
          <CreateEventFormContainer/>
        </div>
      </Provider>
    );
  }
}
export default App