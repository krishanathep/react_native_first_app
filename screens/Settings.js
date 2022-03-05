import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Settings Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  font: {
    fontSize: 30
  },
});

export default Settings;
