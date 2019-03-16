import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Header } from './src/common';
import reducers from './src/reducers';
class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Header header="Legends" />
      </Provider>
    );
  }
}

export default App;