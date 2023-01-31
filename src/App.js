import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LettersGenerator } from './modules/lettersGenerator/LettersGenerator';
import { CoinFlip } from './modules/coinFlip/CoinFlip';
import {constants} from './constants/constants';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Coin Flip" component={CoinFlip} options={styles.screenOptions} />
      <Drawer.Screen name="Letters Generator" component={LettersGenerator} options={styles.screenOptions} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenOptions: {
    headerStyle: {
      backgroundColor: constants.THEME_COLOR,
    },
    labelStyle: {
      fontFamily: 'SomeFont',
      color: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }
})