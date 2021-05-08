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
import { useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

const HomeScreen = ({ navigation }) => {
	const theme = useTheme();

	return (
		<ScrollView style={styles.container}>
			<StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
			<View style={styles.sliderContainer}>
				<Swiper
					autoplay
					height={150}
					activeDotColor="#FF6347">
					<TouchableOpacity style={styles.about_your_crop_button} onPress={() => navigation.navigate('AboutYourCropScreen')}>
						<View style={styles.slide}>
							<ImageBackground
								source={require('../assets//banners/food-banner1.jpg')}
								resizeMode="cover"
								style={styles.sliderImage}
							>
								<Text style={styles.text}>About your crop</Text>

							</ImageBackground>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.about_your_crop_button} onPress={() => navigation.navigate('AboutYourCropScreen')}>
						<View style={styles.slide}>
							<ImageBackground
								source={require('../assets/banners/food-banner1.jpg')}
								resizeMode="cover"
								style={styles.sliderImage}
							>
								<Text style={styles.text}>About your crop</Text>

							</ImageBackground>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.about_your_crop_button} onPress={() => navigation.navigate('AboutYourCropScreen')}>
						<View style={styles.slide}>
							<ImageBackground
								source={require('../assets//banners/food-banner1.jpg')}
								resizeMode="cover"
								style={styles.sliderImage}
							>
								<Text style={styles.text}>About your crop</Text>

							</ImageBackground>
						</View>
					</TouchableOpacity>
				</Swiper>
			</View>

			<View style={styles.categoryContainer}>

				<TouchableOpacity
					style={styles.categoryBtn}
					onPress={() =>
						navigation.navigate('WeatherScreen')
					}>
					<View style={styles.categoryIcon}>
						<Image
							source={require('../assets/weather.png')}
							resizeMode="cover"
							style={styles.sliderImage}
						/>
					</View>
					<Text style={styles.categoryBtnTxt}>Weather</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.categoryBtn}
					onPress={() =>
						navigation.navigate('NewsScreen')
					}>
					<View style={styles.categoryIcon}>
						<Image
							source={require('../assets/news.png')}
							resizeMode="cover"
							style={styles.sliderImage}
						/>
					</View>
					<Text style={styles.categoryBtnTxt}>News</Text>
				</TouchableOpacity>

			</View>
			<View style={[styles.categoryContainer, { marginTop: 10 }]}>

				<TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('TestingScreen')}>
					<View style={styles.categoryIcon}>
						<Image
							source={require('../assets/soil_testing.png')}
							resizeMode="cover"
							style={styles.sliderImage}
						/>
					</View>
					<Text style={styles.categoryBtnTxt}>Soil Testing</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Market_pricesScreen')}>
					<View style={styles.categoryIcon}>
						<Image
							source={require('../assets/pricelist.png')}
							resizeMode="cover"
							style={styles.sliderImage}
						/>
					</View>
					<Text style={styles.categoryBtnTxt}>Market Prices</Text>
				</TouchableOpacity>

			</View>

			<View style={styles.sliderContainer}>
				<Swiper
					autoplay
					height={150}
					activeDotColor="#FF6347">
					<TouchableOpacity style={styles.about_your_crop_button} onPress={() => navigation.navigate('DidYouKnowScreen')}>
						<View style={styles.slide}>
							<Image
								source={require('../assets/did_you_know.png')}
								resizeMode="cover"
								style={styles.sliderImage}
							/>

						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.about_your_crop_button} onPress={() => navigation.navigate('DidYouKnowScreen')}>
						<View style={styles.slide}>
							<Image
								source={require('../assets/did_you_know.png')}
								resizeMode="cover"
								style={styles.sliderImage}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.about_your_crop_button} onPress={() => navigation.navigate('DidYouKnowScreen')}>
						<View style={styles.slide}>
							<Image
								source={require('../assets/did_you_know.png')}
								resizeMode="cover"
								style={styles.sliderImage}
							/>
						</View>
					</TouchableOpacity>
				</Swiper>
			</View>
		</ScrollView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	sliderContainer: {
		height: 150,
		width: '90%',
		marginTop: 10,
		justifyContent: 'center',
		alignSelf: 'center',
		borderRadius: 8,
	},
	text: {
		color: "white",
		fontSize: 42,
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "#000000a0",
		borderRadius: 8,
	},
	wrapper: {},

	slide: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'transparent',
		justifyContent: "center",
	},
	sliderImage: {
		height: '100%',
		width: '100%',
		alignSelf: 'center',
		justifyContent: "center",
		borderRadius: 8,

	},
	categoryContainer: {
		flexDirection: 'row',
		width: '90%',
		alignSelf: 'center',
		marginTop: 25,
		marginBottom: 10,
	},
	categoryBtn: {
		flex: 1,
		width: '90%',
		marginHorizontal: 0,
		alignSelf: 'center',
	},
	about_your_crop_button: {
		flex: 1,
		width: '100%',
		marginHorizontal: 0,
		alignSelf: 'center',
		borderRadius: 8,
	},
	categoryIcon: {
		borderWidth: 0,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		width: 150,
		height: 150,
		backgroundColor: '#ffffff',
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
		height: 100,
		marginVertical: 10,
		flexDirection: 'row',
		shadowColor: '#999',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},
	cardImgWrapper: {
		flex: 1,
	},
	cardImg: {
		height: '100%',
		width: '100%',
		alignSelf: 'center',
		borderRadius: 8,
		borderBottomRightRadius: 0,
		borderTopRightRadius: 0,
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
