import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Linking} from 'react-native';
import {Text, Button, Card, Icon} from 'react-native-elements';

function DetailsScreen({route, navigation}) {
  const {id} = route.params;
  const [attraction, setAttraction] = useState('');
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      await fetch('https://www.mecallapi.com/api/en/attractions/' + id)
        .then(res => res.json())
        .then(res => setAttraction(res.attraction));
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    alert(error);
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>{attraction.name}</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{padding: 0}}
          source={{
            uri: attraction.coverimage,
          }}
        />
        <Text style={{marginBottom: 10, marginTop: 10}}>
          {attraction.detail}
        </Text>
        <Button
          onPress={() =>
            Linking.openURL(
              'https://www.google.com/maps/search/?api=1&query=' +
                attraction.latitude +
                '%2C' +
                attraction.longitude,
            )
          }
          icon={
            <Icon
              type="feather"
              name="map-pin"
              color="#ffffff"
              iconStyle={{marginRight: 10}}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 5,
          }}
          title="Go to Map"
        />
        <Button
          onPress={() => navigation.goBack()}
          icon={
            <Icon
              type="antdesign"
              name="home"
              color="#ffffff"
              iconStyle={{marginRight: 10}}
            />
          }
          buttonStyle={{
            backgroundColor: 'red',
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Go to Home"
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetailsScreen;
