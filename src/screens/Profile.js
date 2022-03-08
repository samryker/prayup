import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Colors, Images } from '../config';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileButtons from '../components/ProfileButtons';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
          style={{
            width: '100%',
            alignItems: 'flex-end',
            paddingTop: 20,
            paddingHorizontal: 20,
          }}>
          <FontAwesome name={'pencil'} size={25} color={Colors.white} />
        </TouchableOpacity>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.imageView}>
            <View style={styles.imageView2}>
              <Image
                source={require('../assets/boy.png')}
                style={{
                  resizeMode: 'cover',
                  width: 110,
                  height: 110,
                  borderRadius: 110 / 2,
                }}
              />
            </View>
          </View>
          <Text style={{ color: Colors.white, fontSize: 24 }}>John Doe</Text>
          <Text
            style={{
              color: Colors.backGray,
              fontSize: 20,
              fontStyle: 'italic',
              textDecorationLine: 'underline',
            }}>
            johndoe@prayup.com
          </Text>
        </View>
      </View>
      <ScrollView style={{ paddingTop: 10 }}>
        <View style={{ marginBottom: 20 }}>
          <ProfileButtons
            title={'Upgrade'}
            upgrade={true}
            imageUri={Images.profileStar}
            onPress={() => console.warn('Pressed')}
          />
        </View>
        <ProfileButtons
          title={'Prayers'}
          imageUri={Images.profileMusic}
          onPress={() => navigation.navigate('BottomTabs')}
        />
        <ProfileButtons
          title={'Custom Prayers'}
          imageUri={Images.profilePlaylist}
          onPress={() => console.warn('Pressed')}
        />
        <ProfileButtons
          title={'Playlist'}
          imageUri={Images.profilePlaylist2}
          onPress={() => console.warn('Pressed')}
        />
        {/* <ProfileButtons
          title={'Album'}
          imageUri={Images.profileRecord}
          onPress={() => console.warn('Pressed')}
        /> */}
        <ProfileButtons
          title={'Notifications'}
          imageUri={Images.profileAlarm}
          onPress={() => console.warn('Pressed')}
        />
        {/* <ProfileButtons
          title={'Downloads'}
          imageUri={Images.profileInsert}
          onPress={() => console.warn('Pressed')}
        /> */}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backGray,
  },
  topView: {
    // height: 300,
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    paddingBottom: 30,
  },
  imageView: {
    width: 170,
    height: 170,
    borderRadius: 170 / 2,
    borderWidth: 20,
    borderColor: '#8B6FB8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageView2: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    borderWidth: 5,
    borderColor: Colors.button,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
