import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Input, Button, Card} from 'react-native-elements';

function AddScreen() {
  return (
    <View style={styles.container}>
      <Card>
        <Input placeholder="Enter Title" />
        <Input placeholder="Enter Detail" />
        <Input placeholder="Enter Image" />
        <Button  title='SUBMIT' />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  font: {
    fontSize: 30,
  },
});

export default AddScreen;
