import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View, Image } from 'react-native';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import { Card, CardSection } from './common';
import * as actions from '../actions';
class ListItem extends Component {

  renderDescription = () => {
    const { imageStyle, descriptionStyle } = styles;

    if(this.props.id === this.props.selectedLibraryId) {
      return(
        <CardSection>
          <View style={imageStyle}>
            <Image 
              style={{height: 50, width: 50}} 
              source={require('./hulk.png')} 
            />
          </View>
          <Animatable.Text animation='lightSpeedIn' style={descriptionStyle}>
            {this.props.description}
          </Animatable.Text>
        </CardSection>
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
  },
  imageStyle: {
    padding: 10
  },
  descriptionStyle: {
    flex: 1,
    fontSize: 16
  }
});

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
}

export default connect(mapStateToProps, actions)(ListItem);