import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { constants } from '../constants/constants';

export const LettersGenerator = () => {
  const [letters, setLetters] = useState('')
  const [numberOfLetters, setNumberOfLetters] = useState(9)
  const [numberOfGroups, setNumberOfGroups] = useState(26)

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
        {letters
          ?
          <Text style={styles.letters}>{letters}</Text>
          :
          <Text style={styles.lettersPlaceholder}>{'Please, press the Generate button'}</Text>
        }

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
        <Pressable style={styles.genButton} onPress={onGenBtnPress} >
          <Text style={styles.genButtonText}>Generate</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
  },
  lettersView: {
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
    padding: 15,
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letters: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 32,
    flexWrap: 'wrap',
    flexShrink: 1,
    height: '10%',
    overflow: 'scroll',
    padding: 10
  },
  lettersPlaceholder: {
    color: 'gray'
  },
  settingsView: {
    flex: 1,
    flexDirection: 'columt',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'black',
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
    width: "15%",
    margin: 5,
    borderWidth: 1,
    alignItems: 'center'
  },
  genButtonView: {
    flex: 1,
    padding: 15,
    width: "100%",
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  genButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: constants.THEME_COLOR,
    borderRadius: 4,
    width: '50%'
  },
  genButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  }
})