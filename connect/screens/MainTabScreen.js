import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import WhatsappScreen from './WhatsappScreen';
import ProfileScreen from './ProfileScreen';

import AboutYourCropScreen from './AboutYourCropScreen';
import TestingScreen from './TestingScreen';
import WeatherScreen from './WeatherScreen';
import NewsScreen from './NewsScreen';
import Market_pricesScreen from './Market_pricesScreen';
import DidYouKnowScreen from './DidYouKnowScreen';

const HomeStack = createStackNavigator();
const WhatsappStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
	<Tab.Navigator
		initialRouteName="Home"
		activeColor="#fff"
		barStyle={{ backgroundColor: '#3BBB23' }}
	>

    <Tab.Screen
      name="Whatsapp"
      component={WhatsappStackScreen}
      options={{
        tabBarLabel: 'Whatsapp',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-logo-whatsapp" color={color} size={26} />
        ),
      }}
    />
		<Tab.Screen
			name="Home"
			component={HomeStackScreen}
			options={{
				tabBarLabel: 'Home',
				tabBarIcon: ({ color }) => (
					<Icon name="ios-home" color={color} size={26} />
				)
			}}
		/>

		<Tab.Screen
			name="Profile"
			component={ProfileStackScreen}
			options={{
				tabBarLabel: 'Profile',
				tabBarIcon: ({ color }) => (
					<Icon name="md-person-circle-outline" color={color} size={26} />
				),
			}}
		/>

	</Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
	<HomeStack.Navigator screenOptions={{
		headerStyle: {
			backgroundColor: '#3BBB23',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',

		},
	}}>


		<HomeStack.Screen name="Home" component={HomeScreen} options={{
			title: "Villageagro",
			headerLeft: () => (
				<Icon.Button name="ios-menu" size={25} backgroundColor="#3BBB23" onPress={() => navigation.openDrawer()}></Icon.Button>
			),
			headerRight: () => (
				<Icon.Button name="ios-notifications" size={25} backgroundColor="#3BBB23" onPress={() => alert("coming soon!!")}></Icon.Button>
			)
		}}
		/>

		<HomeStack.Screen name="AboutYourCropScreen" component={AboutYourCropScreen} options={{
			title: "Villageagro",
			headerLeft: () => (
				<Icon.Button name="ios-menu" size={25} backgroundColor="#3BBB23" onPress={() => navigation.openDrawer()}></Icon.Button>
			),
			headerRight: () => (
				<Icon.Button name="ios-notifications" size={25} backgroundColor="#3BBB23" onPress={() => alert("coming soon!!")}></Icon.Button>
			)
		}}
		/>

		<HomeStack.Screen name="WeatherScreen" component={WeatherScreen} options={{
			title: "Villageagro",
			headerLeft: () => (
				<Icon.Button name="ios-menu" size={25} backgroundColor="#3BBB23" onPress={() => navigation.openDrawer()}></Icon.Button>
			),
			headerRight: () => (
				<Icon.Button name="ios-notifications" size={25} backgroundColor="#3BBB23" onPress={() => alert("coming soon!!")}></Icon.Button>
			)
		}}
		/>

		<HomeStack.Screen name="NewsScreen" component={NewsScreen} options={{
			title: "Villageagro",
			headerLeft: () => (
				<Icon.Button name="ios-menu" size={25} backgroundColor="#3BBB23" onPress={() => navigation.openDrawer()}></Icon.Button>
			),
			headerRight: () => (
				<Icon.Button name="ios-notifications" size={25} backgroundColor="#3BBB23" onPress={() => alert("coming soon!!")}></Icon.Button>
			)
		}}
		/>

		<HomeStack.Screen name="TestingScreen" component={TestingScreen} options={{
			title: "Villageagro",
			headerLeft: () => (
				<Icon.Button name="ios-menu" size={25} backgroundColor="#3BBB23" onPress={() => navigation.openDrawer()}></Icon.Button>
			),
			headerRight: () => (
				<Icon.Button name="ios-notifications" size={25} backgroundColor="#3BBB23" onPress={() => alert("coming soon!!")}></Icon.Button>
			)
		}}
		/>

		<HomeStack.Screen name="Market_pricesScreen" component={Market_pricesScreen} options={{
			title: "Villageagro",
			headerLeft: () => (
				<Icon.Button name="ios-menu" size={25} backgroundColor="#3BBB23" onPress={() => navigation.openDrawer()}></Icon.Button>
			),
			headerRight: () => (
				<Icon.Button name="ios-notifications" size={25} backgroundColor="#3BBB23" onPress={() => alert("coming soon!!")}></Icon.Button>
			)
		}}
		/>

		<HomeStack.Screen name="DidYouKnowScreen" component={DidYouKnowScreen} options={{
			title: "Villageagro",
			headerLeft: () => (
				<Icon.Button name="ios-menu" size={25} backgroundColor="#3BBB23" onPress={() => navigation.openDrawer()}></Icon.Button>
			),
			headerRight: () => (
				<Icon.Button name="ios-notifications" size={25} backgroundColor="#3BBB23" onPress={() => alert("coming soon!!")}></Icon.Button>
			)
		}}
		/>

	</HomeStack.Navigator>
);

const  WhatsappStackScreen = ({ navigation }) => (
	<WhatsappStack.Navigator screenOptions={{
		headerStyle: {
			backgroundColor: '#3BBB23',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
			//alignSelf: 'center' 
		},
	}}>
		<WhatsappStack.Screen name="WhatsappScreen" component={WhatsappScreen} options={{
			title: "Villageagro",
			headerLeft: () => (
				<Icon.Button name="ios-menu" size={25} backgroundColor="#3BBB23" onPress={() => navigation.openDrawer()}></Icon.Button>
			),
      headerRight: () => (
				<Icon.Button name="ios-notifications" size={25} backgroundColor="#3BBB23" onPress={() => alert("coming soon!!")}></Icon.Button>
			)
		}} />
	</WhatsappStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
	<ProfileStack.Navigator screenOptions={{
		headerStyle: {
			backgroundColor: '#3BBB23',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
			//alignSelf: 'center' 
		},
	}}>
		<ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{
			title: "Villageagro",
			headerLeft: () => (
				<Icon.Button name="ios-menu" size={25} backgroundColor="#3BBB23" onPress={() => navigation.openDrawer()}></Icon.Button>
			),
      headerRight: () => (
				<Icon.Button name="ios-notifications" size={25} backgroundColor="#3BBB23" onPress={() => alert("coming soon!!")}></Icon.Button>
			)
		}} />
	</ProfileStack.Navigator>
);
