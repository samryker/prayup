import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, Pressable } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Payement = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [touchPressed, setTouchPressed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ flex: 1, }}>
            <View style={styles.topView}>
                <TouchableOpacity
                    style={{
                        width: '100%',
                        alignItems: 'flex-end',
                        paddingTop: 50,
                        paddingHorizontal: 20,
                    }}>
                    {/* <FontAwesome name={'pencil'} size={25} color={Colors.white} /> */}
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.imageView}>
                        <View style={styles.imageView2}>
                            <Image
                                source={require('../assets/payment.jpg')}
                                style={{
                                    resizeMode: 'cover',
                                    width: 110,
                                    height: 110,
                                    borderRadius: 110 / 2,
                                }}
                            />
                        </View>
                    </View>
                    <Text style={{ color: Colors.white, fontSize: 24 }}>Unlock Unlimited Access</Text>
                    <Text
                        style={{
                            color: Colors.backGray,
                            fontSize: 20,
                            fontStyle: 'italic',
                            textDecorationLine: 'underline',
                        }}>
                        04 April 2022
                    </Text>
                </View>
            </View>




            <View style={styles.paymentCard}>
                <TouchableOpacity
                    style={styles.paymentItem}
                    onPress={() => setTouchPressed(!touchPressed)}
                >
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                        tintColors={{ true: Colors.primary, false: Colors.primary }}
                        tintColor={Colors.primary}
                        onFillColor={Colors.primary}
                    />

                    <View style={{ marginLeft: 30 }}>
                        <Text style={styles.boldTextPrice}>$119.99/Year</Text>
                        <Text style={styles.nrmlTextPrice}>$9.99/Month billed annualy</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.paymentItem}
                    onPress={() => setTouchPressed(!touchPressed)}
                >
                    <CheckBox
                        value={isSelected1}
                        onValueChange={setSelection1}
                        style={styles.checkbox}
                        tintColors={{ true: Colors.primary, false: Colors.primary }}
                        tintColor={Colors.primary}
                        onFillColor={Colors.primary}
                    />

                    <View style={{ marginLeft: 30 }}>
                        <Text style={styles.boldTextPrice}>7 DAY FREE TRIAL</Text>
                        <Text style={styles.nrmlTextPrice}>$20.99/Month billed annualy</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.paymentItem}
                    onPress={() => setTouchPressed(!touchPressed)}
                >
                    <CheckBox
                        value={isSelected2}
                        onValueChange={setSelection2}
                        style={styles.checkbox}
                        tintColors={{ true: Colors.primary, false: Colors.primary }}
                        tintColor={Colors.primary}
                        onFillColor={Colors.primary}
                    />

                    <View style={{ marginLeft: 30 }}>
                        <Text style={styles.boldTextPrice}>$18.99/Month</Text>
                        <Text style={styles.nrmlTextPrice}>billed annualy</Text>
                    </View>
                </TouchableOpacity>



            </View>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.continueStyle}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={{ color: 'white', fontSize: 20, }}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 20 }}>
                <Text>Restore Purchase</Text>
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
                            <Text style={styles.modalText}>Payment Successful</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => navigation.navigate('PremiumScreen')}
                            >
                                <Text style={styles.textStyle}>Continue</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default Payement

const styles = StyleSheet.create({
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
    buttonClose: {

    },
    textStyle: {
        fontSize: 22,
        color: Colors.primary
    },
    continueStyle: {
        paddingVertical: 15,
        paddingHorizontal: 100,
        backgroundColor: Colors.primary,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 15,
    },
    boldTextPrice: {
        fontWeight: 'bold',
        fontSize: 20
    },
    checkbox: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    paymentItem: {
        paddingHorizontal: 15,
        marginBottom: 15,
        paddingVertical: 8,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: Colors.primary,
        width: '80%',
        marginLeft: '10%',
        borderRadius: 10
    },
    paymentItemNotPressed: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: 'transparent',
        width: '80%',
        marginLeft: '10%',
        borderRadius: 10
    },
    topView: {
        // height: 300,
        backgroundColor: Colors.primary,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        paddingBottom: 30,
        marginBottom: 50
    },
})