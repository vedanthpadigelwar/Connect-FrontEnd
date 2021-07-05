import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MenuScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Menu Screen</Text>
        <Button
            title="click here"
            onPress={() => alert("Button clicked")}
        />
      </View>
    );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});