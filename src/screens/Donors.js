import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Container, Text, Header, Content, Form, Item, Input, Label, Picker, Button, List } from 'native-base';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import DonorBox from "../components/DonorsBox";
import database from '@react-native-firebase/database';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';


const Donors = [
    {
        id: '1',
        donorName: 'Ali',
        mobileNumber: '03344098761',
        dob: 'January 01, 1980',
        address: 'AD-109, H No. 16b Township',
        city: 'Lahore',
        bloodGroup: 'A+'
    },
    {
        id: '2',
        donorName: 'Farooq',
        mobileNumber: '03344098761',
        dob: 'January 01, 1980',
        address: 'AD-109, H No. 16b Township',
        city: 'Lahore',
        bloodGroup: 'B+'
    },
    {
        id: '3',
        donorName: 'Usman',
        mobileNumber: '03344098761',
        dob: 'January 01, 1980',
        address: 'AD-109, H No. 16b Township',
        city: 'Lahore',
        bloodGroup: 'AB-'
    },
    {
        id: '4',
        donorName: 'Shoaib',
        mobileNumber: '03344098761',
        dob: 'January 01, 1980',
        address: 'AD-109, H No. 16b Township',
        city: 'Lahore',
        bloodGroup: 'O+'
    },
    {
        id: '6',
        donorName: 'Kamran',
        mobileNumber: '03344098761',
        dob: 'January 01, 1980',
        address: 'AD-109, H No. 16b Township',
        city: 'Lahore',
        bloodGroup: 'A-'
    },
    {
        id: '5',
        donorName: 'Haseeb',
        mobileNumber: '03344098761',
        dob: 'January 01, 1980',
        address: 'AD-109, H No. 16b Township',
        city: 'Lahore',
        bloodGroup: 'AB+'
    },
];



const DonorScreen = ({ navigation }) => {

    const [donors, setdonors] = useState(null);
    const [filterDonors, setfilterDonors] = useState(null);
    const [bloodGroup, setbloodGroup] = useState(null);
   
    

    const get_donors = () => {

        const list = [];

        database().ref('/donors').on('child_added', (data) => {
            const ref = data.val();
            list.push({
                id: data.key,
                donorName: ref.donorName,
                mobileNumber: ref.mobileNumber,
                dob: ref.dob,
                address: ref.address,
                city: ref.city,
                bloodGroup: ref.bloodGroup,
            })

            setdonors(list)
            setfilterDonors(list)

        })

    }

    useEffect(() => {
        get_donors();
    }, []);




    const searchGroup = (value) =>{
        if(value!==''){
            setfilterDonors(
                filterDonors.filter(i=>i.bloodGroup.toLowerCase().includes(value.toLowerCase()))
            )
        }else{
            setfilterDonors(donors)
        }
    }



    return (

        <View style={styles.container}>

            <View style={styles.header}>

                <View style={styles.iconStyle}>
                    <Ionicons name='menu' color='#fff' size={25} onPress={() => navigation.openDrawer()}/>
                </View>

                <View style={styles.input}>

                    <View style={styles.icon}>
                        <Ionicons name='search' color='#fff' size={22} />
                    </View>

                    <View style={styles.searchWrapper}>
                        <TextInput placeholder='Search Blood Group' 
                        placeholderTextColor='#fff' 
                        style={styles.search}
                        value={bloodGroup}
                        onChangeText={(value)=>searchGroup(value)}
                        />
                    </View>

                </View>
            </View>


            <FlatList
                data={filterDonors}
                renderItem={({ item }) => <DonorBox item={item} />}
                keyExtractor={item => item.id}
            />


        </View>

    );
}

export default DonorScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: 55,
        backgroundColor: '#fa1616',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    iconStyle: {
        flex: 1,
    },
    icon: {
        marginRight: 5,
    },
    input: {
        flex: 5,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#fff',
        borderRadius: 3,
        borderWidth: 1,
    },
    search: {
        fontSize: 15,
        color: '#fff'
    }
})