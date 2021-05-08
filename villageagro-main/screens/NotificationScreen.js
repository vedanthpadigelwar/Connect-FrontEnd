import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const NotificationScreen = ({navigation}) => {
  
    return (
      <View style={styles.container}>
        <Text>Notification Screen</Text>
      </View>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});

