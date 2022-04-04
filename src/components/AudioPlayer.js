import React, { useEffect, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Fontisto';
// import { React$Node } from '../../TypesAndInterfaces/AppTypes';
import TrackAction from '../redux/Actions/TrackAction';
import AppPlayer from '../config/AppPlayer';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import TrackReducer from '../redux/Reducers/TrackReducer';
import { Colors } from '../config';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';

// type compProps = {
//   track: TrackPlayer.Track,
//   onNextPrevPress: (p: 'prev' | 'next') => void,
// };

const AudioPlayer = props => {
  const {
    playerMaxView,
    topSection,
    buttonsSection,
    progrsBarSection,
    buttonsCol,
    playPauseButton,
    playPauseIcon,
    trackArtBox,
    trackArt,
    trackDesc,
    trackTitle,
    trackSubtitle,
  } = styles;

  const data = useSelector(state => state?.TrackReducer?.allTracks);
  const track = useSelector(state => state?.TrackReducer?.data);
  const trackCheck = useSelector(state => state?.TrackReducer?.track);
  const progress = useProgress();
  const [isPlaying, setPlaying] = useState(true);
  const [buffering, setBuffering] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(track);

  const dispatch = useDispatch();

  const CheckBuffering = async () => {
    const state = await TrackPlayer.getState();
    if (state === 'buffering') {
      TrackPlayer.play();
      setBuffering(true);
    }
    if (state === 'playing') {
      setBuffering(false);
    }
    if (state === 'paused') {
      setBuffering(false);
    }
  };

  useEffect(() => {
    CheckBuffering();
  }, []);

  // useEffect(() => {
  //     AppPlayer.initializePlayer();
  //   }, []);

  const playNextPrev = async (prevOrNext: 'prev' | 'next') => {
    // const currentTrackId = await TrackPlayer.getCurrentTrack();
    // if (!currentTrackId) return;
    // const que = await TrackPlayer.getQueue();
    const trkIndex = data.findIndex(trk => trk.id === selectedTrack.id);
    if (prevOrNext === 'next' && trkIndex < data.length - 1) {
      await TrackPlayer.stop();
      await TrackPlayer.reset();
      dispatch({
        type: 'TRACK_PLAY',
        payload: data[trkIndex + 1],
      });
      setSelectedTrack(data[trkIndex + 1]);
      // TrackPlayer.skipToNext();
      // onTrackItemPress(data[trkIndex + 1]);
    }
    if (prevOrNext === 'prev' && trkIndex > 0) {
      await TrackPlayer.stop();
      await TrackPlayer.reset();
      dispatch({
        type: 'TRACK_PLAY',
        payload: data[trkIndex - 1],
      });
      setSelectedTrack(data[trkIndex - 1]);
      // TrackPlayer.skipToPrevious();
      // onTrackItemPress(data[trkIndex - 1]);
    }
  };

  useEffect(() => {
    // console.warn("dlskfndsjklfnljb")
    setPlaying(true);
    TrackPlayer.add(track);
    TrackPlayer.play();
  }, [track]);

  const onPlayPausePress = async () => {
    const state = await TrackPlayer.getState();
    console.warn('state', state);
    if (state === 3) {
      // dispatch(TrackAction.TrackPause());
      TrackPlayer.pause();
      setPlaying(false);
    }

    if (state === 2) {
      // dispatch(TrackAction.TrackPlay(), payload: track,);
      dispatch({
        type: 'TRACK_PLAY',
        payload: track,
      });
      TrackPlayer.play();
      setPlaying(true);
    }
    if (state === 1) {
      TrackPlayer.play();
      // setBuffering(true);
    }
    if (!track) {
      TrackPlayer.pause();
      setPlaying(false);
    }
  };

  // useEffect(() => {
  //   if (!trackCheck) {
  //     TrackPlayer.pause();
  //     setPlaying(false);
  //   }
  //   if (trackCheck) {
  //     TrackPlayer.play();
  //     setPlaying(true);
  //   }
  // }, [trackCheck]);

  const artImg = `https://picsum.photos/150/200/?random=${Math.random()}`;

  const playOrPauseIcon = isPlaying ? 'pause' : 'play';
  return (
    <View style={playerMaxView}>
      <View style={topSection}>
        <View style={styles2.topView}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 50,
            }}>
            <Image
              source={require('../assets/SongTemplate.png')}
              style={{
                resizeMode: 'cover',
                width: 170,
                height: 170,
                // borderRadius: 110 / 2,
              }}
            />
          </View>
        </View>
        <View style={trackDesc}>
          <View>
            <Text style={trackTitle}>{track ? track.title : null}</Text>
          </View>
          <View>
            <Text style={trackSubtitle}>
              {track ? track.artist || track.album || 'unknown' : null}
            </Text>
          </View>
        </View>
      </View>
      <View style={progrsBarSection}>
        <Text>
          {AppPlayer.secondsToHHMMSS(Math.floor(progress.position || 0))}
        </Text>
        <Slider
          style={{ width: '70%', height: 40 }}
          minimumValue={0}
          maximumValue={track ? parseInt(track.duration) : 0}
          minimumTrackTintColor={Colors.primary}
          maximumTrackTintColor="#000"
          thumbTintColor={Colors.primary}
          value={progress.position}
        />
        <Text>
          {AppPlayer.secondsToHHMMSS(track ? track.url.duration || 0 : 0)}
        </Text>
      </View>
      <View style={buttonsSection}>
        <View style={[buttonsCol, { alignItems: 'flex-end' }]}>
          <TouchableOpacity onPress={() => playNextPrev('prev')}>
            <Icon name="step-backwrad" size={18} color="#52527a" />
          </TouchableOpacity>
        </View>
        <View style={buttonsCol}>
          {buffering ? (
            <ActivityIndicator size={'large'} color={'white'} />
          ) : (
            <TouchableOpacity
              onPress={onPlayPausePress}
              style={playPauseButton}>
              <Icon
                name={playOrPauseIcon}
                size={14}
                color="red"
                style={playPauseIcon}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={[buttonsCol, { alignItems: 'flex-start' }]}>
          <TouchableOpacity onPress={() => playNextPrev('next')}>
            <Icon name="step-forward" size={18} color="#52527a" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginVertical: 20,
        }}>
        <View
          style={{
            width: '70%',
            backgroundColor: Colors.white,
            borderWidth: 1,
            borderColor: Colors.gray,
            // height: 50,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 20,
            paddingVertical: 5,
            marginVertical: 30,
          }}>
          <TouchableOpacity>
            <Feather name={'bookmark'} size={30} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name={'shuffle'} size={30} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name={'download'} size={30} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Octicons name={'diff-added'} size={30} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles2 = StyleSheet.create({
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
    width: '100%',
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

export default AudioPlayer;
