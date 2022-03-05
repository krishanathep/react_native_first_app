import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';


import HomeScreen from './screens/Home'
import DetailsScreen from './screens/Details'
import SettingsScreen from './screens/Settings';
import AddScreen from './screens/AddScreen'

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={{fontSize: 30}}>Home Screen</Text>
//       <Button title='Go to Details' onPress={() => navigation.navigate('Details')} />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={{fontSize: 30}}>Details Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="AddScreen" component={AddScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#6495ED',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => <Icon name="home" color={color} />,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              // headerTitleStyle: {
              //   color: 'white',
              // },
              // headerStyle: {
              //   backgroundColor: '#6495ED',
              // },
              tabBarIcon: ({color}) => <Icon name="settings" color={color} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
