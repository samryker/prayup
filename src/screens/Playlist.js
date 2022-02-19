import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import { Colors, Metrix } from '../config';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AlbumComp from '../components/AlbumComp';
import PlaylistComp from '../components/PlaylistComp';
import Modal from 'react-native-modal';
import TrackPlayer from 'react-native-track-player';
// import CheckBox from '@react-native-community/checkbox';
import Checkbox from "expo-checkbox";
import { useDispatch, useSelector } from 'react-redux';
import { collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../firebase/utils'
import AppPlayer from '../config/AppPlayer';

const mapState = ({ user }) => ({
    currentProperty: user.currentProperty,
    propertySignInSuccess: user.propertySignInSuccess,
    errors: user.errors,
    isAdmin: user.isAdmin,
    userLoggedId: user.userLoggedId
});

const Search = ({ navigation }) => {

    const { currentProperty, propertySignInSuccess, errors, isAdmin, userLoggedId } =
        useSelector(mapState);

    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSelected, setIsSelected] = useState();




    const [prayers, setPrayers] = useState([]);
    const [selectedTrack, setSelectedTrack] = useState(null);
    const getData = async () => {

        try {
            console.log('userLoggedId', userLoggedId)
            const q = query(
                collection(db, `playlists/${userLoggedId}/favourites`)
            );
            const myPlayList = onSnapshot(q, (snapshot) => {
                const myData = snapshot.docs.map((doc) => doc.data());
                console.log("this is our data ", myData);
                setPrayers(myData);
            });

        } catch (error) {
            console.log('this error from what i"m trying to do now', error);
        }

        // const q = query(collection(db, "prayers"));
        // try {
        //     const querySnapshot = await getDocs(q);
        //     querySnapshot.forEach((doc) => {
        //         // doc.data() is never undefined for query doc snapshots
        //         console.log(doc.id, " => ", doc.data());
        //         setPrayers((oldPrayer) => [...oldPrayer, doc.data()])
        //         // setMyFiles((oldArray) => [...oldArray, obj]);
        //     });
        // } catch (err) {
        //     console.log('my error', err)
        // }
    }
    useEffect(() => {
        getData().then(
            console.log('this is our data', prayers)
        );
    }, []);

    useEffect(() => {
        AppPlayer.initializePlayer({});
    }, []);

    const onTrackItemPress = async (track: TrackPlayer.Track) => {
        await TrackPlayer.stop();
        await TrackPlayer.reset();
        setSelectedTrack(track);
        navigation.navigate('AudioPlayer');
        dispatch({
            type: 'ALL_TRACKS',
            payload: prayers,
        });
    };


    return (
        <View style={styles.container}>
            {/* <View style={styles.searchBar}>
                <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
                    <Fontisto
                        name={'equalizer'}
                        color={Colors.white}
                        size={20}
                        style={{ transform: [{ rotate: '90deg' }] }}
                    />
                </TouchableOpacity>
                <View style={styles.input}>
                    <Feather name={'search'} color={Colors.lighGray} size={20} />
                    <TextInput
                        value={search}
                        placeholder={'Search Your Favourite PlayList'}
                        onChangeText={text => setSearch(text)}
                        placeholderTextColor={Colors.lighGray}
                        style={{
                            marginLeft: Metrix.HorizontalSize(10),
                            width: Metrix.HorizontalSize(190),
                            height: Metrix.VerticalSize(44),
                        }}
                    />
                    <TouchableOpacity>
                        <FontAwesome
                            name={'microphone'}
                            color={Colors.lighGray}
                            size={20}
                            style={{ marginLeft: Metrix.HorizontalSize(10) }}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ marginLeft: Metrix.HorizontalSize(10) }}>
                    <Text style={{ color: Colors.white }}>Cancel</Text>
                </TouchableOpacity>
            </View> */}
            <ScrollView>
                <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Playlist</Text>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    {prayers &&
                        prayers.map((val, index) => {
                            return (
                                <View key={index} style={{ flex: 1, marginBottom: Metrix.VerticalSize(10) }}>
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
                                    />
                                </View>
                            );
                        })}
                </View>
            </ScrollView>
            <Modal isVisible={isModalVisible} style={{ position: 'absolute', top: 55 }} onBackdropPress={() => setIsModalVisible(false)}>
                <View
                    style={{
                        backgroundColor: Colors.white,
                        width: 160,
                        height: 170,
                        borderRadius: 20,
                        padding: 15,
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Entypo name={'flow-tree'} size={20} color={Colors.gray} />
                        <Text style={{ marginLeft: 5, color: Colors.black, marginTop: 3, fontWeight: 'bold' }}>
                            Category
                        </Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Checkbox
                                value={isSelected}
                                onValueChange={setIsSelected}
                                style={{ alignSelf: "center", height: 15, width: 15, borderColor: Colors.primary, borderRadius: 15 / 2 }}
                            />
                            <Text style={{ marginLeft: 5, color: Colors.black }}>All</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Checkbox
                                value={isSelected}
                                onValueChange={setIsSelected}
                                style={{ alignSelf: "center", height: 15, width: 15, borderColor: Colors.primary }}
                            />
                            <Text style={{ marginLeft: 5, color: Colors.black }}>Children Prayer</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Checkbox
                                value={isSelected}
                                onValueChange={setIsSelected}
                                style={{ alignSelf: "center", height: 15, width: 15, borderColor: Colors.primary }}
                            />
                            <Text style={{ marginLeft: 5, color: Colors.black }}>Friends Prayer</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                            <Checkbox
                                value={isSelected}
                                onValueChange={setIsSelected}
                                style={{ alignSelf: "center", height: 15, width: 15, borderColor: Colors.primary }}
                            />
                            <Text style={{ marginLeft: 5, color: Colors.black }}>Customized Prayer</Text>
                        </View>
                    </View>
                </View>
            </Modal>
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
        height: Metrix.VerticalSize(44),
    },
});

export default Search;