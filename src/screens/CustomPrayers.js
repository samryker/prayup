import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Colors, Metrix} from '../config';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AlbumComp from '../components/AlbumComp';
import PlaylistComp from '../components/PlaylistComp';

const CustomPrayers = () => {
  const [search, setSearch] = useState();

  let data = [
    {
      song: 'Worship and Praise',
      free: false,
      album: 'Vocalist and band',
    },
    {
      song: 'Worship and Praise',
      free: false,
      album: 'Vocalist and band',
    },
    {
      song: 'Worship and Praise',
      free: false,
      album: 'Vocalist and band',
    },
    {
      song: 'Worship and Praise',
      free: false,
      album: 'Vocalist and band',
    },
    {
      song: 'Worship and Praise',
      free: false,
      album: 'Vocalist and band',
    },
    {
      song: 'Worship and Praise',
      free: false,
      album: 'Vocalist and band',
    },
    {
      song: 'Worship and Praise',
      free: false,
      album: 'Vocalist and band',
    },
    {
      song: 'Worship and Praise',
      free: false,
      album: 'Vocalist and band',
    },
    {
      song: 'Worship and Praise',
      free: false,
      album: 'Vocalist and band',
    },
    {
      song: 'Worship and Praise',
      free: false,
      album: 'Vocalist and band',
    },
    {
      song: 'Worship and Praise',
      free: false,
      album: 'Vocalist and band',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TouchableOpacity>
          <Fontisto
            name={'equalizer'}
            color={Colors.white}
            size={20}
            style={{transform: [{rotate: '90deg'}]}}
          />
        </TouchableOpacity>
        <View style={styles.input}>
          <Feather name={'search'} color={Colors.lighGray} size={20} />
          <TextInput
            value={search}
            placeholder={'Search Your Favourite Prayer'}
            onChangeText={text => setSearch(text)}
            placeholderTextColor={Colors.lighGray}
            style={{
              marginLeft: Metrix.HorizontalSize(10),
              width: Metrix.HorizontalSize(190),
              height: Metrix.VerticalSize(44)
            }}
          />
          <TouchableOpacity>
            <FontAwesome
              name={'microphone'}
              color={Colors.lighGray}
              size={20}
              style={{marginLeft: Metrix.HorizontalSize(10)}}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{marginLeft: Metrix.HorizontalSize(10)}}>
          <Text style={{color: Colors.white}}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{width: '56%', paddingHorizontal: 20, paddingVertical: 30}}>
          <AlbumComp
            // onPress={() => NavigationService.navigate('CustomPrayers')}
            cTitle={'Custom Prayer'}
            customAlbum={true}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          {data &&
            data.map((val, index) => {
              return (
                <View style={{flex: 1, marginBottom: Metrix.VerticalSize(10)}}>
                  <PlaylistComp
                    onPress={() => console.warn('pressed')}
                    songTitle={val.song}
                    free={val.free}
                    album={val.album}
                  />
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  searchBar: {
    backgroundColor: Colors.primary,
    // height: Metrix.VerticalSize(61),
    width: '100%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
  },
  input: {
    width: Metrix.HorizontalSize(260),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: Metrix.HorizontalSize(10),
    height: Metrix.VerticalSize(44)
  },
});

export default CustomPrayers;
