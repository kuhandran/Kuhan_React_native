

import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import MainContainer from './components/mainContainer/index.js'

export default function App(props) {
  
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <MainContainer
        />
      </View>
    );
  
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
