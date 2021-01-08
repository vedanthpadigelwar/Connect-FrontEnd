import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import MenuScreen from './MenuScreen';
import CardsScreen from './CardsScreen';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#FFD133',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={CardsScreen}
        options={{
          tabBarLabel: 'Cards',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-albums" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarLabel: 'Menu',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-menu" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) =>(
  <HomeStack.Navigator  screenOptions={{
    headerStyle: {
      backgroundColor: '#FFD133',
    },
    headerTintColor: '#323142',
    headerTitleStyle: {
      fontWeight: 'bold',
      
    },
  }}>
  <HomeStack.Screen name="Home" component={HomeScreen} options={{
    title:"CONNECT",
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="#FFD133" onPress={() => navigation.openDrawer()}></Icon.Button>
    )
  }}/>

  </HomeStack.Navigator>
  );

  const SearchStackScreen = ({navigation}) =>(
    <SearchStack.Navigator  screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        //alignSelf: 'center' 
      },
    }}>
      <SearchStack.Screen name="Search" component={SearchScreen} options={{title:"CONNECT",
    headerLeft: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
    )
    }}/>
    </SearchStack.Navigator>
    );

