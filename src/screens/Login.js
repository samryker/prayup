import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Images, Metrix, Colors, NavigationService } from '../config';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.Rectangle}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.title}>WELCOME</Text>
        <Text style={styles.title2}>Login to continue</Text>
        <View style={styles.container2}>
          <Image
            source={Images.user}
            style={{ resizeMode: 'contain', width: 90, height: 90 }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 30,
            }}>
            <View style={styles.inputView}>
              <AntDesign
                name={'user'}
                size={Metrix.customFontSize(25)}
                color={Colors.white}
              />
            </View>
            <TextInput
              placeholder={'Username'}
              placeholderTextColor={Colors.lighGray}
              onChangeText={text => setUsername(text)}
              value={username}
              style={styles.input}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 5,
            }}>
            <View style={styles.inputView}>
              <Fontisto
                name={'locked'}
                size={Metrix.customFontSize(25)}
                color={Colors.white}
              />
            </View>
            <TextInput
              placeholder={'Password'}
              placeholderTextColor={Colors.lighGray}
              onChangeText={text => setPassword(text)}
              value={password}
              style={styles.input}
            />
          </View>
          <View style={{ width: '100%' }}>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                marginRight: 10,
              }}>
              <Text
                style={{
                  color: Colors.white,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('BottomTabs')}
              style={{
                // bottom: 110,
                backgroundColor: Colors.button,
                ...styles.button,
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: Metrix.customFontSize(19),
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ color: Colors.white }}>
            with your social media network
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              paddingHorizontal: 20,
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{ backgroundColor: Colors.white, ...styles.socialButton }}>
              <Image
                source={Images.Google}
                style={{ resizeMode: 'contain', height: 25, width: 25 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#1653C9', ...styles.socialButton }}>
              <Image
                source={Images.Facebook}
                style={{ resizeMode: 'contain', height: 25, width: 25 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    width: Metrix.HorizontalSize(150),
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 40,
    paddingVertical: 10,
    // position: 'absolute',
  },
  socialButton: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
    paddingHorizontal: Metrix.HorizontalSize(30),
    paddingVertical: Metrix.VerticalSize(3),
  },
  title: {
    color: Colors.button,
    fontSize: Metrix.customFontSize(50),
    fontWeight: 'bold',
  },
  title2: {
    color: Colors.white,
    fontSize: Metrix.customFontSize(18),
    fontWeight: 'bold',
  },
  container2: {
    borderWidth: 10,
    borderColor: Colors.button,
    // height: Metrix.VerticalSize(510),
    width: Metrix.HorizontalSize(300),
    borderRadius: 50,
    marginVertical: 20,
    padding: 20,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#28115B',
  },
  input: {
    backgroundColor: Colors.white,
    width: Metrix.HorizontalSize(170),
    paddingVertical: 10,
    paddingLeft: 8,
    height: Metrix.VerticalSize(44)
  },
  inputView: {
    backgroundColor: Colors.button,
    width: Metrix.HorizontalSize(45),
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
    // height: Metrix.VerticalSize(56)
  },
});
export default Login;
