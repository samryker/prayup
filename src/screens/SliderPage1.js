import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SliderPage1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.sliderLine}>
                <View style={styles.sliderProgressIndicator}></View>
            </View>
            <Text>SliderPage1</Text>
        </View>
    )
}

export default SliderPage1

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#DED9C1',
        paddingVertical: 100
    },
    sliderLine: {
        width: '70%',
        backgroundColor: 'black',
        height: 1,
        marginLeft: '15%',
        position: 'relative',
    },
    sliderProgressIndicator: {

    }
})