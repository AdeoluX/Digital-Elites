//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';
let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;
// create a component
const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const loginApi = (a, b) => {
    const data = {
      customerID: a,
      password: b,
    };
    axios
      .post('https://analytics-app-backend.herokuapp.com/login', data)
      .then((response) => {
        if (response.data.message === 'success') {
          alert(JSON.stringify(response.data));
        } else {
          alert(JSON.stringify(response.data));
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <View style={styles.container}>
      {/* <Text>Login</Text> */}
      {/* <View style={styles.logo}> */}
      <View style={styles.logo}>
        <Image source={require('../../Images/splash/LOGO.png')} />
      </View>
      <View>
        <View style={styles.card}>
          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              paddingBottom: 4,
            }}>
            <Image
              style={{height: 38, width: 38}}
              source={require('../../Images/gtb.png')}
            />
          </View>
          <View style={{justifyContent: 'center', paddingBottom: '10%'}}>
            <Text
              style={{
                color: '#1a237e',
                fontSize: 16.5,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Login with your GTBank credentials
            </Text>
          </View>
          <View>
            <View style={{paddingBottom: '8%'}}>
              <TextInput
                placeholder="Account / UserID / Phone number"
                onChangeText={(text) => setUserId(text)}
                value={userId}
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  borderBottomWidth: 0.75,
                }}
              />
            </View>
            <View>
              <TextInput
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  borderBottomWidth: 0.75,
                }}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '10%',
              }}>
              <TouchableOpacity onPress={() => loginApi(userId, password)}>
                <ImageBackground
                  style={{
                    width: windowWidth * 0.75,
                    borderRadius: 15,
                    height: windowHeight * 0.07,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  imageStyle={{borderRadius: 10}}
                  source={require('../../Images/button/app-buttons-missions-continue.png')}>
                  <Text
                    style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
                    LOGIN
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  card: {
    borderRadius: 20,
    width: windowWidth * 0.85,
    height: windowHeight * 0.45,
    backgroundColor: '#fff',
    padding: 15,
    margin: 8,
    shadowColor: '#1a237e',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
});

//make this component available to the app
export default Login;
