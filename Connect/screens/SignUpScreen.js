import React from 'react';
import { View, Text,Image,TouchableOpacity, Platform, Button,Dimensions, StyleSheet, TextInput, StatusBar } from 'react-native';

import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const SignInScreen = ({navigation}) => {
    const[data,setData] =React.useState({
        email:'',
        password:'',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry:true,
        confrim_secureTextEntry:true,

    });

    const textInputChange = (val) =>{
        if(val.length != 0){
          setData({
              ...data,
              email:val,
              check_textInputChange: true
          });
        }else{
          setData({
            ...data,
            email:val,
            check_textInputChange: false
          });
        }

    }

    const handlePasswordChange = (val)=>{
        setData(
          {
            ...data,
            password: val
          }
        );
    }

    const handleConfirmPasswordChange = (val)=>{
        setData(
          {
            ...data,
            confirm_password: val
          }
        );
    }

    const updateSecureTextEntry = () =>{
      setData(
        {
          ...data,
          secureTextEntry: !data.secureTextEntry
        }
      );
    }

    
    const updateConfirmSecureTextEntry = () =>{
        setData(
          {
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
          }
        );
      }

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#FFD133' barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}> Register Now!</Text>
        </View>

        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}> Email</Text>
          <View style={styles.action}>
            <FontAwesome 
              name="user-o"
              color="#05375a"
              size={20}
            />
            <TextInput
              placeholder="Your Email"
              styles={styles.textInput}
              autoCapitaliz='none'
              onChangeText={(val)=>textInputChange(val)}

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

          
          <Text style={[styles.text_footer,{marginTop: 35}]}> Password</Text>
          <View style={styles.action}>
            <Feather 
              name="lock"
              color="#05375a"
              size={20}
            />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry? true:false}
              styles={styles.textInput}
              autoCapitaliz='none'
              onChangeText={(val)=>handlePasswordChange(val)}
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
            
          <Text style={[styles.text_footer,{marginTop: 35}]}> Confirm Password</Text>
          <View style={styles.action}>
            <Feather 
              name="lock"
              color="#05375a"
              size={20}
            />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry? true:false}
              styles={styles.textInput}
              autoCapitaliz='none'
              onChangeText={(val)=>handleConfirmPasswordChange(val)}
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
                colors={['#323142','#323142']}
                style={styles.signIn}
              >
                <Text style={[styles.textSign,{color:'#fff'}]}>Sign Up </Text>
              </LinearGradient>

              <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")} style={[ styles.signIn, { borderColor:'#323142',borderWidth:1, marginTop:15 }]}>
                <Text style={[styles.textSign, {color:'#323142'}]}>Sign In </Text>
              </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
};

export default SignInScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFD133'
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
  }
});