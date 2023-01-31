import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export const CoinFlip = () => {
  const [result, setResult] = useState('')

  const gifs = require('./gifs/gifs.json')
  const coins = require('./coins/coins.json')
  const randomElementId = Math.floor(Math.random() * gifs.content.length)
  const randomElementURI = require(`./gifs/gifs/${gifs.content[randomElementId].filename}`)
  const randomElementTime = gifs.content[randomElementId].time

  console.log(randomElementTime);

  function timeout(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 2)
        const side = randomNumber === 0 ? 'head' : "tail"  
        setResult(require(`./coins/ruble/${coins.ruble[side]}`))
        resolve("result");
      }, time)
    })
  }

  timeout(randomElementTime)

  return (
    <View style={styles.container}>
      {result
        ? <Image
          style={{ width: 150, height: 150 }}
          source={{ uri: result }}
        />
        : <Image
          style={{ width: 300, height: 200 }}
          source={{ uri: randomElementURI }}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
