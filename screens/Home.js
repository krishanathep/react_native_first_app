import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Button, Card, Icon} from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';
import FAB from 'react-native-fab';

function HomeScreen({navigation}) {
  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      await fetch('https://www.mecallapi.com/api/attractions')
        .then(res => res.json())
        .then(res => setAttractions(res));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    alert(error);
  }

  if (loading === true) {
    return (
      <View style={styles.container}>
        <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
      </View>
    );
  }

  return (
    <>
      <ScrollView>
        {attractions.map(item => (
          <View key={item.id} style={styles.container}>
            <Card>
              <Card.Title>{item.name}</Card.Title>
              <Card.Divider />
              <Card.Image
                style={{padding: 0}}
                source={{
                  uri: item.coverimage,
                }}
              />
              <Text style={{marginBottom: 10, marginTop: 10}} numberOfLines={2}>
                {item.detail}
              </Text>
              <Button
                onPress={() =>
                  navigation.navigate('Details', {
                    id: item.id,
                  })
                }
                icon={
                  <Icon
                    type="antdesign"
                    name="eyeo"
                    color="#ffffff"
                    iconStyle={{marginRight: 10}}
                  />
                }
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="VIEW NOW"
              />
            </Card>
          </View>
        ))}
      </ScrollView>
      <FAB
        buttonColor="#2B70EC"
        onClickAction={() => {
          navigation.navigate('AddScreen')
        }}
        visible={true}
        iconTextComponent={<Icon type="entypo" name="plus" color="white" />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default HomeScreen;
