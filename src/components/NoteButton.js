import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NoteButton = ({ color, title, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.viewStyle} backgroundColor={color}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginBottom: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  }
});

export default NoteButton;
