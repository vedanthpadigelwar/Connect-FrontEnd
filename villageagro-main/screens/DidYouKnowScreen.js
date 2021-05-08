import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const DidYouKnowScreen = ({navigation}) => {
  
    return (
      <View style={styles.container}>
        <Text>Did you know Screen</Text>
      </View>
    );
};

export default DidYouKnowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
// import react from 'react';
// import { View, Text, StyleSheet, StatusBar,Image } from 'react-native';
// import { Card, ListItem, Button, Icon } from 'react-native-elements';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// const DidYouKnowScreen = ({navigation}) => {
  
//     return (
//     <SafeAreaProvider>
//         <Card>
//         <Card.Title>HELLO WORLD</Card.Title>
//         <Card.Divider/>
//         <Card.Image source={require('../assets/background_image.png')}>
//           <Text style={{marginBottom: 10}}>
//             The idea with React Native Elements is more about component structure than actual design.
//           </Text>
//           <Button
//             icon={<Icon name='code' color='#ffffff' />}
//             buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
//             title='VIEW NOW' />
//         </Card.Image>
//         </Card>

//     </SafeAreaProvider>
//     );
// };

// export default DidYouKnowScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
// });


 
