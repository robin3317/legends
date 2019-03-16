import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  renderDescription = () => {
    if(this.props.id === this.props.selectedLibraryId) {
      return(
        <Text>{this.props.description}</Text>
      );
    }
  }

  render() {
    const { titleStyle } = styles;

    return(
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{this.props.title}</Text>
          </CardSection>
          {this.renderDescription()}
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

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
}

export default connect(mapStateToProps, actions)(ListItem);