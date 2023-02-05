import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { constants } from '../../constants/constants';
import { GIFS, COINS } from './constants';

export const CoinFlipper = () => {
  const [contentURI, setContentURI] = useState('')
  const [eventType, setEventType] = useState('init')

  const randomGifId = Math.floor(Math.random() * GIFS.content.length)
  const randomGifURI = GIFS.content[randomGifId].uri
  const randomGifTime = GIFS.content[randomGifId].time

  function flipCoin(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 2)
        const coinURI = randomNumber === 0 ? COINS.ruble.head : COINS.ruble.tail
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
      return <Image style={{ width: 250, height: 250 }} source={contentURI } />
    }
    if (eventType === 'coin') {
        return <Image style={{ width: 200, height: 200 }} source={ contentURI } />
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
          <Text style={styles.flipButtonText}>{'Flip a coin'}</Text>
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
