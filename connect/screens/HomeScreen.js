import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
//const HomeScreen = ({ navigation }) => {

const HomeScreen = ({}) => {
    return (
      <View style={styles.container}>
        <Text>Home screen </Text>
        <Button
            title="click here"
            onPress={() => alert("Button clicked")}
        />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});