import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <View style={styles.cardsWrapper}>

        <TouchableOpacity style={styles.about_your_crop_button} onPress={() => alert("Comming soon")}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <ImageBackground
                source={require('../assets/banners/food-banner2.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              >
                <Text style={styles.text}>Latest Techniques</Text>     
              </ImageBackground>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.about_your_crop_button} onPress={() => alert("Comming soon")}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <ImageBackground
                source={require('../assets/banners/food-banner3.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              >
                <Text style={styles.text}>Vegitables News</Text>     
              </ImageBackground>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.about_your_crop_button} onPress={() => alert("Comming soon")}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <ImageBackground
                source={require('../assets/banners/food-banner4.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              >
                <Text style={styles.text}>Fruits News</Text>     
              </ImageBackground>  
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.about_your_crop_button} onPress={() => alert("Comming soon")}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <ImageBackground
                source={require('../assets/banners/food-banner4.jpg')}
                resizeMode="cover"
                style={styles.cardImg}
              >
                <Text style={styles.text}>Poultry News</Text>     
              </ImageBackground>  
            </View>
          </View>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 150,
    marginVertical: 15,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderRadius: 8,
  },
  cardImgWrapper: {
    flex: 1,
    borderRadius: 8,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    justifyContent: "center",
    borderRadius: 8,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});


