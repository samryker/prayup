import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Image,
    ListRenderItem,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
// import { React$Node } from '../../TypesAndInterfaces/AppTypes';
import { tracks } from '../config/Tracks';
// import scaling from '../../utilsAndServices/scaling';
import AppPlayer from '../config/AppPlayer';
import AudioPlayer from './AudioPlayer';
import TStyle from './TStyle';

// const { verticalScale } = scaling;

const TracksList = () => {
    const {
        container,
        itemStyle,
        listBox,
        playerBox,
        subTitle,
        subTitleBox,
        title,
        titleBox,
        trackImg,
        trackImgBox,
        trackDescBox,
    } = TStyle;

    // state vars
    const {selectedTrack, setSelectedTrack} = useState<TrackPlayer.Track | null>(null);

    useEffect(() => {
        AppPlayer.initializePlayer();
    }, []);

    const onTrackItemPress = async (track: TrackPlayer.Track) => {
        await TrackPlayer.stop();
        await TrackPlayer.reset();
        setSelectedTrack(track);
    };

    const playNextPrev = async (prevOrNext: 'prev' | 'next') => {
        const currentTrackId = await TrackPlayer.getCurrentTrack();
        if (!currentTrackId) return;
        const trkIndex = tracks.findIndex(trk => trk.id === currentTrackId);

        if (prevOrNext === 'next' && trkIndex < tracks.length - 1) {
            onTrackItemPress(tracks[trkIndex + 1]);
        }
        if (prevOrNext === 'prev' && trkIndex > 0) {
            onTrackItemPress(tracks[trkIndex - 1]);
        }
    };

    const renderItem: ListRenderItem<TrackPlayer.Track> = ({ item }) => {
        const artImg = item.artwork || `https://picsum.photos/150/200/?random=${Math.random()}`;

        let highlightStyle = {};
        if (selectedTrack && selectedTrack.id === item.id)
            highlightStyle = { backgroundColor: '#d1d1e0' };

        return (
            <TouchableOpacity
                onPress={() => onTrackItemPress(item)}
                style={[itemStyle, highlightStyle], {flex: 1,}}>
                <View style={trackImgBox}>
                    <Image style={trackImg} source={{ uri: artImg }} />
                </View>
                <View style={trackDescBox}>
                    <View style={titleBox}>
                        <Text style={title}>{item.title}</Text>
                    </View>
                    <View style={subTitleBox}>
                        <Text style={subTitle}>{item.artist || item.album || 'Unknown'}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    let listBoxStyle = {};
    if (selectedTrack) listBoxStyle = { paddingBottom: 280};
    return (
        <SafeAreaView style={container, {flex: 1,}}>
            <View style={[listBox, listBoxStyle], {flex: 1,}}>
                <FlatList data={tracks} renderItem={renderItem} keyExtractor={item => item.id} />
            </View>
            {selectedTrack && (
                <View style={playerBox, {flex: 1,}}>
                    <AudioPlayer track={selectedTrack} onNextPrevPress={playNextPrev} />
                </View>
            )}
        </SafeAreaView>
    );
};

export default TracksList;