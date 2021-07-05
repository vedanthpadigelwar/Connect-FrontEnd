import React from 'react';
import { Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainTabScreen from './MainTabScreen';
import SupportScreen from './SupportScreen';
import SettingsScreen from './SettingsScreen';
import MyItemsScreen from './MyItemsScreen';
import { StyleSheet, View, ToastAndroid, Alert } from 'react-native';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Loading from './LoadingScreen';
import { userSignOut } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    }
}

const mapDispatchToProps = (dispatch) => ({
    userSignOut: () => dispatch(userSignOut())
});

const DrawerStack = createDrawerNavigator();
const RootStack = createStackNavigator();

const MainScreen = (props) => {
    if (props.user.loading) {
        /*Put Loading UI -  I am just putting a simple Loading UI which is written in LoadingScreen.js*/
        return (<Loading />);
    } else if (props.user.signedIn) {

        const [isDarkTheme, setIsDarkTheme] = React.useState(false);
        const user = props.user;
        const toggleTheme = () => {
            setIsDarkTheme(!isDarkTheme);
        }

        const handleSignOut = () => {
            console.log("Pressed Sign Out");
            props.userSignOut();
        }

        return (
            <NavigationContainer independent={true} >
                <DrawerStack.Navigator drawerContent={props =>
                    <View style={{ flex: 1 }}>
                        <DrawerContentScrollView {...props}>
                            <View style={styles.drawerContent}>
                                <View style={styles.userInfoSection}>
                                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                        <Avatar.Image
                                            source={{
                                                uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F25737814%3Fs%3D460%26u%3D821a56b5c26887a73aa101ccf7062992a35da674%26v%3D4&imgrefurl=https%3A%2F%2Fgithub.com%2Fvedanthpadigelwar&tbnid=csgKr9GmlW09rM&vet=12ahUKEwiy25nhru3tAhWr8DgGHUm9CkoQMygBegQIARAu..i&docid=L0Uky0xSf8s5FM&w=460&h=460&itg=1&q=vedanth%20padigelwar&ved=2ahUKEwiy25nhru3tAhWr8DgGHUm9CkoQMygBegQIARAu'
                                            }}
                                            size={50}
                                        />
                                        <View style={{ marginLeft: 15, flexDirection: 'column' }} >
                                            {console.log()}
                                            <Title style={styles.title}>{user.userName}</Title>
                                            <Caption style={styles.caption}>{user.email}</Caption>
                                        </View>
                                    </View>
                                </View>

                                <Drawer.Section style={styles.draweSection}>

                                    <DrawerItem
                                        icon={({ color, size }) => (
                                            <Icon
                                                name="bookmark-outline"
                                                color={color}
                                                size={size}
                                            />
                                        )}
                                        label="My Items"
                                        onPress={() => { props.navigation.navigate('MyItemsScreen') }}
                                    />
                                    <DrawerItem
                                        icon={({ color, size }) => (
                                            <IonIcon
                                                name="md-settings-outline"
                                                color={color}
                                                size={size}
                                            />
                                        )}
                                        label="Settings"
                                        onPress={() => { props.navigation.navigate('SettingsScreen') }}
                                    />
                                    <DrawerItem
                                        icon={({ color, size }) => (
                                            <Icon
                                                name="help-circle-outline"
                                                color={color}
                                                size={size}
                                            />
                                        )}
                                        label="Help"
                                        onPress={() => { props.navigation.navigate('SupportScreen') }}
                                    />
                                </Drawer.Section>
                                {/* <Drawer.Section title="Preferences">
                                    <TouchableRipple onPress={() => { toggleTheme() }}>
                                        <View style={styles.preferences}>
                                            <Text>Dark Theme</Text>
                                            <View pointerEvents="none">
                                                <Switch value={isDarkTheme} />
                                            </View>
                                        </View>
                                    </TouchableRipple>
                                </Drawer.Section> */}
                            </View>
                        </DrawerContentScrollView>
                        <Drawer.Section style={styles.bottomDrawerSection}>
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="exit-to-app"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Sign Out"
                                onPress={() => handleSignOut()}//signOut()
                            />
                        </Drawer.Section>
                    </View>
                }>
                    <DrawerStack.Screen name="HomeDrawer" component={MainTabScreen} />
                    <DrawerStack.Screen name="SupportScreen" component={SupportScreen} />
                    <DrawerStack.Screen name="SettingsScreen" component={SettingsScreen} />
                    <DrawerStack.Screen name="MyItemsScreen" component={MyItemsScreen} />
                </DrawerStack.Navigator>
            </NavigationContainer>
        );
    } else {
        return (
            <NavigationContainer independent={true}>
                <RootStack.Navigator headerMode='none'>
                    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
                    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
                    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
                </RootStack.Navigator>
            </NavigationContainer>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
