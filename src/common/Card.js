import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  const { cardContainer } = styles;

  return(
    <View style={cardContainer}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderRadius: 2,
    borderWidth: 2,
    borderBottomWidth: 0,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  }
});

export { Card };