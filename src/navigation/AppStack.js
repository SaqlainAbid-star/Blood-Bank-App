import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import AddDonorScreen from '../screens/AddDonor';
import AddRequestScreen from '../screens/AddRequest';
import DonorScreen from '../screens/Donors';
import RequestsScreen from '../screens/Requests';
import BanksScreen from '../screens/Banks';
import Icon from 'react-native-vector-icons/Ionicons';
import CompatibiltyScreen from '../screens/Compatibilty';


const Stack = createStackNavigator();

const AppStack = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#fa1616',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name='Home' component={HomeScreen}
        options={{
          title: 'Blood Bank Application',
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#fa1616" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }}
      />
      <Stack.Screen name='AddDonor' component={AddDonorScreen}
        options={{
          title: 'Add Blood Donors',
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#fa1616" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }}
      />
      <Stack.Screen name='AddRequest' component={AddRequestScreen}
        options={{
          title: 'Add Blood Requests',
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#fa1616" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }}
      />
      <Stack.Screen name='Donors' component={DonorScreen}
       options={{ header: () => null }}
      />
      <Stack.Screen name='Requests' component={RequestsScreen}
      options={{ header: () => null }}
      />
      <Stack.Screen name='Banks' component={BanksScreen}
        options={{
          title: 'Blood Banks',
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#fa1616" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }}
      />

      <Stack.Screen name='Blood Compatibility' component={CompatibiltyScreen}
       options={{
        title: 'Blood Compatibility',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#fa1616" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}
      />
    </Stack.Navigator>
  );
}

export default AppStack;