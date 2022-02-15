import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Colors, Metrix, NavigationService} from '../config';
import AlbumComp from '../components/AlbumComp';
import PlaylistComp from '../components/PlaylistComp';
import TrackPlayer from 'react-native-track-player';
import AppPlayer from '../config/AppPlayer';
import AudioPlayer from '../components/AudioPlayer';
import {useDispatch} from 'react-redux';

const Home = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const data = [
    {
      id: '1',
      url: 'https://www.chosic.com/wp-content/uploads/2021/07/Raindrops-on-window-sill.mp3',
      title: 'Worship and Praise1',
      artist: 'The Epic Hero',
      free: true,
      album: 'Vocalist and band',
      duration: 149,
    },
    {
      id: '2',
      url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
      title: 'Worship and Praise2',
      artist: 'The Epic Hero',
      free: false,
      album: 'Vocalist and band',
      duration: 119,
    },
    {
      id: '3',
      url: 'https://www.chosic.com/wp-content/uploads/2021/07/purrple-cat-equinox.mp3',
      title: 'Worship and Praise3',
      artist: 'The Epic Hero',
      free: true,
      album: 'Vocalist and band',
      duration: 140,
    },
    {
      id: '4',
      url: 'https://www.chosic.com/wp-content/uploads/2021/04/And-So-It-Begins-Inspired-By-Crush-Sometimes.mp3',
      title: 'Worship and Praise4',
      artist: 'The Epic Hero',
      free: true,
      album: 'Vocalist and band',
      duration: 178,
    },
    {
      id: '5',
      url: 'https://www.chosic.com/wp-content/uploads/2021/05/inossi-got-you.mp3',
      title: 'Worship and Praise5',
      artist: 'The Epic Hero',
      free: false,
      album: 'Vocalist and band',
      duration: 66,
    },
    {
      id: '6',
      url: 'https://www.chosic.com/wp-content/uploads/2021/04/kvgarlic__largestreamoverloginforestmarch.mp3',
      title: 'Worship and Praise6',
      artist: 'The Epic Hero',
      free: true,
      album: 'Vocalist and band',
      duration: 149,
    },
    {
      id: '7',
      url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
      title: 'Worship and Praise7',
      artist: 'The Epic Hero',
      free: false,
      album: 'Vocalist and band',
      duration: 149,
    },
    {
      id: '8',
      url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
      title: 'Worship and Praise8',
      artist: 'The Epic Hero',
      free: true,
      album: 'Vocalist and band',
      duration: 149,
    },
    {
      id: '9',
      url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
      title: 'Worship and Praise9',
      artist: 'The Epic Hero',
      free: true,
      album: 'Vocalist and band',
      duration: 149,
    },
    {
      id: '10',
      url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
      title: 'Worship and Praise10',
      artist: 'The Epic Hero',
      free: false,
      album: 'Vocalist and band',
      duration: 149,
    },
    {
      id: '11',
      url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
      title: 'Worship and Praise11',
      artist: 'The Epic Hero',
      free: true,
      album: 'Vocalist and band',
      duration: 149,
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    AppPlayer.initializePlayer({});
  }, []);

  const onTrackItemPress = async (track: TrackPlayer.Track) => {
    await TrackPlayer.stop();
    await TrackPlayer.reset();
    setSelectedTrack(track);
    NavigationService.navigate('AudioPlayer');
    dispatch({
      type: 'ALL_TRACKS',
      payload: data,
    });
  };

  const playNextPrev = async (prevOrNext: 'prev' | 'next') => {
    const currentTrackId = await TrackPlayer.getCurrentTrack();
    const que = await TrackPlayer.getQueue();
    const trkIndex = data.findIndex(trk => trk.id === selectedTrack.id);

    if (prevOrNext === 'next' && trkIndex < data.length - 1) {
      TrackPlayer.skipToNext();
      onTrackItemPress(data[trkIndex + 1]);
    }
    if (prevOrNext === 'prev' && trkIndex > 0) {
      TrackPlayer.skipToPrevious();
      onTrackItemPress(data[trkIndex - 1]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.album}>
        <AlbumComp
          onPress={() => console.warn('pressed')}
          title={'Prayer Album'}
        />
        <AlbumComp
          onPress={() => console.warn('pressed')}
          title={'Prayer Album'}
        />
      </View>
      <View style={styles.album}>
        <AlbumComp
          onPress={() => console.warn('pressed')}
          title={'Prayer Album'}
        />
        <AlbumComp
          onPress={() => NavigationService.navigate('CustomPrayers')}
          title={'Prayer Album'}
          customAlbum={true}
        />
      </View>
      {data &&
        data.map((val, index) => {
          return (
            <View
              key={index.toString()}
              style={{flex: 1, marginBottom: Metrix.VerticalSize(10)}}>
              <PlaylistComp
                onPress={() => {
                  // setTrackPlaying(!trackPlaying);
                  dispatch({
                    type: 'TRACK_PLAY',
                    payload: val,
                  });
                  onTrackItemPress(val);
                }}
                songTitle={val.title}
                free={val.free}
                album={val.album}
                // playing={selectedTrack ? trackPlaying : false}
              />
            </View>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: Metrix.HorizontalSize(20),
    marginBottom: Metrix.VerticalSize(70),
  },
  album: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: Metrix.VerticalSize(10),
  },
});

export default Home;
