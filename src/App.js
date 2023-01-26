import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LettersGenerator } from './pages/LettersGenerator';
import {constants} from './constants/constants';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      {/* <Drawer.Screen name="Feed" component={Feed} options={styles.screenOptions} /> */}
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
    // title: 'My home',
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