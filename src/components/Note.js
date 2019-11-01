import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const Note = (props) => {
  return (
    <View style={styles.cardStyle}>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <Text style={styles.textStyle}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    margin: 10,
  },
  textStyle: {
    fontSize: 15,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  cardStyle: {
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: 'rgb(102, 204, 255)',
    borderRadius: 10
  }
});

export default Note;
