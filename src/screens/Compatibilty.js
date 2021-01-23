import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';

const CompatibiltyScreen = () => {

    return (
        <View style={styles.container}>

         <View style={styles.title}>
                <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>BLOOD GROUP</Text>
                </View>

                <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>DONATE TO</Text>
                </View>

                <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>ACCEPT FROM</Text>
                </View>
         </View>


         <View style={styles.up}>
                <View style={styles.upWrapper}>
                <Text style={styles.upText}>A+</Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.upWrapper}>
                <Text style={styles.upText}>A+ AB+</Text>
                </View>
               
                <View style={styles.divider}></View>

                <View style={styles.upWrapper}>
                <Text style={styles.upText}>A+ A- O+ O-</Text>
                </View>
         </View>

         <View style={styles.down}>
                <View style={styles.downWrapper}>
                <Text style={styles.downText}>A-</Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.downWrapper}>
                <Text style={styles.downText}>A+ A- AB+ AB-</Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.downWrapper}>
                <Text style={styles.downText}> A- O-</Text>
                </View>
         </View>


         <View style={styles.up}>
                <View style={styles.upWrapper}>
                <Text style={styles.upText}>B+</Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.upWrapper}>
                <Text style={styles.upText}>B+ AB+</Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.upWrapper}>
                <Text style={styles.upText}>B+ B- O+ O-</Text>
                </View>
         </View>

         <View style={styles.down}>
                <View style={styles.downWrapper}>
                <Text style={styles.downText}>B-</Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.downWrapper}>
                <Text style={styles.downText}>B+ B- AB+ AB-</Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.downWrapper}>
                <Text style={styles.downText}> B- O-</Text>
                </View>
         </View>


         <View style={styles.up}>
                <View style={styles.upWrapper}>
                <Text style={styles.upText}>AB+</Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.upWrapper}>
                <Text style={styles.upText}>AB+</Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.upWrapper}>
                <Text style={styles.upText}>ANY ONE</Text>
                </View>
         </View>

         <View style={styles.down}>
                <View style={styles.downWrapper}>
                <Text style={styles.downText}>AB-</Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.downWrapper}>
                <Text style={styles.downText}>AB+ AB-</Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.downWrapper}>
                <Text style={styles.downText}> AB- A- B- O-</Text>
                </View>
         </View>


         <View style={styles.up}>
                <View style={styles.upWrapper}>
                <Text style={styles.upText}>O+</Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.upWrapper}>
                <Text style={styles.upText}>A+ B+ O+ AB+</Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.upWrapper}>
                <Text style={styles.upText}> O+ O-</Text>
                </View>
         </View>

         <View style={styles.down}>
                <View style={styles.downWrapper}>
                <Text style={styles.downText}>A-</Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.downWrapper}>
                <Text style={styles.downText}>ANY ONE</Text>
                </View>

                <View style={styles.divider}></View>

                <View style={styles.downWrapper}>
                <Text style={styles.downText}>O-</Text>
                </View>
         </View>
        </View>
    )
}

export default CompatibiltyScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        padding: 10,
    },
    title:{  
        width: '100%',
        height: 50,
        flexDirection: 'row',   
    },
    titleWrapper:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    titleText:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fa1616'
    },
    up:{
        backgroundColor: '#ff4646',
        width: '100%',
        height: 50,
        flexDirection: 'row',
        marginTop: 5,
    },
    upWrapper:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",

    },
    upText:{
        fontSize: 15,
        color: '#000'
    },
    down:{
        backgroundColor: '#ff847c',
        width: '100%',
        height: 50,
        flexDirection: 'row',
    },
    downWrapper:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        
    },
    downText:{
        fontSize: 15,
        color: '#000'
    },
    divider:{
        width: 1,
        height: 50,
        backgroundColor: '#000'
    }

})