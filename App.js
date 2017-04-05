import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FootList from './src/components/Footer/FootList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FootList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
