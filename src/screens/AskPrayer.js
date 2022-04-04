import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput, Pressable } from 'react-native';
import { Colors, Images, Metrix } from '../config';

const AskPrayer = ({ navigation }) => {
    const [prayerName, setPrayerName] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <TouchableOpacity
                    style={{
                        width: '100%',
                        alignItems: 'flex-end',
                        paddingTop: 20,
                        paddingHorizontal: 20,
                    }}>

                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.imageView}>
                        <View style={styles.imageView2}>
                            <Image
                                source={require('../assets/boy.png')}
                                style={{
                                    resizeMode: 'cover',
                                    width: 110,
                                    height: 110,
                                    borderRadius: 110 / 2,
                                }}
                            />
                        </View>
                    </View>
                    <Text style={{ color: Colors.white, fontSize: 24 }}>Custom Prayer</Text>
                    <Text
                        style={{
                            color: Colors.backGray,
                            fontSize: 20,
                            fontStyle: 'italic',
                            textDecorationLine: 'underline',
                        }}>

                    </Text>
                </View>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    placeholder={'about the prayer ...'}
                    placeholderTextColor={Colors.lighGray}
                    onChangeText={text => setPrayerName(text)}
                    value={prayerName}
                    style={styles.input}
                />
                <View style={{ marginTop: 20, marginBottom: 10 }}>
                    <TouchableOpacity
                        style={{
                            // bottom: 110,
                            backgroundColor: Colors.primary,
                            ...styles.button,
                        }}
                        onPress={() => setModalVisible(true)}>
                        <Text
                            style={{
                                color: Colors.white,
                                fontSize: Metrix.customFontSize(19),
                            }}>
                            Submit Request
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>request submitted & pending for admin response</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Done</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    textStyle: {
        color: "white",
        backgroundColor: Colors.primary,
        padding: 8,
        borderRadius: 4
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        width: Metrix.HorizontalSize(150),
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 40,
        paddingVertical: 10,
        // position: 'absolute',
    },
    input: {
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: 'grey',
        padding: 10,
        fontSize: 20
    },
    inputView: {

        flex: 1,
        // width: Metrix.HorizontalSize(45),
        paddingVertical: 7,
        alignItems: 'center',
        justifyContent: 'center',
        // height: Metrix.VerticalSize(56)
    },
    formStyle: {

    },
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

export default AskPrayer;
