import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Header } from './src/components/common';
import LibraryList from './src/components/LibraryList';
import reducers from './src/reducers';
class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1}}>
          <Header header="Legends" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default App;