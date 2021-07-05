import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SupportScreen = ({}) => {
    return (
      <View style={styles.container}>
        <Text>Support Screen</Text>
        <Button
            title="click here"
            onPress={() => alert("Button clicked")}
        />
      </View>
    );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});