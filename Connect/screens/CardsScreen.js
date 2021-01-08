import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CardsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Cards Screen</Text>
        <Button
            title="click here"
            onPress={() => alert("Button clicked")}
        />
      </View>
    );
};

export default CardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});