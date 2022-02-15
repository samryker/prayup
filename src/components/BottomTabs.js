import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Playlist from '../screens/Playlist';
import { Colors, Metrix } from '../config';
import { connect, useSelector } from 'react-redux';
import TrackReducer from '../redux/Reducers/TrackReducer';
import AudioPlayer from './AudioPlayer';
import PlaylistComp from './PlaylistComp';
import { TrackAction } from '../redux/Actions';
import { useDispatch } from 'react-redux';
import { NavigationService } from "../config";

const BottomTabs = () => {
  const dispatch = useDispatch();
  const Tab = createBottomTabNavigator();
  const track = useSelector(state => state?.TrackReducer?.data);
  return (
    <>
      {track && (
        <View
          style={{
            position: 'absolute',
            bottom: 64,
            zIndex: 9999,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <PlaylistComp
            onPress={() => NavigationService.navigate("AudioPlayer")}
            songTitle={track.title}
            free={track.free}
            album={track.album}
          // playing={true}
          />
        </View>
      )}
      <Tab.Navigator
        tabBarOptions={{ showLabel: false, keyboardHidesTabBar: true }}
        screenOptions={({ route }) => ({
          headerShown: false,
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          style: {
            borderTopWidth: 0,
            elevation: 0,
            ...styles.shadow,
          },
          keyboardHidesTabBar: true,
          tabBarStyle: {
            height: Metrix.VerticalSize(70),
            paddingHorizontal: Metrix.HorizontalSize(5),
            paddingTop: 0,
            backgroundColor: Colors.primary,
            position: 'absolute',
            borderTopWidth: 0,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          headerShown={false}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 60,
                  height: 60,
                  borderRadius: 30 / 2,
                  backgroundColor: focused ? '#fffff' : Colors.primary,
                  // padding: 10
                }}>
                <FontAwesome name={'home'} size={25} color={focused ? '#CCCCFF' : Colors.white} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome name={'search'} size={25} color={focused ? '#CCCCFF' : Colors.white} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Playlist"
          component={Playlist}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome name={'music'} size={25} color={focused ? '#CCCCFF' : Colors.white} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome name={'user'} size={25} color={focused ? '#CCCCFF' : Colors.white} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

const mapStateToProps = state => ({
  track: TrackReducer.track,
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BottomTabs);
