import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { constants } from '../constants/constants';

export const LettersGenerator = () => {
  const [letters, setLetters] = useState(' ')
  const [numberOfLetters, setNumberOfLetters] = useState(9)
  const [numberOfGroups, setNumberOfGroups] = useState(5)

  const getOptions = () => {
    const russian = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
    const english = 'abcdefghijklmnopqrstuvwxyz'
    const language = 'en' //$('input[name=language]:checked').val()
    const letterCount = numberOfLetters //parseInt($('#letterCount').val())
    const groupsCount = numberOfGroups //parseInt($('#groupsCount').val())

    if (isNaN(letterCount)) {
      letterCount = 1;
    }

    if (isNaN(groupsCount)) {
      groupsCount = 1;
    }

    return {
      alphabet: language === 'ru' ? russian : english,
      letterCount: letterCount,
      groupsCount: groupsCount
    }
  }

  const onGenBtnPress = () => {
    const options = getOptions()
    const result = []
    let groupsCount = options.groupsCount

    while (groupsCount > 0) {
      let letterCount = options.letterCount
      const group = []
      while (letterCount > 0) {
        const random = Math.floor(Math.random() * options.alphabet.length)
        group.push(options.alphabet[random])
        letterCount--
      }
      result.push(group.join(''))
      groupsCount--
    }

    setLetters(result.join('\n').toUpperCase())
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.lettersView}>
        <Text style={styles.letters}>{letters}</Text>
      </View>
      <View style={styles.settingsView}>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Number of letters</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNumberOfLetters}
            value={numberOfLetters}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Number of groups</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNumberOfGroups}
            value={numberOfGroups}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.genButtonView}>
        <Button
          onPress={onGenBtnPress}
          title="Generate"
          color={constants.THEME_COLOR}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  lettersView: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 15,
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  letters: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 32,
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  genButtonView: {
    padding: 15,
    width: "50%",
    margin: 10,
    justifyContent: 'center',
  },
  inputView: {
    alignItems: 'center'
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 5,
  },
  input: {
    selectionColor: constants.THEME_COLOR,
    padding: 5,
    fontSize: 26,
    width: "50%",
    margin: 5,
    borderWidth: 1,
    alignItems: 'center'
  },
  settingsView: {
    flex: 1,
    flexDirection: 'columt',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
})