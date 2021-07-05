import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Connections_List_screen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Connections List Screen</Text>
        <Button
            title="click here"
            onPress={() => alert("Button clicked")}
        />
      </View>
    );
};

export default Connections_List_screen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});