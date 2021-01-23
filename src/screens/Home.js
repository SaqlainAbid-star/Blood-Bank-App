import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';


const HomeScreen = ({ navigation }) => {

  const { user, logout } = useContext(AuthContext);


  return (
    <View style={styles.container}>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn} onPress={( )=>navigation.navigate('AddDonor')} >
           <FontAwesome5 name="user-plus" color='#fa1616' size={70} />
          <Text style={styles.btnText}>ADD DONOR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={( )=>navigation.navigate('Donors')} >
           <Ionicons name="search" color='#fa1616' size={70} />
          <Text style={styles.btnText}>BLOOD DONORS</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn} onPress={( )=>navigation.navigate('AddRequest')} >
           <Icon name="heart-plus" color='#fa1616' size={70} />
          <Text style={styles.btnText}>ADD REQUEST</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
           <Fontisto name="blood-drop" color='#fa1616' size={70} onPress={( )=>navigation.navigate('Requests')}/>
          <Text style={styles.btnText}>BLOOD REQUESTS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn}>
           <Ionicons name="home" color='#fa1616' size={70} onPress={( )=>navigation.navigate('Banks')} />
          <Text style={styles.btnText}>BLOOD BANKS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
           <FontAwesome5 name="notes-medical" color='#fa1616' size={70} onPress={( )=>navigation.navigate('Blood Compatibility')} />
          <Text style={styles.btnText}>BLOOD COMPATIBLITY</Text>
        </TouchableOpacity>
      </View>



    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  buttons: {
    flexDirection: 'row',
    padding: 10,
  },
  btn: {
    flex:1,
    margin:5,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: "center",
},
btnText: {
    marginTop: 7,
    color: '#fa1616',
    fontSize: 15,
}

});