import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({onPress, children}) => {
  const { textStyle, buttonStyle } = styles;

  return(
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 3,
    marginTop: 3
  }
});

export { Button };