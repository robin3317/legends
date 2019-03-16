import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import { Text } from 'react-native';

import ListItem from './ListItem';

class LibraryList extends Component {

  render() {
    return(
      <FlatList
        data={this.props.libraries}
        renderItem={({item}) => <ListItem title={item.key} id={item.id} description={item.description} />}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);