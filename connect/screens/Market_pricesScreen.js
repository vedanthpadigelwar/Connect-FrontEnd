import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const Market_pricesScreen = ({navigation}) => {
  
    return (
      <View style={styles.container}>
        <Text>Market prices Screen</Text>
      </View>
    );
};

export default Market_pricesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});