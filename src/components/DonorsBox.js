import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';

function DonorBox({item}) {
    return (
        <View style={styles.donors}>
            <View style={styles.user}>

                <View style={styles.iconWrapper}>
                    <FontAwesome5 name="user-alt" color='#fff' size={50} />
                </View>

                <View style={styles.userinfo}>

                    <View style={styles.nameWrapper}>
                        <Text style={styles.name}>{item.donorName}</Text>
                    </View>

                    <View style={styles.dobWrapper}>
                        <Text style={styles.dob}>{item.dob}</Text>
                    </View>

                </View>

                <View style={styles.bloodGroupWrapper}>
                    <Text style={styles.bloodGroup}>{item.bloodGroup}</Text>
                </View>

            </View>

            <View style={styles.address}>

                <View style={styles.userAddress}>

                    <View style={styles.home}>
                        <FontAwesome5 name="home" color='#fa1616' size={23} />
                        <Text style={styles.addressText}>{item.address}</Text>
                    </View>

                    <View style={styles.home}>
                        <Ionicons name="location-sharp" color='#fa1616' size={23} />
                        <Text style={styles.addressText}>{item.city}</Text>
                    </View>

                    <View style={styles.home}>
                        <FontAwesome5 name="phone-alt" color='#fa1616' size={23} />
                        <Text style={styles.addressText}>{item.mobileNumber}</Text>
                    </View>

                </View>

            </View>


        </View>
    )
}

export default DonorBox;

const styles = StyleSheet.create({
    donors: {
        flex: 1,
        padding: 10,
        width: '100%',
        height: '100%',


    },
    user: {
        backgroundColor: '#fa1616',
        width: '100%',
        height: 90,
        padding: 10,
        justifyContent: "center",
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3,

    },
    iconWrapper: {
        flex: 1,
    },
    userinfo: {
        flex: 3,
    },
    nameWrapper: {

    },

    name: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    dob: {
        fontSize: 16,
        color: '#fff',
    },
    bloodGroupWrapper: {
        backgroundColor: '#fff',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: 'center',
        fontWeight: 'bold'

    },
    bloodGroup: {
        fontSize: 23,
        color: '#fa1616',
    },
    address: {
        marginTop: 2,
        backgroundColor: '#fff',
        width: '100%',
        height: 110,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    home: {
        flexDirection: 'row',
        marginTop: 5,

    },
    addressText: {
        marginLeft: 5,
        fontSize: 18,
        color: '#393e46',
    }
})