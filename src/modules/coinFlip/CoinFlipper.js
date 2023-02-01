import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { constants } from '../../constants/constants';

export const CoinFlipper = () => {
  const [contentURI, setContentURI] = useState('')
  const [eventType, setEventType] = useState('init')

  const gifs = require('./gifs/gifs.json')
  const coins = require('./coins/coins.json')
  const randomGifId = Math.floor(Math.random() * gifs.content.length)
  const randomGifURI = require(`./gifs/gifs/${gifs.content[randomGifId].filename}`)
  const randomGifTime = gifs.content[randomGifId].time

  function flipCoin(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 2)
        const side = randomNumber === 0 ? 'head' : "tail"
        const coinURI = require(`./coins/ruble/${coins.ruble[side]}`)
        setContentURI(coinURI)
        setEventType('coin')
        resolve("result");
      }, time)
    })
  }

  function getContainer(eventType, contentURI) {
    if (eventType === 'init') {
      return <Text style={styles.lettersPlaceholder}>{'Please, press the button'}</Text>
    }
    if (eventType === 'gif') {
      return <Image style={{ width: 300, height: 200 }} source={{ uri: contentURI }} />
    }
    if (eventType === 'coin') {
      return <Image style={{ width: 150, height: 150 }} source={{ uri: contentURI }} />
    }
  }

  const onFlipBtnPress = () => {
    setEventType('gif')
    setContentURI(randomGifURI)
    flipCoin(randomGifTime)
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.container}>
        {getContainer(eventType, contentURI)}
      </View>
      <View style={styles.flipButtonView}>
        <Pressable style={styles.flipButton} onPress={onFlipBtnPress} disabled={eventType === 'gif' ? true : false}>
          <Text style={styles.flipButtonText}>Flip a coin</Text>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lettersPlaceholder: {
    color: 'gray',
  },
  flipButtonView: {
    flex: 1,
    padding: 15,
    width: "100%",
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: constants.THEME_COLOR,
    borderRadius: 4,
    width: '50%'
  },
  flipButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  }
});
