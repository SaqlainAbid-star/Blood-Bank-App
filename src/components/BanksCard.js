import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';

function BanksCard({item}) {
    return (
        <View style={styles.banks}>
            <View style={styles.banksBox}>


                    <View style={styles.home}>
                     <FontAwesome5 name="home" color='#fa1616' size={23} />

                        <Text style={styles.addressText}>{item.Name} </Text>
                    </View>

                    <View style={styles.home}>
                    <Ionicons name="location-sharp" color='#fa1616' size={23} />
                        <Text style={styles.addressText}>{item.Address}</Text>
                    </View>


                    <View style={styles.home}>
                        <FontAwesome5 name="phone-alt" color='#fa1616' size={23} />
                   
                        <Text style={styles.addressText}>{item.Contact} </Text>
                    </View>

                    <View style={styles.home}>
                        <Icon name="email" color='#fa1616' size={23} />
                        
                        <Text style={styles.addressText}>{item.Email}</Text>
                    </View>


            </View>
        </View>
    )
}

export default BanksCard;

const styles = StyleSheet.create({
    banks: {
        flex: 1,
        padding: 5,
        width: '100%',
        height: '100%',
      
    },
    banksBox: {
        backgroundColor: '#fff',
        width: '100%',
        height: 180,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        justifyContent: "center",
       

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