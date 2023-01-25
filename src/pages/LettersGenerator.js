import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const LettersGenerator = () => {
  const [letters, setLetters] = useState(' ')

  const getOptions = () => {
    const russian = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
    const english = 'abcdefghijklmnopqrstuvwxyz'
    const language = 'en' //$('input[name=language]:checked').val()
    const letterCount = 9 //parseInt($('#letterCount').val())
    const groupsCount = 1 //parseInt($('#groupsCount').val())

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
      <View style={styles.viewLetters}>
        <Text style={styles.letters}>{letters}</Text>
      </View>
      <View style={styles.viewGenButton}>
        <Button
          onPress={onGenBtnPress}
          title="Генерировать"
          color="#841584"
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
  },
  viewLetters: {
    padding: 15,
    // borderWidth: 1,
    // borderColor: 'black', 
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letters: {
    fontSize: 32
  },
  viewGenButton: {
    padding: 15,
  },
})