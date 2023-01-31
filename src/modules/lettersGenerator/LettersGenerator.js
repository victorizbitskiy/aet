import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import { constants } from '../../constants/constants';

export const LettersGenerator = () => {
  const [letters, setLetters] = useState('')
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
    flexWrap: 'wrap',
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 32,
    height: '10%',
    // overflow: 'scroll',
    padding: 10
  },
  lettersPlaceholder: {
    color: 'gray'
  },
  settingsView: {
    flex: 1,
    // flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'black',
  },
  inputView: {
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'gray',
    width: '50%',
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: "bold",
    // margin: 5,
    paddingBottom: 5,
  },
  input: {
    // padding: 5,
    fontSize: 26,
    width: "15%",
    // margin: 5,
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