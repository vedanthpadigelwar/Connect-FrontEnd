/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) =>(
  <HomeStack.Navigator  screenOptions={{
    headerStyle: {
      backgroundColor: '#FFD133',
    },
    headerTintColor: '#323142',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center' 
    },
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{title:"CONNECT"}}/>
  </HomeStack.Navigator>
  );

  const DetailsStackScreen = ({navigation}) =>(
    <DetailsStack.Navigator  screenOptions={{
      headerStyle: {
        backgroundColor: '#FFD133',
      },
      headerTintColor: '#323142',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center' 
      },
    }}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} options={{}}/>
    </DetailsStack.Navigator>
    );


const App = () =>{
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
