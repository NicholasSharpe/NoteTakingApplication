import React, { useState } from 'react';
import {
  Alert,
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  TouchableOpacity } from 'react-native';
import Note from '../components/Note';
import NoteButton from '../components/NoteButton';

const HomeScreen = () => {

  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [id, setID] = useState(0);

  const addItem = (color) => {
    console.log(color);
    if(title == '' || note == '') {
      Alert.alert(
         'Please enter a valid title and note...'
      );
      return;
    }
    else {
      setID(id + 1);
      setNotes([{title: `${title}`, text: `${note}`, id: `${id}`, color: `${color}`}, ...notes]);
      setTitle('');
      setNote('');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.containerStyle} behavior="padding" enabled keyboardVerticalOffset='100'>
      <FlatList
        keyExtractor={notes => notes.id}
        data={notes}
        renderItem={({item}) => {
          return <Note title={item.title} text={item.text} color={item.color} />
        }}
      />
      <TextInput
        placeholder="Enter Title"
        style={styles.titleInput}
        value={title}
        onChangeText={(newValue) => setTitle(newValue)}
      />
      <TextInput
        placeholder="Enter Note..."
        multiline = {true}
        style={styles.noteInput}
        value={note}
        onChangeText={(newValue) => setNote(newValue)}
      />
      <View style={styles.colorView}>
        <NoteButton title="Add Note" color="rgb(255, 255, 102)" onPress={addItem.bind(this, "rgb(255, 255, 102)")} />
        <NoteButton title="Add Note" color="rgb(255, 102, 102)" onPress={addItem.bind(this, "rgb(255, 102, 102)")} />
        <NoteButton title="Add Note" color="rgb(153, 204, 255)" onPress={addItem.bind(this, "rgb(153, 204, 255)")} />
        <NoteButton title="Add Note" color="rgb(102, 255, 153)" onPress={addItem.bind(this, "rgb(102, 255, 153)")} />
      </View>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  containerStyle: {
    flex: 1
  },
  titleInput: {
    margin: 5,
    padding: 5,
    borderColor: 'rgb(217, 217, 217)',
    borderBottomWidth: 1,
  },
  noteInput: {
    margin: 5,
    padding: 5,
    borderColor: 'rgb(217, 217, 217)',
    borderWidth: 1,
  },
  colorView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default HomeScreen;
