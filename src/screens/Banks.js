import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Container, Text, Header, Content, Form, Item, Input, Label, Picker, Icon, Button } from 'native-base';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import BanksCard from "../components/BanksCard";

const Banks = [
    {
        id: '1',
        Name: 'Hussaini Blood Bank',
        Contact: '+92333-2569795',
        Address: 'Plot#St-02 Block T Qalandria Chowk Opp Talib Chaman Park North Nazimabad Karachi',
        Email: 'Hbb.Reception@Gmail.Com'
    },
    {
        id: '2',
        Name: 'Fatimid Blood Bank',
        Contact: '+922132225284',
        Address: '393 Britto Road, Garden East Karachi',
        Email: 'info@fatimid.org'
    },
    {
        id: '3',
        Name: 'Ali Zaib Foundation',
        Contact: '+92333-3998321',
        Address: 'Plot 16 Street L, Block Y Madina Town, Faisalabad',
        Email: 'Alizaib765@Gmail.Com'
    },
    {
        id: '4',
        Name: 'Afzal Memorial Blood Bank',
        Contact: '(021) 36365641',
        Address: '1/C Shahrah-e-Jahangir, Block 10 Gulberg Town Karachi',
        Email: 'Afzalmemorial@Gmail.Com'
    },

];

const BanksScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
           
            <FlatList
                data={Banks}
                renderItem={({ item }) => <BanksCard item={item} />}
                keyExtractor={item => item.id}
            />

        </View>

    );
}

export default BanksScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
     
    },
})