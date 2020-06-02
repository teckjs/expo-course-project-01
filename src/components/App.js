import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { icon } from '../assets';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.logo} />
      <Text style={styles.title}>TeckJS First Project</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E9EBF1',
  },
  logo: {
    width: 170,
    height: 170,
    borderRadius: 20,
    resizeMode: 'cover',
    borderColor: '#aaa',
    borderWidth: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#555',
    marginVertical: 60,
  },
});
