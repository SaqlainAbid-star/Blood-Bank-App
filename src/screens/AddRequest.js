import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Alert } from 'react-native';
import { Container, Text, Header, Content, Form, Item, Input, Label, Picker, Icon, Button } from 'native-base';
import { windowHeight, windowWidth } from '../utils/Dimensions';
import database from '@react-native-firebase/database';



const AddRequestScreen = ({ navigation }) => {

  const [bloodGroup, setbloodGroup] = useState(null);
  const [requestName, setrequestName] = useState(null);
  const [mobileNumber, setmobileNumber] = useState(null);
  const [address, setaddress] = useState(null);
  const [dob, setdob] = useState(null);
  const [city, setcity] = useState(null);


  
  const submit_Data = () =>{
    let request = {
      requestName,
      mobileNumber,
      dob,
      address,
      city,
      bloodGroup,
    }

    database().ref('/request').push(request).then(() => {
      Alert.alert(
        'The Request has been Added Successfully!',
      );
    })

     setrequestName('')
     setmobileNumber('')
     setaddress('')
     setbloodGroup('')
     setcity('')
     setdob('')
  }
  

  return (
    <View style={styles.container}>

      {/* <View style={styles.heading}>
        <Text style={styles.headingText}>ADD BLOOD REQUEST</Text>
      </View> */}

      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>FULL NAME</Label>
              <Input value={requestName} onChangeText={(value)=>setrequestName(value)} />
            </Item>
            <Item stackedLabel>
              <Label>MOBILE NUMBER</Label>
              <Input value={mobileNumber} onChangeText={(value)=>setmobileNumber(value)}/>
            </Item>
            <Item stackedLabel>
              <Label>DATE OF BIRTH</Label>
              <Input value={dob} onChangeText={(value)=>setdob(value)}/>
            </Item>
            <Item stackedLabel>
              <Label>ADDRESS</Label>
              <Input value={address} onChangeText={(value)=>setaddress(value)}/>
            </Item>
            <Item stackedLabel>
              <Label>CITY</Label>
              <Input value={city} onChangeText={(value)=>setcity(value)}/>
            </Item>


            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={bloodGroup}
                onValueChange={(value) => setbloodGroup(value)}
              >
                <Picker.Item label="Blood Group" value="Blood Group" />
                <Picker.Item label="A+" value="A+" />
                <Picker.Item label="A-" value="A-" />
                <Picker.Item label="B+" value="B+" />
                <Picker.Item label="B-" value="B-" />
                <Picker.Item label="AB+" value="AB+" />
                <Picker.Item label="AB-" value="AB-" />
                <Picker.Item label="O+" value="O+" />
                <Picker.Item label="O-" value="O-" />
      
              </Picker>
            </Item>

            <TouchableOpacity style={styles.buttonContainer} onPress={submit_Data}>
              <Text style={styles.buttonText}>Add Request</Text>
            </TouchableOpacity>

          </Form>
        </Content>
      </Container>
    </View>
  );
}

export default AddRequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginTop: 10,
    backgroundColor: '#fff'
  },
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red'
  },
  buttonContainer: {
    marginTop: 25,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#fa1616',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});