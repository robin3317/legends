import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = props => {
  const { cardSection } = styles;

  return(
    <View style={cardSection}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  cardSection: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    position: 'relative'
  }
});

export { CardSection };