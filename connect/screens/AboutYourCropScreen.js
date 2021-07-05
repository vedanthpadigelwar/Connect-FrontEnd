import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AboutYourCropScreen = ({}) => {
    return (
      <View style={styles.container}>
        <Text>About your crop Screen</Text>

      </View>
    );
};

export default AboutYourCropScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});