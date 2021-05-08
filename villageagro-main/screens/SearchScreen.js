import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SearchScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Search Screen</Text>
        <Button
            title="Go to Search screen...again"
            onPress={() => navigation.push("Search")}
        />
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});