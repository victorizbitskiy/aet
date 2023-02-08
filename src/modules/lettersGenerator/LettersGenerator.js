import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import { constants } from '../../constants/constants';

export const LettersGenerator = () => {
  const [letters, setLetters] = useState('')
  const [numberOfLetters, setNumberOfLetters] = useState(9)
  const [numberOfGroups, setNumberOfGroups] = useState(1)

  const getOptions = () => {
    const english = 'abcdefghijklmnopqrstuvwxyz'
    const language = 'en'
    const letterCount = numberOfLetters
    const groupsCount = numberOfGroups

    if (isNaN(letterCount)) {
      letterCount = 1;
    }

    if (isNaN(groupsCount)) {
      groupsCount = 1;
    }

    return {
      alphabet: english,
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
          <ScrollView contentContainerStyle={{ alignItems: 'center'}} style={{width: '100%'}} >
            <View>
              <Text style={styles.letters}>{letters}</Text>
            </View>
          </ScrollView>
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
    padding: 15,
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letters: {
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 32,
    padding: 10
  },
  lettersPlaceholder: {
    color: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  settingsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    alignItems: 'center',
    width: '50%',
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  input: {
    fontSize: 26,
    width: "15%",
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center'
  },
  genButtonView: {
    flex: 1,
    padding: 15,
    width: "100%",
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
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