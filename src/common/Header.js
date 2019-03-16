import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = props => {
  const { viewStyle, textStyle } = styles;
  return(
    <View style={viewStyle}>
      <Text style={textStyle}>{props.header}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    elevation: 2,
    height: 50,
    justifyContent: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    position: 'relative',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 20},
    shadowOpacity: 0.2, 
  },
  textStyle: {
    fontSize: 20,
    fontWeight: '700'
  }
});

export { Header };