import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import { CardSection } from './common';

class ListItem extends Component {
  render() {
    return(
      <CardSection>
        <Text>{this.props.title}</Text>
      </CardSection>
    );
  }
}

export default ListItem;