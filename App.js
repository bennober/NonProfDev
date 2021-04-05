import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text h1 style={styles.h1_text}>NonProvDev</Text>
      <Text h3 style={styles.h3_text}>A simple, intuitive platform to connect non-profit organizations with passionate web developers</Text>
      <Text h3 style={styles.h3_text}>Created by the CS 394 Red Team</Text>
      <Text h4 style={styles.h4_text}>Benjamin Nober, Chris Song, Jacob Wat, Linus Okoth, Mason Brachmann, Tiger Nie, Zaddeen Benaissa</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1_text: {
    fontSize: 48,
    marginBottom: 25,
  },
  h3_text: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  h4_text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },

});
