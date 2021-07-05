import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import Connections_List_screen from './Connections_List_screen';
import ProfileScreen from './ProfileScreen';



const HomeStack = createStackNavigator();
const Connections_List_Stack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
	<Tab.Navigator
		initialRouteName="Home"
		activeColor="#fff"
		barStyle={{ backgroundColor: '#3BBB23' }}
	>

    <Tab.Screen
      name="Connections"
      component={Connections_List_Stack_Screen}
      options={{
        tabBarLabel: 'Connections',
        tabBarIcon: ({ color }) => (
          <Icon name="md-people-sharp" color={color} size={26} />
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
			title: "Connect",
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

const  Connections_List_Stack_Screen = ({ navigation }) => (
	<Connections_List_Stack.Navigator screenOptions={{
		headerStyle: {
			backgroundColor: '#3BBB23',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
			//alignSelf: 'center' 
		},
	}}>
		<Connections_List_Stack.Screen name="Connections_List_screen" component={Connections_List_screen} options={{
			title: "Connect",
			headerLeft: () => (
				<Icon.Button name="ios-menu" size={25} backgroundColor="#3BBB23" onPress={() => navigation.openDrawer()}></Icon.Button>
			),
      headerRight: () => (
				<Icon.Button name="ios-notifications" size={25} backgroundColor="#3BBB23" onPress={() => alert("coming soon!!")}></Icon.Button>
			)
		}} />
	</Connections_List_Stack.Navigator>
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
			title: "Connect",
			headerLeft: () => (
				<Icon.Button name="ios-menu" size={25} backgroundColor="#3BBB23" onPress={() => navigation.openDrawer()}></Icon.Button>
			),
      headerRight: () => (
				<Icon.Button name="ios-notifications" size={25} backgroundColor="#3BBB23" onPress={() => alert("coming soon!!")}></Icon.Button>
			)
		}} />
	</ProfileStack.Navigator>
);
