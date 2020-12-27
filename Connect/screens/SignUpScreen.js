import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SignUpScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>SignUpScreen</Text>
        <Button
            title="click here"
            onPress={() => alert("Button clicked")}
        />
      </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});