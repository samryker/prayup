import { StyleSheet, Text, View, Image, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import SlideOne from '../assets/slide1.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
const SliderPage1 = ({ navigation }) => {
    useFocusEffect(
        React.useCallback(() => {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
            return () => backHandler.remove()
        }, [])
    );

    return (
        <View style={styles.container}>
            <View style={styles.skipBtnWrapper}>
                <TouchableOpacity
                    style={styles.skipBtn}
                    onPress={() => { console.log('Skip Pressed'); navigation.navigate('BottomTabs') }}
                >
                    <Text style={styles.skipBtnText}>Skip</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.sliderLine}>
                <View style={styles.sliderProgressIndicator}></View>
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.textStyle}>GET TO KNOW</Text>
                <Text style={styles.textStyle}>ABOUT <Text style={styles.brandText}>Pray UP!</Text></Text>
            </View>
            <View style={styles.btmTextWrapper}>
                <Text style={styles.txtStyle}>Pray UP,a prayer app that allows you to play prayer audios</Text>
            </View>
            <View style={styles.ImageBg}>
                <Image
                    style={{ height: 300, width: 400 }}
                    resizeMethod="resize"
                    source={SlideOne}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.btnWrapper}>
                <TouchableOpacity
                    style={styles.nextBtn}
                    onPress={() => {
                        console.log('Next Pressed');
                        navigation.navigate('SliderPage2');
                    }}

                >
                    <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
            </View>


            {/* <Text>SliderPage1</Text> */}
        </View>
    )
}

export default SliderPage1

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#DED9C1',
        paddingVertical: 80,
        position: 'relative',
    },
    sliderLine: {
        width: '70%',
        backgroundColor: 'black',
        height: 1,
        marginLeft: '15%',
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
        marginTop: 30
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
        marginTop: 40,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
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
        width: 110,
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
        borderRadius: 16
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