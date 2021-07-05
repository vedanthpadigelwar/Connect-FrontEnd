import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MyItemsScreen = ({}) => {
    return (
      <View style={styles.container}>
        <Text>Bookmark </Text>
        <Button
            title="click here"
            onPress={() => alert("Button clicked")}
        />
      </View>
    );
};

export default MyItemsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});