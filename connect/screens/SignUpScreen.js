import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform, Button, Dimensions, StyleSheet, TextInput, StatusBar, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { registerUser } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
	registerUser: (email, password, userName) => dispatch(registerUser(email, password, userName))
});

const SignUpScreen = (props) => {
	const [data, setData] = React.useState({
		email: '',
		userName: '',
		password: '',
		confirm_password: '',
		check_textInputChange: false,
		secureTextEntry: true,
		confrim_secureTextEntry: true
	});

	const textInputChange = (val) => {
		if (val.length != 0) {
			setData({
				...data,
				email: val,
				check_textInputChange: true
			});
		} else {
			setData({
				...data,
				email: val,
				check_textInputChange: false
			});
		}
	}

	const handleUserNameChange = (val) => {
		setData({
			...data,
			userName: val
		});
	}

	const handlePasswordChange = (val) => {
		setData({
			...data,
			password: val
		});
	}

	const handleConfirmPasswordChange = (val) => {
		setData({
			...data,
			confirm_password: val
		});
	}

	const updateSecureTextEntry = () => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry
		});
	}


	const updateConfirmSecureTextEntry = () => {
		setData({
			...data,
			confirm_secureTextEntry: !data.confirm_secureTextEntry
		});
	}

	const handleRegister = () => {
		console.log("Clicked Register");
		props.registerUser(data.email, data.password, data.userName);
	}

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='#3BBB23' barStyle="light-content" />
			<ImageBackground source={require("../assets/background_image.png")} style={styles.image}>
			</ImageBackground>

			<Animatable.View animation="fadeInUpBig" style={styles.footer}>


			<Text style={[styles.text_footer]}> Full Name</Text>
				<View style={styles.action}>
					<FontAwesome
						name="user-o"
						color="#05375a"
						size={20}
					/>
					<TextInput
						placeholder="Your Full Name"
						placeholderTextColor="#666666"
						style={[styles.textInput]}
						autoCapitaliz='none'
						onChangeText={(val) => handleUserNameChange(val)}
					/>
					{data.check_textInputChange ?
						<Animatable.View
							animation="bounceIn"
						>
							<Feather
								name="check-circle"
								color="green"
								size={20}
							/>
						</Animatable.View>
						: null}
				</View>

				<Text style={[styles.text_footer, { marginTop: 15 }]}> Email</Text>
				<View style={styles.action}>
					<FontAwesome
						name="user-o"
						color="#05375a"
						size={20}
					/>
					<TextInput
						placeholder="Your Email"
						placeholderTextColor="#666666"
						style={[styles.textInput]}
						autoCapitaliz='none'
						onChangeText={(val) => textInputChange(val)}
					/>
					{data.check_textInputChange ?
						<Animatable.View
							animation="bounceIn"
						>
							<Feather
								name="check-circle"
								color="green"
								size={20}
							/>
						</Animatable.View>
						: null}
				</View>



				<Text style={[styles.text_footer, { marginTop: 15 }]}> Password</Text>
				<View style={styles.action}>
					<Feather
						name="lock"
						color="#05375a"
						size={20}
					/>
					<TextInput
						placeholder="Your Password"
						placeholderTextColor="#666666"
						secureTextEntry={data.secureTextEntry ? true : false}
						style={[styles.textInput]}
						autoCapitaliz='none'
						onChangeText={(val) => handlePasswordChange(val)}
					/>
					<TouchableOpacity
						onPress={updateSecureTextEntry}
					>
						{data.seek_textInputChange ?
							<Feather
								name="eye-off"
								color="grey"
								size={2}
							/>
							:
							<Feather
								name="eye"
								color="grey"
								size={2}
							/>
						}
					</TouchableOpacity>
				</View>

				<Text style={[styles.text_footer, { marginTop: 15 }]}> Confirm Password</Text>
				<View style={styles.action}>
					<Feather
						name="lock"
						color="#05375a"
						size={20}
					/>
					<TextInput
						placeholder="Confirm Your Password"
						placeholderTextColor="#666666"
						secureTextEntry={data.secureTextEntry ? true : false}
						style={[styles.textInput]}
						autoCapitaliz='none'
						onChangeText={(val) => handleConfirmPasswordChange(val)}
					/>
					<TouchableOpacity
						onPress={updateConfirmSecureTextEntry}
					>
						{data.secureTextEntry ?
							<Feather
								name="eye-off"
								color="grey"
								size={2}
							/>
							:
							<Feather
								name="eye"
								color="grey"
								size={2}
							/>
						}
					</TouchableOpacity>
				</View>
				<View style={styles.button}>
					<LinearGradient
						colors={['#3BBB23', '#3BBB23']}
						style={styles.signIn}
					>
						<TouchableOpacity onPress={() => handleRegister()}>
							<Text style={[styles.textSign, { color: '#fff' }]}>Sign Up  </Text>
						</TouchableOpacity>
					</LinearGradient>

					<TouchableOpacity onPress={() => props.navigation.navigate("SignInScreen")} style={[styles.signIn, { borderColor: '#323142', borderWidth: 1, marginTop: 15 }]}>
						<Text style={[styles.textSign, { color: '#323142' }]}>Sign In </Text>
					</TouchableOpacity>
				</View>
			</Animatable.View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0F4A04'
	},
	header: {
		flex: 1,
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingBottom: 50
	},
	footer: {
		flex: 3,
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30
	},
	text_header: {
		color: '#323142',
		fontWeight: 'bold',
		fontSize: 30
	},
	text_footer: {
		color: '#05375a',
		fontSize: 18
	},
	action: {
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2',
		paddingBottom: 5
	},
	actionError: {
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#FF0000',
		paddingBottom: 5
	},
	textInput: {
		flex: 1,
		marginTop: Platform.OS === 'ios' ? 0 : -12,
		paddingLeft: 10,
		color: '#05375a',
	},
	errorMsg: {
		color: '#FF0000',
		fontSize: 14,
	},
	button: {
		alignItems: 'center',
		marginTop: 50
	},
	signIn: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10
	},
	textSign: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center"
	}
});

export default connect(null, mapDispatchToProps)(SignUpScreen);