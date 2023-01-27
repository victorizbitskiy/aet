import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput} from 'react-native';
import { constants } from '../constants/constants';

export const LettersGenerator = () => {
  const [letters, setLetters] = useState(' ')
  const [numberOfLetters, setNumberOfLetters] = useState(9)
  const [numberOfGroups, setNumberOfGroups] = useState(1)

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
      <View style={styles.genButtonView}>
        <Button
          onPress={onGenBtnPress}
          title="Generate"
          color={constants.THEME_COLOR}
        />
      </View>
      <View style={styles.settingsView}>
        <View>
          <Text style={styles.inputTitel}>Number of letters</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNumberOfLetters}
            value={numberOfLetters}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={styles.inputTitel}>Number of groups</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNumberOfGroups}
            value={numberOfGroups}
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  lettersView: {
    padding: 15,
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letters: {
    fontSize: 32,
    // flex: 1,
    alignContent: 'space-around'
  },
  genButtonView: {
    padding: 15,
    width: "50%",
    margin: 10,
  },
  inputTitel: {
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
  },
  settingsView: {
    flex: 1,
    flexDirection: 'columt',
    justifyContent: 'flex-start'
  },

})