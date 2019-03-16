import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  render() {
    const { titleStyle } = styles;

    console.log(this.props);

    return(
      <TouchableWithoutFeedback>
        <View>
          <CardSection>
            <Text style={titleStyle}>{this.props.title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft: 8
  }
});

export default connect(null, actions)(ListItem);