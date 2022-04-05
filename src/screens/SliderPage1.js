import { StyleSheet, Text, View, Image, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import SlideOne from '../assets/home1.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import Video from 'react-native-video';
import Intro from '../assets/intro.mp4';
const SliderPage1 = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
            return () => backHandler.remove()
        }, [])
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.nextBtn}
                onPress={() => {
                    console.log('Next Pressed');
                    navigation.navigate('BottomTabs');
                }}

            >
                <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>



            <Video source={Intro}
                paused={false}
                repeat={true}
                resizeMode='contain'
                style={styles.backgroundVideo} />
        </View>
    )
}

export default SliderPage1

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: '10%',
        left: 0,
        bottom: 0,
        right: 0,
        height: '90%',
        width: '100%',
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#DED9C1',
        paddingVertical: 0,
        position: 'relative',
        alignItems: 'center'

    },
    sliderLine: {
        width: '70%',
        backgroundColor: 'black',
        height: 1,
        marginLeft: '5%',
        position: 'relative',
    },
    sliderProgressIndicator: {
        position: 'absolute',
        width: '33.33333%',
        height: 3,
        backgroundColor: 'black',
        top: -1.5,
        left: '0%'
    },
    textWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3
    },
    textStyle: {
        fontSize: 26,
        color: 'black',
        fontWeight: '600',
        fontFamily: "inter-Var",

    },
    brandText: {
        fontWeight: '900'
    },
    btmTextWrapper: {
        marginTop: 4,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 2,
    },
    txtStyle: {
        color: 'black',
        fontSize: 22,
        fontFamily: "EBGaramond-VariableFont_wght",
        textAlign: 'center'
    },
    ImageBg: {
    },
    btnWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    nextBtn: {
        backgroundColor: '#BE9553',
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#BE9553",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4.65,

        elevation: 7,
        borderRadius: 16,
        marginTop: 15
    },
    btnText: {
        color: '#fff',
        fontFamily: "inter-Var",
        fontWeight: '600',
        fontSize: 20
    },
    skipBtnText: {
        color: '#000',
        fontFamily: "inter-Var",
        fontSize: 18,
    },
    skipBtnWrapper: {
        position: 'absolute',
        height: 50,
        width: "100%",
        // width: '10%',
        right: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    skipBtn: {



    },
})