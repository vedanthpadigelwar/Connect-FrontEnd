import * as ActionTypes from './ActionTypes';
import { ToastAndroid, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import NetInfo from "@react-native-community/netinfo";
import { GoogleSignin } from '@react-native-community/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import firestore from '@react-native-firebase/firestore';

export const setUser = (user) => ({
    type: ActionTypes.SET_USER,
    payload: user
});

export const clearUser = () => ({
    type: ActionTypes.CLEAR_USER
});

export const setSignedIn = (signedIn) => ({
    type: ActionTypes.SIGNEDIN,
    payload: signedIn
});

export const setLoading = (load) => ({
    type: ActionTypes.LOADING,
    payload: load
});

export const setError = (err) => ({
    type: ActionTypes.FAIL,
    payload: err
});

const AlertWindow = (title, msg) => {
    Alert.alert(
        title,
        msg,
        [
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
    );
}

const uploadUserData = (email, userName) => async () => {
    await firestore()
        .collection('userProfile')
        .doc(email)
        .set({
            userName: userName,
            email: email
        })
        .then(() => {
            console.log('User added!');
        });
}

const getUserData = (email) => async () => {
    const user = await firestore()
        .collection('userProfile')
        .doc(email)
        .get();

    return user._data;
}

export const registerUser = (email, password, userName) => (dispatch) => {

    NetInfo.fetch().then(state => {
        if (state.isConnected) {
            dispatch(setLoading(true));

            if (parseInt(email).toString() === email) {
                changedEmail = email + "@phonenumber.com";
            } else {
                changedEmail = email;
            }

            auth()
                .createUserWithEmailAndPassword(changedEmail, password)
                .then(() => {
                    console.log('User account created & signed in!');
                    dispatch(setSignedIn(true));
                    dispatch(setUser({
                        userName: userName,
                        email: email
                    }));
                    dispatch(uploadUserData(changedEmail, userName));
                    dispatch(setLoading(false));

                    ToastAndroid.show("Hurray! You registration is successful.", ToastAndroid.SHORT);
                })

                .catch(error => {
                    dispatch(setSignedIn(false));
                    dispatch(setError(error.code));
                    dispatch(setLoading(false));

                    AlertWindow(
                        "Registration Unsuccessful",
                        "Sorry! Your registration is cannot be processed. Please try after sometime."
                    );
                    //ToastAndroid.show("Sorry! Registeration is not successful.", ToastAndroid.LONG);
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }
                });

            dispatch(setLoading(true));
        } else {
            AlertWindow(
                "You are Offline",
                "Registration Unsuccessful. Check your Internet connection and try again."
            );
        }
    });
}

export const userSignIn = (email, password) => (dispatch) => {

    NetInfo.fetch().then(state => {
        if (state.isConnected) {
            dispatch(setLoading(true));

            if (parseInt(email).toString() === email) {
                changedEmail = email + "@phonenumber.com";
            } else {
                changedEmail = email;
            }

            auth()
                .signInWithEmailAndPassword(changedEmail, password)
                .then(async () => {
                    console.log('User successfully signed in!');
                    const userInfo = await dispatch(getUserData(changedEmail));

                    dispatch(setSignedIn(true));
                    dispatch(setUser({
                        userName: userInfo.userName,
                        email: email
                    }));
                    dispatch(setLoading(false));

                    ToastAndroid.show("Hurray! You have successfully signed in.", ToastAndroid.SHORT);
                })

                .catch(error => {
                    dispatch(setSignedIn(false));
                    dispatch(setError(error.code));
                    dispatch(setLoading(false));

                    AlertWindow(
                        "Sign In Unsuccessful",
                        "Sorry! Your sign in failed. Please try after sometime."
                    );

                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }
                });
        } else {
            AlertWindow(
                "You are Offline",
                "Sign In Unsuccessful. Check your Internet connection and try again."
            );
        }
    });
}

GoogleSignin.configure({
    webClientId: '687304995639-er25jod0pv7smqoeta9skien2rlnenss.apps.googleusercontent.com',
});

export const googleSignIn = () => (dispatch) => {

    NetInfo.fetch().then(async (state) => {
        if (state.isConnected) {
            dispatch(setLoading(true));

            try {
                const userInfo = await GoogleSignin.signIn();
                const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
                await auth()
                    .signInWithCredential(googleCredential)
                    .then(() => {
                        console.log(userInfo);
                        console.log('User account created & signed in!');
                        dispatch(setSignedIn(true));
                        dispatch(setUser({
                            userName: userInfo.user.name,
                            email: userInfo.user.email
                        }));
                        dispatch(setLoading(false));

                        ToastAndroid.show("Hurray! You have successfully signed in.", ToastAndroid.SHORT);
                    });

            } catch (error) {
                dispatch(setSignedIn(false));
                dispatch(setError(error.code));
                dispatch(setLoading(false));

                if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                    console.log('user cancelled the login flow');
                } else if (error.code === statusCodes.IN_PROGRESS) {
                    console.log('operation (e.g. sign in) is in progress already');
                } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                    console.log('play services not available or outdated');
                } else {
                    console.log('some other error happened');
                }

                AlertWindow(
                    "Sign In Unsuccessful",
                    "Sorry! Your sign in failed. Please try after sometime."
                );

            }
        } else {
            AlertWindow(
                "You are Offline",
                "Sign In Unsuccessful. Check your Internet connection and try again."
            );
        }
    })
}

export const facebookSignIn = () => (dispatch) => {
    NetInfo.fetch().then(async (state) => {
        if (state.isConnected) {
            dispatch(setLoading(true));

            try {
                const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
                if (result.isCancelled) {
                    throw 'User cancelled the login process';
                }

                const data = await AccessToken.getCurrentAccessToken();
                if (!data) {
                    throw 'Something went wrong obtaining access token';
                }
                console.log(data.accessToken);
                const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

                await auth()
                    .signInWithCredential(facebookCredential)
                    .then(() => {
                        fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + data.accessToken)
                            .then((response) => response.json())
                            .then((userInfo) => {
                                console.log(userInfo);
                                console.log('User account created & signed in!');
                                dispatch(setSignedIn(true));
                                dispatch(setUser({
                                    userName: userInfo.name,
                                    email: userInfo.email
                                }));
                                dispatch(setLoading(false));

                                ToastAndroid.show("Hurray! You have successfully signed in.", ToastAndroid.SHORT);
                            })
                    });

            } catch (error) {

                dispatch(setSignedIn(false));
                dispatch(setError(error.code));
                dispatch(setLoading(false));

                AlertWindow(
                    "Sign In Unsuccessful",
                    "Sorry! Your sign in failed. Please try after sometime."
                );

            }
        } else {
            AlertWindow(
                "You are Offline",
                "Sign In Unsuccessful. Check your Internet connection and try again."
            );
        }
    })
}

export const userSignOut = () => (dispatch) => {

    NetInfo.fetch().then(state => {
        if (state.isConnected) {
            dispatch(setLoading(true));

            auth()
                .signOut()
                .then(() => {
                    dispatch(setSignedIn(false));
                    dispatch(clearUser());
                    dispatch(setLoading(false));

                    ToastAndroid.show("You have successfully signned out.", ToastAndroid.SHORT);
                });

        } else {
            AlertWindow(
                "You are Offline",
                "Sign Out Unsuccessful. Check your Internet connection and try again."
            );
        }
    });
}