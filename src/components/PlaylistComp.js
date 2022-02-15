import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Colors, Images, Metrix} from '../config';
import Feather from 'react-native-vector-icons/Feather';

const PlaylistComp = ({onPress, songTitle, free, album, playing}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.7}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            ...styles.view,
            paddingHorizontal: free ? Metrix.HorizontalSize(10) : 0,
            paddingVertical: free ? Metrix.VerticalSize(5) : 0,
          }}>
          <Image
            source={free ? Images.SongTemplate : Images.locked}
            style={{
              resizeMode: free ? 'contain' : 'cover',
              width: free
                ? Metrix.HorizontalSize(50)
                : Metrix.HorizontalSize(70),
              height: free ? Metrix.VerticalSize(50) : Metrix.VerticalSize(60),
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Text style={{fontWeight: 'bold'}}>{songTitle}</Text>
            <View style={{flexDirection: 'row'}}>
              {free ? (
                <Text style={{color: Colors.green, fontWeight: 'bold'}}>
                  Free
                </Text>
              ) : (
                <Text style={{color: Colors.red, fontWeight: 'bold'}}>Pro</Text>
              )}
              <Text
                style={{
                  color: Colors.lighGray,
                  marginLeft: Metrix.HorizontalSize(10),
                }}>
                {album}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={onPress}>
        {playing ? (
          <Feather
            name={'pause'}
            color={Colors.primary}
            size={Metrix.customFontSize(36)}
          />
        ) : (
          <Feather
            name={'play'}
            color={Colors.primary}
            size={Metrix.customFontSize(36)}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.lighGray,
    paddingRight: Metrix.HorizontalSize(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  view: {
    borderRadius: 10,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlaylistComp;
