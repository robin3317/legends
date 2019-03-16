import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import { Text } from 'react-native';

import ListItem from './ListItem';

class LibraryList extends Component {

  render() {
    let superHeroes = [];
    this.props.libraries.map(individual => {
      superHeroes.push({key: individual.title})
    });
    return(
      <FlatList
        data={superHeroes}
        renderItem={({item}) => <ListItem title={item.key} />}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);